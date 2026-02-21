// 駅メタデータ（駅名カナ / 乗換）
// キーは駅名（「駅」なし）で定義。
window.stationMetadata = Object.assign({}, window.stationMetadata || {}, {
  "東京": {
    nameKana: "とうきょう",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "東京メトロ", toLine: "東西線" },
      { toOperator: "東京メトロ", toLine: "千代田線" }
    ]
  },
  "新橋": {
    nameKana: "しんばし",
    interchanges: [
      { toOperator: "都営", toLine: "浅草線" },
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "ゆりかもめ", toLine: "東京臨海新交通臨海線" }
    ]
  },
  "品川": {
    nameKana: "しながわ",
    interchanges: [
      { toOperator: "京急", toLine: "本線" }
    ]
  },
  "上野": {
    nameKana: "うえの",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "東京メトロ", toLine: "日比谷線" }
    ]
  },
  "秋葉原": {
    nameKana: "あきはばら",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "日比谷線" },
      { toOperator: "つくばエクスプレス", toLine: "常磐新線" }
    ]
  },
  "神田": {
    nameKana: "かんだ",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "銀座線" }
    ]
  },
  "池袋": {
    nameKana: "いけぶくろ",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "東京メトロ", toLine: "有楽町線" },
      { toOperator: "東京メトロ", toLine: "副都心線" },
      { toOperator: "西武", toLine: "池袋線" },
      { toOperator: "東武", toLine: "東上線" }
    ]
  },
  "新宿": {
    nameKana: "しんじゅく",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "都営", toLine: "新宿線" },
      { toOperator: "都営", toLine: "大江戸線" },
      { toOperator: "小田急", toLine: "小田原線" },
      { toOperator: "京王", toLine: "京王線" }
    ]
  },
  "渋谷": {
    nameKana: "しぶや",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "東京メトロ", toLine: "半蔵門線" },
      { toOperator: "東京メトロ", toLine: "副都心線" },
      { toOperator: "東急", toLine: "東横線" },
      { toOperator: "東急", toLine: "田園都市線" },
      { toOperator: "京王", toLine: "井の頭線" }
    ]
  },
  "大宮": {
    nameKana: "おおみや",
    interchanges: [
      { toOperator: "東武", toLine: "野田線" },
      { toOperator: "埼玉新都市交通", toLine: "伊奈線" }
    ]
  },
  "横浜": {
    nameKana: "よこはま",
    interchanges: [
      { toOperator: "東急", toLine: "東横線" },
      { toOperator: "京急", toLine: "本線" },
      { toOperator: "相鉄", toLine: "本線" },
      { toOperator: "横浜市営地下鉄", toLine: "ブルーライン" },
      { toOperator: "みなとみらい線", toLine: "みなとみらい線" }
    ]
  },
  "川崎": {
    nameKana: "かわさき",
    interchanges: [
      { toOperator: "京急", toLine: "本線", toStationName: "京急川崎" }
    ]
  },
  "赤羽": {
    nameKana: "あかばね"
  },
  "有楽町": {
    nameKana: "ゆうらくちょう",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "有楽町線" }
    ]
  },
  "浜松町": {
    nameKana: "はままつちょう",
    interchanges: [
      { toOperator: "東京モノレール", toLine: "東京モノレール羽田空港線" },
      { toOperator: "都営", toLine: "大江戸線", toStationName: "大門" },
      { toOperator: "都営", toLine: "浅草線", toStationName: "大門" }
    ]
  },
  "田町": {
    nameKana: "たまち",
    interchanges: [
      { toOperator: "都営", toLine: "浅草線", toStationName: "三田" },
      { toOperator: "都営", toLine: "三田線", toStationName: "三田" }
    ]
  },
  "日暮里": {
    nameKana: "にっぽり",
    interchanges: [
      { toOperator: "京成", toLine: "本線" },
      { toOperator: "日暮里・舎人ライナー", toLine: "日暮里・舎人ライナー" }
    ]
  },
  "西日暮里": {
    nameKana: "にしにっぽり",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "千代田線" },
      { toOperator: "日暮里・舎人ライナー", toLine: "日暮里・舎人ライナー" }
    ]
  },
  "北千住": {
    nameKana: "きたせんじゅ",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "千代田線" },
      { toOperator: "東京メトロ", toLine: "日比谷線" },
      { toOperator: "東武", toLine: "伊勢崎線" },
      { toOperator: "首都圏新都市鉄道", toLine: "つくばエクスプレス" }
    ]
  },
  "松戸": {
    nameKana: "まつど",
    interchanges: [
      { toOperator: "新京成", toLine: "新京成線" }
    ]
  },
  "柏": {
    nameKana: "かしわ",
    interchanges: [
      { toOperator: "東武", toLine: "野田線" }
    ]
  },
  "錦糸町": {
    nameKana: "きんしちょう",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "半蔵門線" }
    ]
  },
  "西船橋": {
    nameKana: "にしふなばし",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "東西線" },
      { toOperator: "東葉高速鉄道", toLine: "東葉高速線" }
    ]
  },
  "船橋": {
    nameKana: "ふなばし",
    interchanges: [
      { toOperator: "東武", toLine: "野田線" },
      { toOperator: "京成", toLine: "本線", toStationName: "京成船橋" }
    ]
  },
  "津田沼": {
    nameKana: "つだぬま",
    interchanges: [
      { toOperator: "新京成", toLine: "新京成線", toStationName: "新津田沼" }
    ]
  },
  "千葉": {
    nameKana: "ちば",
    interchanges: [
      { toOperator: "千葉都市モノレール", toLine: "1号線" },
      { toOperator: "千葉都市モノレール", toLine: "2号線" }
    ]
  },
  "立川": {
    nameKana: "たちかわ",
    interchanges: [
      { toOperator: "多摩都市モノレール", toLine: "多摩都市モノレール線" }
    ]
  },
  "八王子": {
    nameKana: "はちおうじ",
    interchanges: [
      { toOperator: "京王", toLine: "京王線", toStationName: "京王八王子" }
    ]
  },
  "武蔵小杉": {
    nameKana: "むさしこすぎ",
    interchanges: [
      { toOperator: "東急", toLine: "東横線" },
      { toOperator: "東急", toLine: "目黒線" }
    ]
  },
  "戸塚": {
    nameKana: "とつか",
    interchanges: [
      { toOperator: "横浜市営地下鉄", toLine: "ブルーライン" }
    ]
  },
  "大船": {
    nameKana: "おおふな",
    interchanges: [
      { toOperator: "湘南モノレール", toLine: "江の島線" }
    ]
  },
  "仙台": {
    nameKana: "せんだい",
    interchanges: [
      { toOperator: "仙台市地下鉄", toLine: "南北線" },
      { toOperator: "仙台市地下鉄", toLine: "東西線" }
    ]
  },
  "盛岡": {
    nameKana: "もりおか",
    interchanges: [
      { toOperator: "IGRいわて銀河鉄道", toLine: "いわて銀河鉄道線" }
    ]
  },
  "新潟": {
    nameKana: "にいがた"
  },
  "長野": {
    nameKana: "ながの",
    interchanges: [
      { toOperator: "長野電鉄", toLine: "長野線" }
    ]
  },
  "高崎": {
    nameKana: "たかさき",
    interchanges: [
      { toOperator: "上信電鉄", toLine: "上信線" }
    ]
  }
});
