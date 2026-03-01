// 路線別メタデータ: 成田線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "千葉": { nameKana: "ちば", interchanges: [{ toOperator: "千葉都市モノレール", toLine: "1号線" }, { toOperator: "千葉都市モノレール", toLine: "2号線" }] },
  "成田": { nameKana: "なりた", interchanges: [{ toOperator: "京成", toLine: "本線", toStationName: "京成成田" }] },
  "佐原": { nameKana: "さわら" },
  "銚子": { nameKana: "ちょうし", interchanges: [{ toOperator: "銚子電気鉄道", toLine: "銚子電気鉄道線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:narita": {
    area: "関東",
    operator: "JR東日本",
    lineName: "成田線",
    lineNameKana: "なりたせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "千葉" }, { name: "成田" }, { name: "佐原" }, { name: "銚子" }
    ]
  }
});
