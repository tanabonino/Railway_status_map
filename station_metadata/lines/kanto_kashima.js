// 路線別メタデータ: 鹿島線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "佐原": { nameKana: "さわら" },
  "十二橋": { nameKana: "じゅうにきょう" },
  "潮来": { nameKana: "いたこ" },
  "鹿島神宮": { nameKana: "かしまじんぐう", interchanges: [{ toOperator: "鹿島臨海鉄道", toLine: "大洗鹿島線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:kashima": {
    area: "関東",
    operator: "JR東日本",
    lineName: "鹿島線",
    lineNameKana: "かしません",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "佐原" }, { name: "十二橋" }, { name: "潮来" }, { name: "鹿島神宮" }
    ]
  }
});
