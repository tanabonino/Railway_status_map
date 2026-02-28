// 路線別メタデータ: 京葉線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東京": { nameKana: "とうきょう", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }, { toOperator: "JR東日本", toLine: "中央線" }, { toOperator: "JR東日本", toLine: "東海道線" }, { toOperator: "JR東日本", toLine: "ほか多数" }, { toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "八丁堀": { nameKana: "はっちょうぼり", interchanges: [{ toOperator: "東京メトロ", toLine: "日比谷線" }] },
  "越中島": { nameKana: "えっちゅうじま" },
  "潮見": { nameKana: "しおみ" },
  "新木場": { nameKana: "しんきば", interchanges: [{ toOperator: "東京メトロ", toLine: "有楽町線" }, { toOperator: "東京臨海高速鉄道", toLine: "りんかい線" }] },
  "葛西臨海公園": { nameKana: "かさいりんかいこうえん" },
  "舞浜": { nameKana: "まいはま", interchanges: [{ toOperator: "東京ディズニーリゾート", toLine: "最寄" }] },
  "新浦安": { nameKana: "しんうらやす" },
  "市川塩浜": { nameKana: "いちかわしおはま" },
  "西船橋": { nameKana: "にしふなばし", interchanges: [{ toOperator: "JR東日本", toLine: "武蔵野線" }, { toOperator: "JR東日本", toLine: "総武線（各駅停車）" }, { toOperator: "東京メトロ", toLine: "東西線" }, { toOperator: "東葉高速鉄道", toLine: "東葉高速線" }] },
  "二俣新町": { nameKana: "ふたまたしんまち" },
  "南船橋": { nameKana: "みなみふなばし" },
  "新習志野": { nameKana: "しんならしの" },
  "幕張豊砂": { nameKana: "まくはりとよすな" },
  "海浜幕張": { nameKana: "かいひんまくはり" },
  "検見川浜": { nameKana: "けみがわはま" },
  "稲毛海岸": { nameKana: "いなげかいがん" },
  "千葉みなと": { nameKana: "ちばみなと", interchanges: [{ toOperator: "千葉都市モノレール", toLine: "1号線" }] },
  "蘇我": { nameKana: "そが", interchanges: [{ toOperator: "JR東日本", toLine: "内房線" }, { toOperator: "JR東日本", toLine: "外房線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:keiyo": {
    area: "関東",
    operator: "JR東日本",
    lineName: "京葉線",
    lineNameKana: "けいようせん",
    scope: "千葉支社",
    routeSymbol: "JE",
    directionGroups: ["総武方面"],
    displayOrder: 1,
    branchLayout: { junctionIndex: 8, branchStartIndex: 18 },
    stations: [
      { name: "東京" },
      { name: "八丁堀" },
      { name: "越中島" },
      { name: "潮見" },
      { name: "新木場" },
      { name: "葛西臨海公園" },
      { name: "舞浜" },
      { name: "新浦安" },
      { name: "市川塩浜" },
      { name: "二俣新町" },
      { name: "南船橋" },
      { name: "新習志野" },
      { name: "幕張豊砂" },
      { name: "海浜幕張" },
      { name: "検見川浜" },
      { name: "稲毛海岸" },
      { name: "千葉みなと" },
      { name: "蘇我" },
      { name: "市川塩浜" },
      { name: "西船橋" }
    ]
  }
});
