# Railway Status Map 仕様書

## 1. 目的
- JR東日本エリア中心の運行情報文をローカル環境で解析し、路線カードに反映する。
- `file://` で動作し、Webサーバや外部CDNに依存しない。
- 駅情報（駅名かな・乗換）を右カラムで確認できる運用画面を提供する。

## 2. 実行環境
- 想定ブラウザ: Microsoft Edge
- 配置: 単一フォルダ配下で静的ファイルをそのまま開く
- 外部通信: なし

## 3. ファイル構成
```text
Railway_status_map/
  .gitattributes
  README.md
  SPEC.md
  railway_status_map.html        # 画面HTML/CSS、script読込順
  railway_lines.js               # 解析・状態管理・描画ロジック本体
  sample_notices.js              # サンプル自然文
  data_kanto.js                  # 路線マスタ(関東)
  data_tohoku.js                 # 路線マスタ(東北)
  data_shinetsu.js               # 路線マスタ(信越)
  data_limited.js                # 在来線特急マスタ
  data_shinkansen.js             # 新幹線マスタ
  station_metadata.js            # 駅メタデータ統合ローダー
  route_icons/                   # 路線記号SVGアイコン
    ico_rosen_*.svg
  station_metadata/
    lines/                       # 路線別チャンク（優先）
      kanto_tokaido.js
      kanto_keihin_tohoku.js
      kanto_yokosuka.js
      kanto_nambu.js
      kanto_yokohama.js
      kanto_ito.js
      kanto_sagami.js
      kanto_tsurumi.js
      kanto_utsunomiya.js
      kanto_takasaki.js
      kanto_saikyo.js
      kanto_kawagoe.js
      kanto_musashino.js
      kanto_joetsu.js
      kanto_shinetsu_main.js
      kanto_agatsuma.js
      kanto_karasuyama.js
      kanto_hachiko.js
      kanto_nikko.js
      kanto_ryomo.js
    group_direct_service.js      # 方面/サービス単位（移行中）
    line_yamanote.js
    line_chuo_rapid.js
    line_sobu_joban.js
    line_tohoku_shinetsu.js
```

## 4. UI仕様
- 3カラム構成
- 左: 自然文入力と手動補助設定
- 中央: 路線カード一覧
- 右: 駅データ詳細（クリック選択駅の情報）
- レスポンシブ
- 幅が狭い場合は右カラムを下段へ移動

## 5. 路線カード表示仕様
- 路線ごとに状態（平常/遅延/見合わせ/運休）を保持
- 区間・方向・原因・再開見込みを表示
- 駅列は横スクロール可
- 乗換データがある駅は枠色変更+右上ドットで強調
- 駅クリックで右カラム詳細を更新

## 6. 駅詳細パネル仕様
- 表示項目
- 駅名
- 所属（エリア・路線・系統scope）
- 駅名かな
- 乗換一覧（事業者 / 路線 / 必要時駅名）
- 選択状態は `localStorage` (`selectedStationV1`) に保存

## 7. 解析仕様（自然文）
- 主な抽出項目
- 路線
- 状態 `normal|delay|suspend|stop`
- 方向 `both|up|down|unknown`
- 区間（`A〜B` 複数可）
- 原因
- 再開見込み

### 区間解釈の補正ルール
- `A〜B駅間の上下線で運転を見合わせ` は区間見合わせとして扱う。
- `A〜B駅間での〜の影響で、上下線で運転を見合わせ` は原因箇所文脈と見なし、全線見合わせ扱いに補正する。
- 見合わせ/運休で区間が空の場合は、路線図の駅間セグメントを全線アクティブ表示する。

## 8. データモデル
- 路線キー: `area:line_key`
- 路線レコード
- `area`, `lineName`, `lineNameKana`, `scope`, `stations[]`
- 駅レコード
- `id`, `name`, `nameKana`, `interchanges[]`
- 乗換レコード
- `toOperator`, `toLine`, `toStationName`

## 9. 駅メタデータ分割方針
- 基本方針: **路線別ファイルを正** とする（`station_metadata/lines/*.js`）。
- `station_metadata/*.js` で分割定義し、`window.stationMetadataChunks` に追加する。
- `station_metadata.js` で全チャンクを統合し `window.stationMetadata` を生成する。
- 同一駅が複数ファイルに出る場合
- `nameKana` は後勝ち
- `interchanges` は重複除去してマージ
- 方面別/サービス別ファイルは移行期間中の互換レイヤとして利用し、最終的には路線別へ寄せる。
- 同一路線が複数方面に含まれるケースは、路線別ファイル1つを参照する運用で重複定義を避ける。
- JR東日本サイト上で支社単位に分割される路線は、同一路線ファイル内で `scope` を意識した追記、または将来的に `lines/<line>__<scope>.js` 分割を許容する。

## 10. 今後の拡充方針
- 駅メタデータはユーザー要求の単位（方面/路線）で分割を整理する。
- 優先方面: 山手線 / 直通サービス / 東海道方面
- 追加時は「駅名かな」と「主要乗換」をセットで登録する。

## 11. 路線記号アイコン運用
- 路線記号は `railway_lines.js` の `ROUTE_SYMBOL_BY_LINE_NAME` で路線名に紐付ける。
- アイコンファイルは `route_icons/ico_rosen_<symbol小文字>.svg` 命名で配置する。
- アイコン表示対応は `railway_lines.js` の `ROUTE_ICON_BY_SYMBOL` に追加する。
- アイコン未登録の記号はフォールバックとして色付き四角バッジ表示になる。
- 実SVG差し替え時は同名ファイルを上書きすれば表示が更新される。

## 12. 既知の注意点
- `README.md` は現状との差分が残っている箇所があるため、運用時は本 `SPEC.md` を正とする。
