// 路線別メタデータ: 外房線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "千葉": { nameKana: "ちば", interchanges: [{ toOperator: "千葉都市モノレール", toLine: "1号線" }, { toOperator: "千葉都市モノレール", toLine: "2号線" }] },
  "蘇我": { nameKana: "そが" },
  "鎌取": { nameKana: "かまとり" },
  "誉田": { nameKana: "ほんだ" },
  "土気": { nameKana: "とけ" },
  "大網": { nameKana: "おおあみ" },
  "茂原": { nameKana: "もばら" },
  "上総一ノ宮": { nameKana: "かずさいちのみや" },
  "勝浦": { nameKana: "かつうら" },
  "安房鴨川": { nameKana: "あわかもがわ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:sotobo": {
    area: "関東",
    operator: "JR東日本",
    lineName: "外房線",
    lineNameKana: "そとぼうせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "千葉" }, { name: "蘇我" }, { name: "鎌取" }, { name: "誉田" }, { name: "土気" },
      { name: "大網" }, { name: "茂原" }, { name: "上総一ノ宮" }, { name: "勝浦" }, { name: "安房鴨川" }
    ]
  }
});
