// 路線別メタデータ: 東京モノレール線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "モノレール浜松町": {
    nameKana: "ものれーるはままつちょう",
    interchanges: [
      { toOperator: "都営地下鉄", toLine: "浅草線", toStationName: "大門駅" },
      { toOperator: "都営地下鉄", toLine: "大江戸線", toStationName: "大門駅" },
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "京浜東北線" }
    ]
  },
  "天王洲アイル": {
    nameKana: "てんのうずあいる",
    interchanges: [
      { toOperator: "東京臨海高速鉄道", toLine: "りんかい線" }
    ]
  },
  "大井競馬場前": {
    nameKana: "おおいけいばじょうまえ"
  },
  "流通センター": {
    nameKana: "りゅうつうせんたー"
  },
  "昭和島": {
    nameKana: "しょうわじま"
  },
  "整備場": {
    nameKana: "せいびじょう"
  },
  "天空橋": {
    nameKana: "てんくうばし",
    interchanges: [
      { toOperator: "京急電鉄", toLine: "空港線" }
    ]
  },
  "羽田空港第3ターミナル": {
    nameKana: "はねだくうこうだいさんたーみなる",
    interchanges: [
      { toOperator: "京急電鉄", toLine: "空港線" }
    ]
  },
  "新整備場": {
    nameKana: "しんせいびじょう"
  },
  "羽田空港第1ターミナル": {
    nameKana: "はねだくうこうだいいちたーみなる"
  },
  "羽田空港第2ターミナル": {
    nameKana: "はねだくうこうだいにたーみなる"
  }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:monorail": {
    area: "関東",
    operator: "東京モノレール",
    lineName: "東京モノレール線",
    lineNameKana: "とうきょうものれーるせん",
    scope: "東京モノレール",
    routeSymbol: "MO",
    directionGroups: ["東京モノレール線"],
    stations: [
      { name: "モノレール浜松町" }, { name: "天王洲アイル" }, { name: "大井競馬場前" },
      { name: "流通センター" }, { name: "昭和島" }, { name: "整備場" },
      { name: "天空橋" }, { name: "羽田空港第3ターミナル" }, { name: "新整備場" },
      { name: "羽田空港第1ターミナル" }, { name: "羽田空港第2ターミナル" }
    ]
  }
});
