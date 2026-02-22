param(
  [string]$Root = ".",
  [string]$OutFile = "out/bundle.txt",
  [string]$ReportFile = "out/bundle_report.txt",
  [int]$MaxFileSizeMB = 5,
  [string[]]$IncludePaths = @()
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Normalize-RelPath([string]$rootAbs, [string]$fileAbs) {
  $rel = [System.IO.Path]::GetRelativePath($rootAbs, $fileAbs)
  return $rel.Replace("/", "\")
}

function Should-ExcludeFile([string]$relPath) {
  $p = $relPath.ToLowerInvariant()
  $name = [System.IO.Path]::GetFileName($p)

  if ($p -like ".git\*" -or $p -eq ".git") { return $true }
  if ($p -like ".venv\*" -or $p -eq ".venv") { return $true }
  if ($p -like "venv\*" -or $p -eq "venv") { return $true }
  if ($p -like "__pycache__\*" -or $p -like "*\__pycache__\*") { return $true }
  if ($p -like "node_modules\*" -or $p -like "*\node_modules\*") { return $true }
  if ($p -like "dist\*" -or $p -like "*\dist\*") { return $true }
  if ($p -like "build\*" -or $p -like "*\build\*") { return $true }
  if ($p -like "out\*" -or $p -like "*\out\*") { return $true }
  if ($p -like ".pytest_cache\*" -or $p -like "*\.pytest_cache\*") { return $true }

  if ($name -like "*.pyc") { return $true }
  if ($name -like "*.log") { return $true }
  if ($name -like "*.tmp") { return $true }
  if ($name -eq ".env") { return $true }

  return $false
}

function Is-LikelyText([byte[]]$bytes) {
  if ($bytes.Length -eq 0) { return $true }
  foreach ($b in $bytes) {
    if ($b -eq 0) { return $false }
  }
  return $true
}

$rootAbs = [System.IO.Path]::GetFullPath($Root)
$outAbs = [System.IO.Path]::GetFullPath((Join-Path $rootAbs $OutFile))
$reportAbs = [System.IO.Path]::GetFullPath((Join-Path $rootAbs $ReportFile))
$maxBytes = $MaxFileSizeMB * 1MB

$outDir = [System.IO.Path]::GetDirectoryName($outAbs)
$reportDir = [System.IO.Path]::GetDirectoryName($reportAbs)
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }
if ($reportDir -and -not (Test-Path $reportDir)) { New-Item -ItemType Directory -Path $reportDir | Out-Null }

$allFiles = @()
if ($IncludePaths.Count -gt 0) {
  foreach ($inc in $IncludePaths) {
    $target = [System.IO.Path]::GetFullPath((Join-Path $rootAbs $inc))
    if (Test-Path $target -PathType Container) {
      $allFiles += Get-ChildItem -LiteralPath $target -Recurse -File
    } elseif (Test-Path $target -PathType Leaf) {
      $allFiles += Get-Item -LiteralPath $target
    }
  }
} else {
  $allFiles = Get-ChildItem -LiteralPath $rootAbs -Recurse -File
}

$allFiles = $allFiles | Sort-Object FullName -Unique

$sb = New-Object System.Text.StringBuilder
$includeCount = 0
$includeChars = 0
$skipped = New-Object System.Collections.Generic.List[string]

foreach ($f in $allFiles) {
  $abs = $f.FullName
  if ($abs -eq $outAbs -or $abs -eq $reportAbs) { continue }

  $rel = Normalize-RelPath -rootAbs $rootAbs -fileAbs $abs
  if (Should-ExcludeFile $rel) { continue }

  if ($f.Length -gt $maxBytes) {
    $skipped.Add("$rel`tSKIP_SIZE`t$f.Length")
    continue
  }

  try {
    $bytes = [System.IO.File]::ReadAllBytes($abs)
    if (-not (Is-LikelyText $bytes)) {
      $skipped.Add("$rel`tSKIP_BINARY`t$f.Length")
      continue
    }
    $content = [System.Text.Encoding]::UTF8.GetString($bytes)
  } catch {
    $skipped.Add("$rel`tSKIP_READ_ERROR`t$($_.Exception.Message)")
    continue
  }

  [void]$sb.Append("===== FILE: $rel =====`r`n")
  [void]$sb.Append($content)
  if (-not $content.EndsWith("`n") -and -not $content.EndsWith("`r")) {
    [void]$sb.Append("`r`n")
  }

  $includeCount += 1
  $includeChars += $content.Length
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outAbs, $sb.ToString(), $utf8NoBom)

$report = New-Object System.Text.StringBuilder
[void]$report.AppendLine("BUNDLE REPORT")
[void]$report.AppendLine("Root: $rootAbs")
[void]$report.AppendLine("Bundle: $outAbs")
[void]$report.AppendLine("GeneratedAt: $(Get-Date -Format s)")
[void]$report.AppendLine("IncludedFiles: $includeCount")
[void]$report.AppendLine("IncludedChars: $includeChars")
[void]$report.AppendLine("SkippedFiles: $($skipped.Count)")
[void]$report.AppendLine("")
[void]$report.AppendLine("SKIPPED LIST")
foreach ($line in $skipped) {
  [void]$report.AppendLine($line)
}
[System.IO.File]::WriteAllText($reportAbs, $report.ToString(), $utf8NoBom)

Write-Host "Bundle generated: $outAbs"
Write-Host "Report generated: $reportAbs"
Write-Host "Included files: $includeCount"
Write-Host "Skipped files: $($skipped.Count)"
