// 路線別メタデータ: 五日市線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "拝島": { nameKana: "はいじま", interchanges: [{ toOperator: "西武", toLine: "拝島線" }] },
  "武蔵五日市": { nameKana: "むさしいつかいち" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:itsukaichi": {
    area: "関東",
    operator: "JR東日本",
    lineName: "五日市線",
    lineNameKana: "いつかいちせん",
    scope: "八王子支社",
    directionGroups: ["中央方面"],
    stations: [
      { name: "拝島" }, { name: "武蔵五日市" }
    ]
  }
});
