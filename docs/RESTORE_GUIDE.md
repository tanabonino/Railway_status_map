# RESTORE Guide (Excel Macro)

## 目的
制限PCで `bundle.txt` からファイルを自動復元します。

## 使うもの
- メモ帳
- Excel（マクロ有効）
- `excel_macro\RestoreFromBundle.bas`

## 手順
1. ブラウザで `bundle.txt` を開いて `Ctrl + A` → `Ctrl + C`。
2. 制限PCでメモ帳を開き、貼り付け。
3. Excelファイルを保存したいフォルダに `bundle.txt` として保存（UTF-8推奨）。
4. Excelを開く。
5. `Alt + F11` → VBAエディタ。
6. `ファイル` → `ファイルのインポート` から `RestoreFromBundle.bas` を読み込み。
7. `RestoreFilesFromBundle` を実行。

## 復元先
- `<Excelファイルと同じフォルダ>\restored\`

## 仕様
- `bundle.txt` のヘッダ行:
  - `===== FILE: relative\path\to\file.ext =====`
- 既存ファイルは上書き。
- フォルダ階層は自動作成。
- UTF-8（BOMあり/なし）対応。
- 改行は CRLF/LF 混在でも読込可能。

## エラー時
- ダイアログに「どのファイルで失敗したか」を含めて表示します。
- よくある原因:
  - `bundle.txt` がExcelと同じフォルダにない
  - 相対パスに不正文字（`:`, `..`）が含まれる
  - 書き込み権限不足

