// 路線別メタデータ: 両毛線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "小山": {
    nameKana: "おやま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北本線（宇都宮線）" },
      { toOperator: "JR東日本", toLine: "水戸線" },
      { toOperator: "JR東日本", toLine: "東北新幹線" }
    ]
  },
  "思川": { nameKana: "おもいがわ" },
  "栃木": {
    nameKana: "とちぎ",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "日光線" },
      { toOperator: "東武鉄道", toLine: "宇都宮線" }
    ]
  },
  "大平下": { nameKana: "おおひらした" },
  "岩舟": { nameKana: "いわふね" },
  "佐野": {
    nameKana: "さの",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "佐野線" }
    ]
  },
  "富田": { nameKana: "とみた" },
  "足利": { nameKana: "あしかが" },
  "山前": { nameKana: "やままえ" },
  "桐生": {
    nameKana: "きりゅう",
    interchanges: [
      { toOperator: "わたらせ渓谷鐵道", toLine: "わたらせ渓谷線" }
    ]
  },
  "岩宿": { nameKana: "いわじゅく" },
  "国定": { nameKana: "くにさだ" },
  "伊勢崎": {
    nameKana: "いせさき",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "伊勢崎線" }
    ]
  },
  "駒形": { nameKana: "こまがた" },
  "前橋大島": { nameKana: "まえばしおおしま" },
  "前橋": {
    nameKana: "まえばし",
    interchanges: [
      { toOperator: "上毛電気鉄道", toLine: "上毛線", toStationName: "中央前橋駅" }
    ]
  },
  "新前橋": {
    nameKana: "しんまえばし",
    interchanges: [
      { toOperator: "JR東日本", toLine: "上越線" }
    ]
  }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:ryomo": {
    area: "関東",
    operator: "JR東日本",
    lineName: "両毛線",
    lineNameKana: "りょうもうせん",
    scope: "高崎支社",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "小山" }, { name: "思川" }, { name: "栃木" }, { name: "大平下" }, { name: "岩舟" },
      { name: "佐野" }, { name: "富田" }, { name: "足利" }, { name: "山前" }, { name: "桐生" },
      { name: "岩宿" }, { name: "国定" }, { name: "伊勢崎" }, { name: "駒形" }, { name: "前橋大島" },
      { name: "前橋" }, { name: "新前橋" }
    ]
  }
});
