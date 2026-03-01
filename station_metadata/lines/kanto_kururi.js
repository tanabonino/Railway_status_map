// 路線別メタデータ: 久留里線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "木更津": { nameKana: "きさらづ" },
  "横田": { nameKana: "よこた" },
  "久留里": { nameKana: "くるり" },
  "上総亀山": { nameKana: "かずさかめやま" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:kururi": {
    area: "関東",
    operator: "JR東日本",
    lineName: "久留里線",
    lineNameKana: "くるりせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "木更津" }, { name: "横田" }, { name: "久留里" }, { name: "上総亀山" }
    ]
  }
});
