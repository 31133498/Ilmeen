# Download high-quality Unsplash images into public/assets
# Run from project root in PowerShell: .\scripts\download-assets.ps1

$assets = @(
    @{ url = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80'; out='public/assets/hero.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80'; out='public/assets/before.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80'; out='public/assets/after.jpg' },
    @{ url = 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60'; out='public/assets/phone.jpg' }
)

# Create directory if missing
$dir = Join-Path (Get-Location) 'public/assets'
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

foreach ($a in $assets) {
    $outPath = Join-Path (Get-Location) $a.out
    if (Test-Path $outPath) {
        Write-Host "Skipping existing: $outPath"
        continue
    }
    Write-Host "Downloading $($a.url) -> $outPath"
    try {
        Invoke-WebRequest -Uri $a.url -OutFile $outPath -UseBasicParsing -TimeoutSec 30
    } catch {
        Write-Host "Failed to download $($a.url): $_"
    }
}

Write-Host "Done. You can run 'npm run build' after download completes."