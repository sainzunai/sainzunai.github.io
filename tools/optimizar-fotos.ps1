<#
  Genera las fotos de la web a partir de input_figuras/ (copia local de los originales).

  Cada fila de tools/fotos.csv indica:
    origen   ruta dentro de input_figuras
    destino  ruta dentro de assets/images
    recorte  opcional: x,y,ancho,alto en fracciones de 0 a 1
    max      opcional: lado mayor en px de la versión grande (1600 por defecto)

  Por cada foto crea dos versiones JPEG sin metadatos (se elimina la ubicación GPS del móvil):
    assets/images/<destino>               visor a pantalla completa
    assets/images/<carpeta>/thumbs/<foto> tarjetas y miniaturas (640 px)

  Uso (desde la carpeta del portfolio):
    powershell -ExecutionPolicy Bypass -File tools/optimizar-fotos.ps1 [-Force]
#>
param([switch]$Force)

Add-Type -AssemblyName System.Drawing

$portfolio = Split-Path $PSScriptRoot -Parent
$inputDir = Join-Path $portfolio 'input_figuras'
$outputDir = Join-Path $portfolio 'assets\images'
$thumbSize = 640

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

function Read-OrientedImage([string]$path) {
  $img = [System.Drawing.Image]::FromFile($path)
  if ($img.PropertyIdList -contains 0x0112) {
    switch ([BitConverter]::ToUInt16($img.GetPropertyItem(0x0112).Value, 0)) {
      3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
  }
  return $img
}

function Save-Resized($img, [System.Drawing.Rectangle]$crop, [int]$maxSide, [string]$path, [long]$quality) {
  $scale = [math]::Min(1.0, $maxSide / [math]::Max($crop.Width, $crop.Height))
  $bmp = [System.Drawing.Bitmap]::new([math]::Max(1, [int]($crop.Width * $scale)), [math]::Max(1, [int]($crop.Height * $scale)))
  $gfx = [System.Drawing.Graphics]::FromImage($bmp)
  $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $gfx.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

  # avoid a faint dark border when downscaling
  $attributes = [System.Drawing.Imaging.ImageAttributes]::new()
  $attributes.SetWrapMode([System.Drawing.Drawing2D.WrapMode]::TileFlipXY)
  $gfx.DrawImage($img, [System.Drawing.Rectangle]::new(0, 0, $bmp.Width, $bmp.Height),
    $crop.X, $crop.Y, $crop.Width, $crop.Height, [System.Drawing.GraphicsUnit]::Pixel, $attributes)

  New-Item -ItemType Directory -Force (Split-Path $path -Parent) | Out-Null
  $params = [System.Drawing.Imaging.EncoderParameters]::new(1)
  $params.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, $quality)
  $bmp.Save($path, $jpegCodec, $params)

  $attributes.Dispose(); $gfx.Dispose(); $bmp.Dispose()
}

$rows = Import-Csv -LiteralPath (Join-Path $PSScriptRoot 'fotos.csv') -Delimiter ';' -Encoding UTF8
$done = 0; $skipped = 0

foreach ($row in $rows) {
  $source = Join-Path $inputDir $row.origen
  $target = Join-Path $outputDir ($row.destino -replace '/', '\')
  $thumb = Join-Path (Join-Path (Split-Path $target -Parent) 'thumbs') (Split-Path $target -Leaf)

  if (-not (Test-Path -LiteralPath $source)) { Write-Warning "No existe: $($row.origen)"; continue }

  $isFresh = (Test-Path -LiteralPath $target) -and (Test-Path -LiteralPath $thumb) -and
    ((Get-Item -LiteralPath $target).LastWriteTime -gt (Get-Item -LiteralPath $source).LastWriteTime)
  if ($isFresh -and -not $Force) { $skipped++; continue }

  $img = Read-OrientedImage $source
  $crop = [System.Drawing.Rectangle]::new(0, 0, $img.Width, $img.Height)

  if ($row.recorte) {
    $f = $row.recorte.Split(',') | ForEach-Object { [double]::Parse($_, [Globalization.CultureInfo]::InvariantCulture) }
    $crop = [System.Drawing.Rectangle]::new([int]($img.Width * $f[0]), [int]($img.Height * $f[1]), [int]($img.Width * $f[2]), [int]($img.Height * $f[3]))
  }

  $maxSide = if ($row.max) { [int]$row.max } else { 1600 }

  Save-Resized $img $crop $maxSide $target 82
  Save-Resized $img $crop $thumbSize $thumb 78
  $img.Dispose()

  $done++
  "{0,-45} {1,5} KB  (miniatura {2,4} KB)" -f $row.destino, [math]::Round((Get-Item -LiteralPath $target).Length / 1KB), [math]::Round((Get-Item -LiteralPath $thumb).Length / 1KB)
}

"Generadas: $done   Sin cambios: $skipped"
