// 路線別メタデータ: 東海道線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東京": {"nameKana":"とうきょう","interchanges":[{"toOperator":"東京メトロ","toLine":"丸ノ内線"}]},
  "新橋": {"nameKana":"しんばし","interchanges":[{"toOperator":"都営","toLine":"浅草線"},{"toOperator":"東京メトロ","toLine":"銀座線"},{"toOperator":"ゆりかもめ","toLine":"東京臨海新交通臨海線"}]},
  "品川": {"nameKana":"しながわ","interchanges":[{"toOperator":"京急","toLine":"本線"}]},
  "川崎": {"nameKana":"かわさき","interchanges":[{"toOperator":"京急","toLine":"本線","toStationName":"京急川崎"}]},
  "横浜": {"nameKana":"よこはま","interchanges":[{"toOperator":"東急","toLine":"東横線"},{"toOperator":"京急","toLine":"本線"},{"toOperator":"相鉄","toLine":"本線"},{"toOperator":"横浜市営地下鉄","toLine":"ブルーライン"},{"toOperator":"みなとみらい線","toLine":"みなとみらい線"}]},
  "戸塚": {"nameKana":"とつか","interchanges":[{"toOperator":"横浜市営地下鉄","toLine":"ブルーライン"}]},
  "大船": {"nameKana":"おおふな","interchanges":[{"toOperator":"湘南モノレール","toLine":"江の島線"}]},
  "藤沢": {"nameKana":"ふじさわ","interchanges":[{"toOperator":"小田急","toLine":"江ノ島線"},{"toOperator":"江ノ島電鉄","toLine":"江ノ島電鉄線"}]},
  "辻堂": {"nameKana":"つじどう"},
  "茅ケ崎": {"nameKana":"ちがさき"},
  "平塚": {"nameKana":"ひらつか"},
  "大磯": {"nameKana":"おおいそ"},
  "二宮": {"nameKana":"にのみや"},
  "国府津": {"nameKana":"こうづ"},
  "鴨宮": {"nameKana":"かものみや"},
  "小田原": {"nameKana":"おだわら","interchanges":[{"toOperator":"小田急","toLine":"小田原線"},{"toOperator":"箱根登山鉄道","toLine":"鉄道線"},{"toOperator":"伊豆箱根鉄道","toLine":"大雄山線"}]},
  "早川": {"nameKana":"はやかわ"},
  "根府川": {"nameKana":"ねぶかわ"},
  "真鶴": {"nameKana":"まなづる"},
  "湯河原": {"nameKana":"ゆがわら"},
  "熱海": {"nameKana":"あたみ"}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:tokaido": {
    area: "関東",
    operator: "JR東日本",
    lineName: "東海道線",
    lineNameKana: "とうかいどうせん",
    scope: "横浜支社",
    routeSymbol: "JT",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "東京" }, { name: "新橋" }, { name: "品川" }, { name: "川崎" }, { name: "横浜" },
      { name: "戸塚" }, { name: "大船" }, { name: "藤沢" }, { name: "辻堂" }, { name: "茅ケ崎" },
      { name: "平塚" }, { name: "大磯" }, { name: "二宮" }, { name: "国府津" }, { name: "鴨宮" },
      { name: "小田原" }, { name: "早川" }, { name: "根府川" }, { name: "真鶴" }, { name: "湯河原" },
      { name: "熱海" }
    ]
  }
});
