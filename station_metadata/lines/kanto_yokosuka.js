// 路線別メタデータ: 横須賀線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東京": {"nameKana":"とうきょう","interchanges":[{"toOperator":"東京メトロ","toLine":"丸ノ内線"}]},
  "新橋": {"nameKana":"しんばし","interchanges":[{"toOperator":"都営","toLine":"浅草線"},{"toOperator":"東京メトロ","toLine":"銀座線"},{"toOperator":"ゆりかもめ","toLine":"東京臨海新交通臨海線"}]},
  "品川": {"nameKana":"しながわ","interchanges":[{"toOperator":"京急","toLine":"本線"}]},
  "西大井": {"nameKana":"にしおおい"},
  "武蔵小杉": {"nameKana":"むさしこすぎ","interchanges":[{"toOperator":"東急","toLine":"東横線"},{"toOperator":"東急","toLine":"目黒線"}]},
  "新川崎": {"nameKana":"しんかわさき"},
  "横浜": {"nameKana":"よこはま","interchanges":[{"toOperator":"東急","toLine":"東横線"},{"toOperator":"京急","toLine":"本線"},{"toOperator":"相鉄","toLine":"本線"},{"toOperator":"横浜市営地下鉄","toLine":"ブルーライン"},{"toOperator":"みなとみらい線","toLine":"みなとみらい線"}]},
  "保土ケ谷": {"nameKana":"ほどがや"},
  "東戸塚": {"nameKana":"ひがしとつか"},
  "戸塚": {"nameKana":"とつか","interchanges":[{"toOperator":"横浜市営地下鉄","toLine":"ブルーライン"}]},
  "大船": {"nameKana":"おおふな","interchanges":[{"toOperator":"湘南モノレール","toLine":"江の島線"}]},
  "北鎌倉": {"nameKana":"きたかまくら"},
  "鎌倉": {"nameKana":"かまくら","interchanges":[{"toOperator":"江ノ島電鉄","toLine":"江ノ島電鉄線"}]},
  "逗子": {"nameKana":"ずし","interchanges":[{"toOperator":"京急","toLine":"逗子線","toStationName":"逗子・葉山"}]},
  "東逗子": {"nameKana":"ひがしずし"},
  "田浦": {"nameKana":"たうら"},
  "横須賀": {"nameKana":"よこすか"},
  "衣笠": {"nameKana":"きぬがさ"},
  "久里浜": {"nameKana":"くりはま"}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:yokosuka": {
    area: "関東",
    operator: "JR東日本",
    lineName: "横須賀線",
    lineNameKana: "よこすかせん",
    scope: "横浜支社",
    routeSymbol: "JO",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "東京" }, { name: "新橋" }, { name: "品川" }, { name: "西大井" }, { name: "武蔵小杉" },
      { name: "新川崎" }, { name: "横浜" }, { name: "保土ケ谷" }, { name: "東戸塚" }, { name: "戸塚" },
      { name: "大船" }, { name: "北鎌倉" }, { name: "鎌倉" }, { name: "逗子" }, { name: "東逗子" },
      { name: "田浦" }, { name: "横須賀" }, { name: "衣笠" }, { name: "久里浜" }
    ]
  }
});
