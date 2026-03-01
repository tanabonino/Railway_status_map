// 路線別メタデータ: 常磐線各駅停車（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "綾瀬": { nameKana: "あやせ", interchanges: [{ toOperator: "東京メトロ", toLine: "千代田線" }] },
  "亀有": { nameKana: "かめあり" },
  "金町": { nameKana: "かなまち", interchanges: [{ toOperator: "京成", toLine: "金町線", toStationName: "京成金町" }] },
  "松戸": { nameKana: "まつど", interchanges: [{ toOperator: "新京成", toLine: "新京成線" }] },
  "北松戸": { nameKana: "きたまつど" },
  "馬橋": { nameKana: "まばし", interchanges: [{ toOperator: "流鉄", toLine: "流山線" }] },
  "新松戸": { nameKana: "しんまつど", interchanges: [{ toOperator: "流鉄", toLine: "流山線" }] },
  "北小金": { nameKana: "きたこがね" },
  "南柏": { nameKana: "みなみかしわ" },
  "柏": { nameKana: "かしわ", interchanges: [{ toOperator: "東武", toLine: "野田線" }] },
  "北柏": { nameKana: "きたかしわ" },
  "我孫子": { nameKana: "あびこ" },
  "天王台": { nameKana: "てんのうだい" },
  "取手": { nameKana: "とりで", interchanges: [{ toOperator: "関東鉄道", toLine: "常総線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:joban_local": {
    area: "関東",
    operator: "JR東日本",
    lineName: "常磐線各駅停車",
    lineNameKana: "じょうばんせんかくえきていしゃ",
    scope: "東京支社",
    routeSymbol: "JL",
    directionGroups: ["常磐方面"],
    stations: [
      { name: "綾瀬" }, { name: "亀有" }, { name: "金町" }, { name: "松戸" }, { name: "北松戸" },
      { name: "馬橋" }, { name: "新松戸" }, { name: "北小金" }, { name: "南柏" }, { name: "柏" },
      { name: "北柏" }, { name: "我孫子" }, { name: "天王台" }, { name: "取手" }
    ]
  }
});
