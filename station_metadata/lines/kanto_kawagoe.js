// 路線別メタデータ: 川越線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "大宮": { nameKana: "おおみや", interchanges: [{ toOperator: "東武", toLine: "野田線" }, { toOperator: "埼玉新都市交通", toLine: "伊奈線" }] },
  "川越": { nameKana: "かわごえ", interchanges: [{ toOperator: "東武", toLine: "東上線" }, { toOperator: "西武", toLine: "新宿線", toStationName: "本川越" }] },
  "高麗川": { nameKana: "こまがわ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:kawagoe": {
    area: "関東",
    operator: "JR東日本",
    lineName: "川越線",
    lineNameKana: "かわごえせん",
    scope: "大宮支社",
    routeSymbol: "JA",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "大宮" }, { name: "川越" }, { name: "高麗川" }
    ]
  }
});
