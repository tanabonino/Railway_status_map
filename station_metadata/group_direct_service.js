// 直通サービス系メタデータ（上野東京ライン / 湘南新宿ライン / 相鉄線直通列車）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "雀宮": {
    nameKana: "すずめのみや"
  },
  "石橋": {
    nameKana: "いしばし"
  },
  "自治医大": {
    nameKana: "じちいだい"
  },
  "小金井": {
    nameKana: "こがねい"
  },
  "久喜": {
    nameKana: "くき",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "伊勢崎線" }
    ]
  },
  "小山": {
    nameKana: "おやま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北新幹線" },
      { toOperator: "JR東日本", toLine: "両毛線" },
      { toOperator: "JR東日本", toLine: "水戸線" }
    ]
  },
  "間々田": {
    nameKana: "ままだ"
  },
  "野木": {
    nameKana: "のぎ"
  },
  "古河": {
    nameKana: "こが"
  },
  "栗橋": {
    nameKana: "くりはし",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "日光線" }
    ]
  },
  "東鷲宮": {
    nameKana: "ひがしわしのみや"
  },
  "新白岡": {
    nameKana: "しんしらおか"
  },
  "白岡": {
    nameKana: "しらおか"
  },
  "蓮田": {
    nameKana: "はすだ"
  },
  "東大宮": {
    nameKana: "ひがしおおみや"
  },
  "土呂": {
    nameKana: "とろ"
  },
  "宇都宮": {
    nameKana: "うつのみや",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北新幹線" },
      { toOperator: "JR東日本", toLine: "日光線" }
    ]
  },
  "さいたま新都心": {
    nameKana: "さいたましんとしん",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" }
    ]
  },
  "浦和": {
    nameKana: "うらわ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "湘南新宿ライン" }
    ]
  },
  "赤羽": {
    nameKana: "あかばね",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "埼京線" }
    ]
  },
  "尾久": {
    nameKana: "おく"
  },
  "池袋": {
    nameKana: "いけぶくろ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "埼京線" },
      { toOperator: "東武鉄道", toLine: "東上線" },
      { toOperator: "西武鉄道", toLine: "池袋線" },
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "東京メトロ", toLine: "有楽町線" },
      { toOperator: "東京メトロ", toLine: "副都心線" }
    ]
  },
  "新宿": {
    nameKana: "しんじゅく",
    interchanges: [
      { toOperator: "JR東日本", toLine: "中央線" },
      { toOperator: "JR東日本", toLine: "中央総武緩行線" },
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "埼京線" },
      { toOperator: "京王電鉄", toLine: "京王線" },
      { toOperator: "小田急電鉄", toLine: "小田原線" },
      { toOperator: "西武鉄道", toLine: "新宿線" },
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "都営地下鉄", toLine: "新宿線" },
      { toOperator: "都営地下鉄", toLine: "大江戸線" }
    ]
  },
  "渋谷": {
    nameKana: "しぶや",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "埼京線" },
      { toOperator: "東急電鉄", toLine: "東横線" },
      { toOperator: "東急電鉄", toLine: "田園都市線" },
      { toOperator: "京王電鉄", toLine: "井の頭線" },
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "東京メトロ", toLine: "半蔵門線" },
      { toOperator: "東京メトロ", toLine: "副都心線" }
    ]
  },
  "恵比寿": {
    nameKana: "えびす",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "東京メトロ", toLine: "日比谷線" }
    ]
  },
  "大崎": {
    nameKana: "おおさき",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "埼京線" },
      { toOperator: "東京臨海高速鉄道", toLine: "りんかい線" }
    ]
  },
  "西大井": {
    nameKana: "にしおおい"
  },
  "武蔵小杉": {
    nameKana: "むさしこすぎ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "南武線" },
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "東急", toLine: "東横線" },
      { toOperator: "東急", toLine: "目黒線" }
    ]
  },
  "新川崎": {
    nameKana: "しんかわさき"
  },
  "横浜": {
    nameKana: "よこはま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "根岸線" },
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "京急", toLine: "本線" },
      { toOperator: "相鉄", toLine: "本線" },
      { toOperator: "東急", toLine: "東横線" },
      { toOperator: "横浜高速鉄道", toLine: "みなとみらい線" },
      { toOperator: "横浜市交通局", toLine: "ブルーライン" }
    ]
  },
  "上野": {
    nameKana: "うえの",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "常磐線" },
      { toOperator: "JR東日本", toLine: "高崎線" },
      { toOperator: "JR東日本", toLine: "新幹線各線" },
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "東京メトロ", toLine: "日比谷線" }
    ]
  },
  "東京": {
    nameKana: "とうきょう",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "中央線" },
      { toOperator: "JR東日本", toLine: "京葉線" },
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "JR東日本", toLine: "ほか" },
      { toOperator: "東京メトロ", toLine: "丸ノ内線" }
    ]
  },
  "新橋": {
    nameKana: "しんばし",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "東京メトロ", toLine: "銀座線" },
      { toOperator: "都営地下鉄", toLine: "浅草線" }
    ]
  },
  "品川": {
    nameKana: "しながわ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "山手線" },
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "JR東日本", toLine: "東海道新幹線" },
      { toOperator: "京浜急行電鉄", toLine: "本線" }
    ]
  },
  "川崎": {
    nameKana: "かわさき",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "南武線" }
    ]
  },
  "保土ケ谷": {
    nameKana: "ほどがや"
  },
  "東戸塚": {
    nameKana: "ひがしとつか"
  },
  "戸塚": {
    nameKana: "とつか",
    interchanges: [
      { toOperator: "JR東日本", toLine: "横須賀線" },
      { toOperator: "横浜市営地下鉄", toLine: "ブルーライン" }
    ]
  },
  "大船": {
    nameKana: "おおふな",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東海道線" },
      { toOperator: "JR東日本", toLine: "根岸線" }
    ]
  },
  "北鎌倉": {
    nameKana: "きたかまくら"
  },
  "桶川": {
    nameKana: "おけがわ"
  },
  "高崎": {
    nameKana: "たかさき",
    interchanges: [
      { toOperator: "JR東日本", toLine: "上越新幹線" },
      { toOperator: "JR東日本", toLine: "北陸新幹線" },
      { toOperator: "JR東日本", toLine: "上越線" },
      { toOperator: "JR東日本", toLine: "信越本線" },
      { toOperator: "JR東日本", toLine: "八高線" },
      { toOperator: "上信電鉄", toLine: "上信線" }
    ]
  },
  "倉賀野": {
    nameKana: "くらがの",
    interchanges: [
      { toOperator: "JR東日本", toLine: "八高線" }
    ]
  },
  "新町": {
    nameKana: "しんまち"
  },
  "神保原": {
    nameKana: "じんぼはら"
  },
  "本庄": {
    nameKana: "ほんじょう"
  },
  "岡部": {
    nameKana: "おかべ"
  },
  "深谷": {
    nameKana: "ふかや"
  },
  "籠原": {
    nameKana: "かごはら",
    interchanges: [
      { toOperator: "JR東日本", toLine: "折返し列車多数" }
    ]
  },
  "熊谷": {
    nameKana: "くまがや",
    interchanges: [
      { toOperator: "JR東日本", toLine: "上越新幹線" },
      { toOperator: "秩父鉄道", toLine: "秩父本線" }
    ]
  },
  "行田": {
    nameKana: "ぎょうだ"
  },
  "吹上": {
    nameKana: "ふきあげ"
  },
  "北鴻巣": {
    nameKana: "きたこうのす"
  },
  "鴻巣": {
    nameKana: "こうのす"
  },
  "北本": {
    nameKana: "きたもと"
  },
  "北上尾": {
    nameKana: "きたあげお"
  },
  "上尾": {
    nameKana: "あげお"
  },
  "宮原": {
    nameKana: "みやはら"
  },
  "大宮": {
    nameKana: "おおみや",
    interchanges: [
      { toOperator: "JR東日本", toLine: "京浜東北線" },
      { toOperator: "JR東日本", toLine: "宇都宮線" },
      { toOperator: "JR東日本", toLine: "川越線" },
      { toOperator: "JR東日本", toLine: "埼京線" },
      { toOperator: "JR東日本", toLine: "武蔵野線", toStationName: "近接" },
      { toOperator: "東武鉄道", toLine: "野田線", toStationName: "東武アーバンパークライン" },
      { toOperator: "埼玉新都市交通", toLine: "伊奈線", toStationName: "ニューシャトル" }
    ]
  },
  "鎌倉": {
    nameKana: "かまくら",
    interchanges: [
      { toOperator: "江ノ島電鉄", toLine: "江ノ島電鉄線" }
    ]
  },
  "逗子": {
    nameKana: "ずし",
    interchanges: []
  },
  "藤沢": {
    nameKana: "ふじさわ",
    interchanges: [
      { toOperator: "小田急", toLine: "江ノ島線" },
      { toOperator: "江ノ島電鉄", toLine: "江ノ島電鉄線" }
    ]
  },
  "辻堂": {
    nameKana: "つじどう"
  },
  "茅ケ崎": {
    nameKana: "ちがさき",
    interchanges: [
      { toOperator: "JR東日本", toLine: "相模線" }
    ]
  },
  "平塚": {
    nameKana: "ひらつか"
  },
  "大磯": {
    nameKana: "おおいそ"
  },
  "二宮": {
    nameKana: "にのみや"
  },
  "国府津": {
    nameKana: "こうづ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "御殿場線" }
    ]
  },
  "鴨宮": {
    nameKana: "かもみや"
  },
  "小田原": {
    nameKana: "おだわら",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東海道新幹線" },
      { toOperator: "JR東日本", toLine: "御殿場線" },
      { toOperator: "小田急", toLine: "小田原線" },
      { toOperator: "箱根登山鉄道", toLine: "鉄道線" },
      { toOperator: "伊豆箱根鉄道", toLine: "大雄山線" }
    ]
  },
  "熱海": {
    nameKana: "あたみ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "伊東線" },
      { toOperator: "JR東海", toLine: "東海道新幹線" }
    ]
  }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:ueno_tokyo_utsunomiya": {
    area: "関東",
    operator: "JR東日本",
    lineName: "上野東京ライン",
    lineNameKana: "うえのとうきょうらいん",
    scope: "宇都宮線系統",
    routeSymbol: "JU",
    directionGroups: ["直通サービス"],
    stations: [
      { name: "宇都宮" }, { name: "雀宮" }, { name: "石橋" }, { name: "自治医大" }, { name: "小金井" },
      { name: "小山" }, { name: "間々田" }, { name: "野木" }, { name: "古河" }, { name: "栗橋" },
      { name: "東鷲宮" }, { name: "久喜" }, { name: "新白岡" }, { name: "白岡" }, { name: "蓮田" },
      { name: "東大宮" }, { name: "土呂" }, { name: "大宮" }, { name: "さいたま新都心" }, { name: "浦和" },
      { name: "赤羽" }, { name: "尾久" }, { name: "上野" }, { name: "東京" }, { name: "新橋" },
      { name: "品川" }, { name: "川崎" }, { name: "横浜" }, { name: "戸塚" }, { name: "大船" },
      { name: "藤沢" }, { name: "辻堂" }, { name: "茅ケ崎" }, { name: "平塚" }, { name: "大磯" },
      { name: "二宮" }, { name: "国府津" }, { name: "鴨宮" }, { name: "小田原" }, { name: "早川" },
      { name: "根府川" }, { name: "真鶴" }, { name: "湯河原" }, { name: "熱海" }
    ]
  },
  "kanto:ueno_tokyo_takasaki": {
    area: "関東",
    operator: "JR東日本",
    lineName: "上野東京ライン",
    lineNameKana: "うえのとうきょうらいん",
    scope: "高崎線系統",
    routeSymbol: "JU",
    directionGroups: ["直通サービス"],
    stations: [
      { name: "東京" }, { name: "上野" }, { name: "赤羽" }, { name: "大宮" }, { name: "桶川" }, { name: "熊谷" }, { name: "高崎" }
    ]
  },
  "kanto:shonan_shinjuku_utsunomiya": {
    area: "関東",
    operator: "JR東日本",
    lineName: "湘南新宿ライン",
    lineNameKana: "しょうなんしんじゅくらいん",
    scope: "宇都宮線系統",
    routeSymbol: "JS",
    directionGroups: ["直通サービス"],
    stations: [
      { name: "宇都宮" }, { name: "雀宮" }, { name: "石橋" }, { name: "自治医大" }, { name: "小金井" },
      { name: "小山" }, { name: "間々田" }, { name: "野木" }, { name: "古河" }, { name: "栗橋" },
      { name: "東鷲宮" }, { name: "久喜" }, { name: "新白岡" }, { name: "白岡" }, { name: "蓮田" },
      { name: "東大宮" }, { name: "土呂" }, { name: "大宮" }, { name: "浦和" }, { name: "赤羽" },
      { name: "池袋" }, { name: "新宿" }, { name: "渋谷" }, { name: "恵比寿" }, { name: "大崎" },
      { name: "西大井" }, { name: "武蔵小杉" }, { name: "新川崎" }, { name: "横浜" }, { name: "保土ケ谷" },
      { name: "東戸塚" }, { name: "戸塚" }, { name: "大船" }, { name: "北鎌倉" }, { name: "鎌倉" }, { name: "逗子" }
    ]
  },
  "kanto:shonan_shinjuku_takasaki": {
    area: "関東",
    operator: "JR東日本",
    lineName: "湘南新宿ライン",
    lineNameKana: "しょうなんしんじゅくらいん",
    scope: "高崎線系統",
    routeSymbol: "JS",
    directionGroups: ["直通サービス"],
    stations: [
      { name: "高崎" }, { name: "倉賀野" }, { name: "新町" }, { name: "神保原" }, { name: "本庄" },
      { name: "岡部" }, { name: "深谷" }, { name: "籠原" }, { name: "熊谷" }, { name: "行田" },
      { name: "吹上" }, { name: "北鴻巣" }, { name: "鴻巣" }, { name: "北本" }, { name: "桶川" },
      { name: "北上尾" }, { name: "上尾" }, { name: "宮原" }, { name: "大宮" }, { name: "浦和" },
      { name: "赤羽" }, { name: "池袋" }, { name: "新宿" }, { name: "渋谷" }, { name: "恵比寿" },
      { name: "大崎" }, { name: "西大井" }, { name: "武蔵小杉" }, { name: "横浜" }, { name: "戸塚" },
      { name: "大船" }, { name: "藤沢" }, { name: "辻堂" }, { name: "茅ケ崎" }, { name: "平塚" },
      { name: "大磯" }, { name: "二宮" }, { name: "国府津" }, { name: "鴨宮" }, { name: "小田原" }
    ]
  },
  "kanto:sotetsu_direct": {
    area: "関東",
    operator: "JR東日本",
    lineName: "相鉄線直通列車",
    lineNameKana: "そうてつせんちょくつうれっしゃ",
    scope: "直通",
    directionGroups: ["直通サービス"],
    stations: [
      { name: "新宿" }, { name: "大崎" }, { name: "武蔵小杉" }
    ]
  }
});
