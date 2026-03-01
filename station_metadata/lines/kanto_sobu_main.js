// 路線別メタデータ: 総武本線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "千葉": { nameKana: "ちば", interchanges: [{ toOperator: "千葉都市モノレール", toLine: "1号線" }, { toOperator: "千葉都市モノレール", toLine: "2号線" }] },
  "佐倉": { nameKana: "さくら" },
  "成東": { nameKana: "なるとう" },
  "八日市場": { nameKana: "ようかいちば" },
  "銚子": { nameKana: "ちょうし", interchanges: [{ toOperator: "銚子電気鉄道", toLine: "銚子電気鉄道線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:sobu_main": {
    area: "関東",
    operator: "JR東日本",
    lineName: "総武本線",
    lineNameKana: "そうぶほんせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "千葉" }, { name: "佐倉" }, { name: "成東" }, { name: "八日市場" }, { name: "銚子" }
    ]
  }
});
