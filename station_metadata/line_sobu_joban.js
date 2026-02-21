// 総武・常磐系メタデータ
window.stationMetadataChunks = window.stationMetadataChunks || {};
Object.assign(window.stationMetadataChunks, {
  "北千住": {
    nameKana: "きたせんじゅ",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "千代田線" },
      { toOperator: "東京メトロ", toLine: "日比谷線" },
      { toOperator: "東武", toLine: "伊勢崎線" },
      { toOperator: "首都圏新都市鉄道", toLine: "つくばエクスプレス" }
    ]
  },
  "松戸": {
    nameKana: "まつど",
    interchanges: [
      { toOperator: "新京成", toLine: "新京成線" }
    ]
  },
  "柏": {
    nameKana: "かしわ",
    interchanges: [
      { toOperator: "東武", toLine: "野田線" }
    ]
  },
  "錦糸町": {
    nameKana: "きんしちょう",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "半蔵門線" }
    ]
  },
  "西船橋": {
    nameKana: "にしふなばし",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "東西線" },
      { toOperator: "東葉高速鉄道", toLine: "東葉高速線" }
    ]
  },
  "船橋": {
    nameKana: "ふなばし",
    interchanges: [
      { toOperator: "東武", toLine: "野田線" },
      { toOperator: "京成", toLine: "本線", toStationName: "京成船橋" }
    ]
  },
  "津田沼": {
    nameKana: "つだぬま",
    interchanges: [
      { toOperator: "新京成", toLine: "新京成線", toStationName: "新津田沼" }
    ]
  },
  "千葉": {
    nameKana: "ちば",
    interchanges: [
      { toOperator: "千葉都市モノレール", toLine: "1号線" },
      { toOperator: "千葉都市モノレール", toLine: "2号線" }
    ]
  }
});
