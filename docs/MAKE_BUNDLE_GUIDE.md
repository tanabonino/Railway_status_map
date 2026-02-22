# MAKE_BUNDLE Guide

## 概要
`tools/make_bundle.ps1` は、プロジェクトを 1 本の `bundle.txt` に連結します。

形式:

```text
===== FILE: relative\path\to\file.ext =====
<file body>
```

## 前提
- Windows PowerShell / PowerShell で実行
- 作業場所はリポジトリ直下

## 実行コマンド

```powershell
powershell -ExecutionPolicy Bypass -File tools\make_bundle.ps1
```

## 生成物
- `out\bundle.txt`
- `out\bundle_report.txt`

## オプション
- 出力先変更

```powershell
powershell -ExecutionPolicy Bypass -File tools\make_bundle.ps1 -OutFile bundle.txt -ReportFile bundle_report.txt
```

- 最大ファイルサイズ変更（MB）

```powershell
powershell -ExecutionPolicy Bypass -File tools\make_bundle.ps1 -MaxFileSizeMB 10
```

- 対象を限定（サンプル検証用）

```powershell
powershell -ExecutionPolicy Bypass -File tools\make_bundle.ps1 -IncludePaths @("README.md","SPEC.md","station_metadata\line_yamanote.js")
```

## 既定の除外
- ディレクトリ:
  - `.git\`
  - `.venv\`, `venv\`
  - `__pycache__\`
  - `node_modules\`
  - `dist\`, `build\`, `out\`, `.pytest_cache\`
- ファイル:
  - `*.pyc`, `*.log`, `*.tmp`
  - `.env`（`.env.example` は対象）

## 注意
- `bundle.txt` 内でヘッダ行 `===== FILE: ... =====` は予約です。
- バイナリ判定（NUL 含有）やサイズ上限に引っかかったファイルはスキップされ、`bundle_report.txt` に記録されます。

