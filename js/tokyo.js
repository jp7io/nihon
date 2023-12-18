export const municipalityType = {
  ku: {
    name: {
      en: 'Special-Ward',
      ja: ['区'],
      furigana: ['く'],
    },
    color: '#DCB6F2',
  },
  shi: {
    name: {
      en: 'City',
      ja: ['市'],
      furigana: ['し'],
    },
    color: '#F6BAD3',
  },
  machi: {
    name: {
      en: 'Town',
      ja: ['町'],
      furigana: ['まち'],
    },
    color: '#ECE3B4',
  },
  mura: {
    name: {
      en: 'Village',
      ja: ['村'],
      furigana: ['むら'],
    },
    color: '#B6F2DC',
  },
}

const { ku, shi, machi, mura } = municipalityType;

export const tokyo = [
  {
    name: {
      en: 'Chiyoda',
      ja: ['千代田区'],
      furigana: ['ち', 'よ', 'だ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '59.441',
    code: '13101'
  },
  {
    name: {
      en: 'Chūō',
      ja: ['中央区'],
      furigana: ['ちゅう', 'おう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '147.62',
    code: '13102'
  },
  {
    name: {
      en: 'Minato',
      ja: ['港区'],
      furigana: ['みなと', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '248.071',
    code: '13103'
  },
  {
    name: {
      en: 'Shinjuku',
      ja: ['新宿区'],
      furigana: ['しん', 'じゅく', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '339.211',
    code: '13104'
  },
  {
    name: {
      en: 'Bunkyō',
      ja: ['文京区'],
      furigana: ['ぶん', 'きょう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '223.389',
    code: '13105'
  },
  {
    name: {
      en: 'Taitō',
      ja: ['台東区'],
      furigana: ['たい', 'とう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '200.486',
    code: '13106'
  },
  {
    name: {
      en: 'Sumida',
      ja: ['墨田区'],
      furigana: ['すみ', 'だ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '260.358',
    code: '13107'
  },
  {
    name: {
      en: 'Kōtō',
      ja: ['江東区'],
      furigana: ['こう', 'とう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '502.579',
    code: '13108'
  },
  {
    name: {
      en: 'Shinagawa',
      ja: ['品川区'],
      furigana: ['しな', 'がわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '392.492',
    code: '13109'
  },
  {
    name: {
      en: 'Meguro',
      ja: ['目黒区'],
      furigana: ['め', 'ぐろ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '280.283',
    code: '13110'
  },
  {
    name: {
      en: 'Ōta',
      ja: ['大田区'],
      furigana: ['おお', 'た', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '722.608',
    code: '13111'
  },
  {
    name: {
      en: 'Setagaya',
      ja: ['世田谷区'],
      furigana: ['せ', 'た', 'がや', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '910.868',
    code: '13112'
  },
  {
    name: {
      en: 'Shibuya',
      ja: ['渋谷区'],
      furigana: ['しぶ', 'や', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '227.85',
    code: '13113'
  },
  {
    name: {
      en: 'Nakano',
      ja: ['中野区'],
      furigana: ['なか', 'の', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '332.902',
    code: '13114'
  },
  {
    name: {
      en: 'Suginami',
      ja: ['杉並区'],
      furigana: ['すぎ', 'なみ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '570.483',
    code: '13115'
  },
  {
    name: {
      en: 'Toshima',
      ja: ['豊島区'],
      furigana: ['とし', 'ま', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '294.673',
    code: '13116'
  },
  {
    name: {
      en: 'Kita',
      ja: ['北区'],
      furigana: ['きた', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '345.063',
    code: '13117'
  },
  {
    name: {
      en: 'Arakawa',
      ja: ['荒川区'],
      furigana: ['あら', 'かわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '213.648',
    code: '13118'
  },
  {
    name: {
      en: 'Itabashi',
      ja: ['板橋区'],
      furigana: ['いた', 'ばし', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '569.225',
    code: '13119'
  },
  {
    name: {
      en: 'Nerima',
      ja: ['練馬区'],
      furigana: ['ねり', 'ま', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '726.748',
    code: '13120'
  },
  {
    name: {
      en: 'Adachi',
      ja: ['足立区'],
      furigana: ['あだ', 'ち', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '674.067',
    code: '13121'
  },
  {
    name: {
      en: 'Katsushika',
      ja: ['葛飾区'],
      furigana: ['かつ', 'しか', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '447.14',
    code: '13122'
  },
  {
    name: {
      en: 'Edogawa',
      ja: ['江戸川区'],
      furigana: ['え', 'ど', 'がわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '685.899',
    code: '13123'
  },
  {
    name: {
      en: 'Hachiōji',
      ja: ['八王子市'],
      furigana: ['はち', 'おう', 'じ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '579.33',
    code: '13201'
  },
  {
    name: {
      en: 'Tachikawa',
      ja: ['立川市'],
      furigana: ['たち', 'かわ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '184.183',
    code: '13202'
  },
  {
    name: {
      en: 'Musashino',
      ja: ['武蔵野市'],
      furigana: [' む', 'さし', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '143.686',
    code: '13203'
  },
  {
    name: {
      en: 'Mitaka',
      ja: ['三鷹市'],
      furigana: ['み', 'たか', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '189.168',
    code: '13204'
  },
  {
    name: {
      en: 'Ōme',
      ja: ['青梅市'],
      furigana: ['おう', 'め', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '136.071',
    code: '13205'
  },
  {
    name: {
      en: 'Fuchū',
      ja: ['府中市'],
      furigana: ['ふ', 'ちゅう', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '260.891',
    code: '13206'
  },
  {
    name: {
      en: 'Akishima',
      ja: ['昭島市'],
      furigana: ['あき', 'しま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '111.449',
    code: '13207'
  },
  {
    name: {
      en: 'Chōfu',
      ja: ['調布市'],
      furigana: ['ちょう', 'ふ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '240.668',
    code: '13208'
  },
  {
    name: {
      en: 'Machida',
      ja: ['町田市'],
      furigana: ['まち', 'だ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '429.04',
    code: '13209'
  },
  {
    name: {
      en: 'Koganei',
      ja: ['小金井市'],
      furigana: ['こ', 'がね', 'い', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '121.516',
    code: '13210'
  },
  {
    name: {
      en: 'Kodaira',
      ja: ['小平市'],
      furigana: ['こ', 'だい', 'ら', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '194.757',
    code: '13211'
  },
  {
    name: {
      en: 'Hino',
      ja: ['日野市'],
      furigana: ['ひ', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '185.133',
    code: '13212'
  },
  {
    name: {
      en: 'Higashimurayama',
      ja: ['東村山市'],
      furigana: ['ひがし', 'む', 'ら', 'やま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '150.984',
    code: '13213'
  },
  {
    name: {
      en: 'Kokubunji',
      ja: ['国分寺市'],
      furigana: ['こく', 'ぶん', 'じ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '122.787',
    code: '13214'
  },
  {
    name: {
      en: 'Kunitachi',
      ja: ['国立市'],
      furigana: ['くに', 'たち', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '75.867',
    code: '13215'
  },
  {
    name: {
      en: 'Fussa',
      ja: ['福生市'],
      furigana: ['ふっ', 'さ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '58.393',
    code: '13218'
  },
  {
    name: {
      en: 'Komae',
      ja: ['狛江市'],
      furigana: ['こ', 'まえ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '81.671',
    code: '13219'
  },
  {
    name: {
      en: 'Higashiyamato',
      ja: ['東大和市'],
      furigana: ['ひがし', 'やま', 'と', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '85.229',
    code: '13220'
  },
  {
    name: {
      en: 'Kiyose',
      ja: ['清瀬市'],
      furigana: ['きよ', 'せ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '74.495',
    code: '13221'
  },
  {
    name: {
      en: 'Higashikurume',
      ja: ['東久留米市'],
      furigana: ['ひがし', 'くる', 'め', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '116.869',
    code: '13222'
  },
  {
    name: {
      en: 'Musashimurayama',
      ja: ['武蔵村山市'],
      furigana: ['むさし', 'む', 'ら', 'やま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '70.649',
    code: '13223'
  },
  {
    name: {
      en: 'Tama',
      ja: ['多摩市'],
      furigana: ['た', 'ま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '147.953',
    code: '13224'
  },
  {
    name: {
      en: 'Inagi',
      ja: ['稲城市'],
      furigana: ['いな', 'ぎ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '87.927',
    code: '13225'
  },
  {
    name: {
      en: 'Hamura',
      ja: ['羽村市'],
      furigana: ['は', 'むら', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '55.596',
    code: '13227'
  },
  {
    name: {
      en: 'Akiruno',
      ja: ['あきる野市'],
      furigana: ['', '', '', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '80.464',
    code: '13228'
  },
  {
    name: {
      en: 'Nishitokyo',
      ja: ['西東京市'],
      furigana: ['にし', 'とう', 'きょう', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '200.102',
    code: '13229'
  },
  {
    name: {
      en: 'Mizuho',
      ja: ['瑞穂町'],
      furigana: ['みず', 'ほ', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '33.117',
    code: '13303'
  },
  {
    name: {
      en: '',
      ja: [''],
      furigana: [],
    },
    'Transcription': '',
    subprefecture: '(Western Tama [ja])',
    population: '',
    code: ''
  },
  {
    name: {
      en: 'Hinode',
      ja: ['日の出町'],
      furigana: ['ひ', '', 'で', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '17.141',
    code: '13305'
  },
  {
    name: {
      en: '',
      ja: [''],
      furigana: [],
    },
    'Transcription': '',
    subprefecture: '(Western Tama [ja])',
    population: '',
    code: ''
  },
  {
    name: {
      en: 'Hinohara',
      ja: ['檜原村'],
      furigana: ['ひの', 'はら', 'むら'],
    },
    type: mura,
    subprefecture: 'Nishi-Tama',
    population: '2.194',
    code: '13307'
  },
  {
    name: {
      en: '',
      ja: [''],
      furigana: [],
    },
    'Transcription': '',
    subprefecture: '(Western Tama [ja])',
    population: '',
    code: ''
  },
  {
    name: {
      en: 'Okutama',
      ja: ['奥多摩町'],
      furigana: ['おく', 'た', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '5.177',
    code: '13308'
  },
  {
    name: {
      en: '',
      ja: [''],
      furigana: [],
    },
    'Transcription': '',
    subprefecture: '(Western Tama [ja])',
    population: '',
    code: ''
  },
  {
    name: {
      en: 'Ōshima',
      ja: ['大島町'],
      furigana: ['おお', 'しま', 'まち'],
    },
    type: machi,
    subprefecture: 'Ōshima',
    population: '7.762',
    code: '13361'
  },
  {
    name: {
      en: 'To-shima',
      ja: ['利島村'],
      furigana: ['と', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '309',
    code: '13362'
  },
  {
    name: {
      en: 'Niijima',
      ja: ['新島村'],
      furigana: ['にい', 'じま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '2.697',
    code: '13363'
  },
  {
    name: {
      en: 'Kōzushima',
      ja: ['神津島村'],
      furigana: ['こう', 'ず', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '1.856',
    code: '13364'
  },
  {
    name: {
      en: 'Miyake',
      ja: ['三宅村'],
      furigana: ['みや', 'け', 'むら'],
    },
    type: mura,
    subprefecture: 'Miyake',
    population: '2.451',
    code: '13381'
  },
  {
    name: {
      en: 'Mikurajima',
      ja: ['御蔵島村'],
      furigana: ['みく', 'ら', 'じま', 'むら'],
    },
    type: mura,
    subprefecture: 'Miyake',
    population: '328',
    code: '13382'
  },
  {
    name: {
      en: 'Hachijō',
      ja: ['八丈町'],
      furigana: ['はち', 'じょう', 'まち'],
    },
    type: machi,
    subprefecture: 'Hachijō',
    population: '7.516',
    code: '13401'
  },
  {
    name: {
      en: 'Aogashima',
      ja: ['青ヶ島村'],
      furigana: ['あお', 'が', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Hachijō',
    population: '169',
    code: '13402'
  },
  {
    name: {
      en: 'Ogasawara',
      ja: ['小笠原村'],
      furigana: ['お', 'がさ', 'わら', 'むら'],
    },
    type: mura,
    subprefecture: 'Ogasawara',
    population: '3.029',
    code: '13421'
  },
  {
    name: {
      en: 'Tokyo',
      ja: ['東京都'],
      furigana: ['とう', 'きょう', 'と'],
    },
    'Transcription': 'Tōkyō-to',
    subprefecture: '–',
    population: '13,960,236',
    code: '13000'
  },
  {
    name: {
      en: '',
      ja: [''],
      furigana: [],
    },
    'Transcription': '',
    subprefecture: '',
    population: '',
    code: 'ISO: JP-13'
  },
]
