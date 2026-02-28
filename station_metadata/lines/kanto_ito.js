// 路線別メタデータ: 伊東線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "熱海": {
    "nameKana": "あたみ",
    "interchanges": [
      {"operator": "JR東日本", "line": "東海道本線"},
      {"operator": "JR東日本", "line": "東海道新幹線"},
      {"operator": "伊豆箱根鉄道", "line": "駿豆線"}
    ]
  },
  "来宮": {"nameKana": "きのみや"},
  "伊豆多賀": {"nameKana": "いずたが"},
  "網代": {"nameKana": "あじろ"},
  "宇佐美": {"nameKana": "うさみ"},
  "伊東": {
    "nameKana": "いとう",
    "interchanges": [
      {"operator": "伊豆急行", "line": "伊豆急行線"}
    ]
  }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:ito": {
    area: "関東",
    operator: "JR東日本",
    lineName: "伊東線",
    lineNameKana: "いとうせん",
    scope: "横浜支社",
    routeSymbol: "JI",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "熱海" }, { name: "来宮" }, { name: "伊豆多賀" }, { name: "網代" }, { name: "宇佐美" }, { name: "伊東" }
    ]
  }
});
