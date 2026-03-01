// 路線別メタデータ: 常磐線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "上野": { nameKana: "うえの", interchanges: [{ toOperator: "東京メトロ", toLine: "銀座線" }, { toOperator: "東京メトロ", toLine: "日比谷線" }] },
  "日暮里": { nameKana: "にっぽり", interchanges: [{ toOperator: "京成", toLine: "本線" }] },
  "三河島": { nameKana: "みかわしま" },
  "南千住": { nameKana: "みなみせんじゅ", interchanges: [{ toOperator: "東京メトロ", toLine: "日比谷線" }, { toOperator: "首都圏新都市鉄道", toLine: "つくばエクスプレス" }] },
  "北千住": { nameKana: "きたせんじゅ", interchanges: [{ toOperator: "東京メトロ", toLine: "千代田線" }, { toOperator: "東京メトロ", toLine: "日比谷線" }, { toOperator: "東武", toLine: "伊勢崎線" }, { toOperator: "首都圏新都市鉄道", toLine: "つくばエクスプレス" }] },
  "松戸": { nameKana: "まつど", interchanges: [{ toOperator: "新京成", toLine: "新京成線" }] },
  "柏": { nameKana: "かしわ", interchanges: [{ toOperator: "東武", toLine: "野田線" }] },
  "我孫子": { nameKana: "あびこ" },
  "取手": { nameKana: "とりで", interchanges: [{ toOperator: "関東鉄道", toLine: "常総線" }] },
  "藤代": { nameKana: "ふじしろ" },
  "龍ケ崎市": { nameKana: "りゅうがさきし" },
  "牛久": { nameKana: "うしく" },
  "ひたち野うしく": { nameKana: "ひたちのうしく" },
  "荒川沖": { nameKana: "あらかわおき" },
  "土浦": { nameKana: "つちうら" },
  "石岡": { nameKana: "いしおか" },
  "友部": { nameKana: "ともべ" },
  "赤塚": { nameKana: "あかつか" },
  "水戸": { nameKana: "みと", interchanges: [{ toOperator: "鹿島臨海鉄道", toLine: "大洗鹿島線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:joban": {
    area: "関東",
    operator: "JR東日本",
    lineName: "常磐線",
    lineNameKana: "じょうばんせん",
    scope: "水戸支社",
    routeSymbol: "JJ",
    directionGroups: ["常磐方面"],
    stations: [
      { name: "上野" }, { name: "日暮里" }, { name: "三河島" }, { name: "南千住" }, { name: "北千住" },
      { name: "松戸" }, { name: "柏" }, { name: "我孫子" }, { name: "取手" }, { name: "藤代" },
      { name: "龍ケ崎市" }, { name: "牛久" }, { name: "ひたち野うしく" }, { name: "荒川沖" }, { name: "土浦" },
      { name: "石岡" }, { name: "友部" }, { name: "赤塚" }, { name: "水戸" }
    ]
  }
});
