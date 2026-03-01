// 路線別メタデータ: 常磐線快速電車（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "品川": { nameKana: "しながわ", interchanges: [{ toOperator: "京急", toLine: "本線" }] },
  "新橋": { nameKana: "しんばし", interchanges: [{ toOperator: "都営", toLine: "浅草線" }, { toOperator: "東京メトロ", toLine: "銀座線" }, { toOperator: "ゆりかもめ", toLine: "東京臨海新交通臨海線" }] },
  "東京": { nameKana: "とうきょう", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "上野": { nameKana: "うえの", interchanges: [{ toOperator: "東京メトロ", toLine: "銀座線" }, { toOperator: "東京メトロ", toLine: "日比谷線" }] },
  "日暮里": { nameKana: "にっぽり", interchanges: [{ toOperator: "京成", toLine: "本線" }] },
  "北千住": { nameKana: "きたせんじゅ", interchanges: [{ toOperator: "東京メトロ", toLine: "千代田線" }, { toOperator: "東京メトロ", toLine: "日比谷線" }, { toOperator: "東武", toLine: "伊勢崎線" }, { toOperator: "首都圏新都市鉄道", toLine: "つくばエクスプレス" }] },
  "松戸": { nameKana: "まつど", interchanges: [{ toOperator: "新京成", toLine: "新京成線" }] },
  "柏": { nameKana: "かしわ", interchanges: [{ toOperator: "東武", toLine: "野田線" }] },
  "我孫子": { nameKana: "あびこ" },
  "取手": { nameKana: "とりで", interchanges: [{ toOperator: "関東鉄道", toLine: "常総線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:joban_rapid": {
    area: "関東",
    operator: "JR東日本",
    lineName: "常磐線快速電車",
    lineNameKana: "じょうばんせんかいそくでんしゃ",
    scope: "東京支社",
    routeSymbol: "JJ",
    directionGroups: ["常磐方面"],
    stations: [
      { name: "品川" }, { name: "新橋" }, { name: "東京" }, { name: "上野" }, { name: "日暮里" },
      { name: "北千住" }, { name: "松戸" }, { name: "柏" }, { name: "我孫子" }, { name: "取手" }
    ]
  }
});
