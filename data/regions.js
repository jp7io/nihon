// @ts-check

/**
 * @typedef {Object} Zoom
 * @property {string} desktop
 * @property {string} mobile
 */

/**
 * @typedef {Object} Name
 * @property {string} en
 * @property {string} ja
 * @property {string[]} [furigana]
 */

/**
 * @typedef {Object} Location
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef {Object} City
 * @property {Name} name
 * @property {any} types
 * @property {Location} location
 * @property {boolean=} bottom
 * @property {Prefecture=} prefecture
 * @property {boolean=} picture
*/

/**
 * @typedef {Object} Prefecture
 * @property {string} code
 * @property {Name} name
 * @property {Location} location
 * @property {City[]} cities
 * @property {string=} textAnchor
 * @property {Region=} region
 * @property {boolean=} picture
 */

/**
 * @typedef {Object} Region
 * @property {string} code
 * @property {Name} name
 * @property {Prefecture[]} prefectures
 * @property {Zoom} zoom
 * @property {boolean=} picture
 */

export const cityType = {
  capital: 'capital',
  favorite: 'favorite',
  nationalCapital: 'nationalCapital',
}

/** @type {Region[]} */
export const regions = [
  {
    code: 'HOK',
    name: {
      en: 'Hokkaidō',
      ja: '北海道',
      furigana: ['ほっ', 'かい', 'どう']
    },
    zoom: {
      desktop: '300%',
      mobile: '600%',
    },
    prefectures: [
      {
        code: '01',
        name: {
          en: 'Hokkaidō',
          ja: '北海道',
          furigana: ['ほっ', 'かい', 'どう']
        },
        location: { lat: 43.2203266, lng: 142.8634737 },
        cities: [
          {
            name: {
              en: 'Sapporo',
              ja: '札幌市',
              furigana: ['さっ', 'ぽろ', 'し'],
            },
            types: [cityType.capital, cityType.favorite],
            location: { lat: 43.0617713, lng: 141.3544506 },
          }
        ],
      }
    ],
  },
  {
    code: 'TOH',
    name: {
      en: 'Tōhoku',
      ja: '東北',
      furigana: ['とう', 'ほく']
    },
    zoom: {
      desktop: '300%',
      mobile: '1100%',
    },
    prefectures: [
      {
        code: '02',
        name: {
          en: 'Aomori',
          ja: '青森県',
          furigana: ['あお', 'もり', 'けん']
        },
        location: { lat: 40.7657077, lng: 140.9175879 },
        cities: [
          {
            name: {
              en: 'Aomori',
              ja: '青森市',
              furigana: ['あお', 'もり', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 40.822072, lng: 140.747365 },
          }
        ],
      },
      {
        code: '03',
        name: {
          en: 'Iwate',
          ja: '岩手県',
          furigana: ['いわ', 'て', 'けん']
        },
        location: { lat: 39.5832989, lng: 141.2534574 },
        cities: [
          {
            name: {
              en: 'Morioka',
              ja: '森岡市',
              furigana: ['もり', 'おか', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 39.701505, lng: 141.140837 },
          }
        ],
      },
      {
        code: '04',
        name: {
          en: 'Miyagi',
          ja: '宮城県',
          furigana: ['みや', 'ぎ', 'けん']
        },
        location: { lat: 38.630612, lng: 141.1193048 },
        cities: [
          {
            name: {
              en: 'Sendai',
              ja: '仙台市',
              furigana: ['せん', 'だい', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 38.268195, lng: 140.869418 },
          }
        ],
      },
      {
        code: '05',
        name: {
          en: 'Akita',
          ja: '秋田県',
          furigana: ['あき', 'た', 'けん']
        },
        location: { lat: 40.1376293, lng: 140.334341 },
        cities: [
          {
            name: {
              en: 'Akita',
              ja: '秋田市',
              furigana: ['あき', 'た', 'し']
            },
            types: [cityType.capital],
            location: { lat: 39.718611, lng: 140.102222 },
          }
        ],
      },
      {
        code: '06',
        name: {
          en: 'Yamagata',
          ja: '山形県',
          furigana: ['やま', 'がた', 'けん']
        },
        location: { lat: 38.5370564, lng: 140.1435198 },
        cities: [
          {
            name: {
              en: 'Yamagata',
              ja: '山形市',
              furigana: ['やま', 'がた', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 38.240435, lng: 140.363633 },
            bottom: true,
          }
        ],
      },
      {
        code: '07',
        name: {
          en: 'Fukushima',
          ja: '福島県',
          furigana: ['ふく', 'しま', 'けん']
        },
        location: { lat: 37.3834373, lng: 140.1832516 },
        cities: [
          {
            name: {
              en: 'Fukushima',
              ja: '福島市',
              furigana: ['ふく', 'しま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 37.760834, lng: 140.473333 },
            bottom: true,
          }
        ]
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kantō',
      ja: '関東',
      furigana: ['かん', 'とう']
    },
    zoom: {
      desktop: '600%',
      mobile: '1400%',
    },
    prefectures: [
      {
        code: '08',
        name: {
          en: 'Ibaraki',
          ja: '茨城県',
          furigana: ['いば', 'らき', 'けん']
        },
        location: { lat: 36.2193571, lng: 140.1832516 },
        cities: [
          {
            name: {
              en: 'Mito',
              ja: '水戸市',
              furigana: ['み', 'と', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 36.365764, lng: 140.471162 },
          }
        ],
      },
      {
        code: '09',
        name: {
          en: 'Tochigi',
          ja: '栃木県',
          furigana: ['とち', 'ぎ', 'けん']
        },
        location: { lat: 36.6714739, lng: 139.8547266 },
        cities: [
          {
            name: {
              en: 'Utsunomiya',
              ja: '宇都宮市',
              furigana: ['う', 'つ', 'のみや', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 36.555283, lng: 139.882158 },
          }
        ],
      },
      {
        code: '10',
        name: {
          en: 'Gunma',
          ja: '群馬県',
          furigana: ['ぐん', 'ま', 'けん']
        },
        location: { lat: 36.5605388, lng: 138.8799972 },
        cities: [
          {
            name: {
              en: 'Maebashi',
              ja: '前橋市',
              furigana: ['まえ', 'ばし', 'し']
            },
            types: [cityType.capital],
            location: { lat: 36.392599, lng: 139.072892 },
          }
        ],
      },
      {
        code: '11',
        name: {
          en: 'Saitama',
          ja: '埼玉県',
          furigana: ['さい', 'たま', 'けん']
        },
        location: { lat: 35.9962513, lng: 139.4466005 },
        cities: [
          {
            name: {
              en: 'Saitama',
              ja: '埼玉市',
              furigana: ['さい', 'たま', 'し']
            },
            types: [cityType.capital],
            location: { lat: 35.861729, lng: 139.645482 },
          }
        ],
      },
      {
        code: '12',
        name: {
          en: 'Chiba',
          ja: '千葉県',
          furigana: ['ちば']
        },
        location: { lat: 35.3354155, lng: 140.1832516 },
        cities: [
          {
            name: {
              en: 'Chiba',
              ja: 'チ葉市',
              furigana: ['ち', 'ば', 'し']
            },
            types: [cityType.capital],
            location: { lat: 35.607266, lng: 140.1062903 },
          }
        ],
      },
      {
        code: '13',
        name: {
          en: 'Tōkyō',
          ja: '東京都',
          furigana: ['とう', 'きょう', 'と']
        },
        location: { lat: 35.6764225, lng: 139.650027 },
        picture: true,
        cities: [
          {
            name: {
              en: 'Tōkyō',
              ja: '東京都',
              furigana: ['とう', 'きょう', 'と'],
            },
            types: [cityType.capital, cityType.nationalCapital, cityType.favorite],
            location: { lat: 35.6764225, lng: 139.650027 },
            picture: true,
          }
        ],
      },
      {
        code: '14',
        name: {
          en: 'Kanagawa',
          ja: '神奈川県',
          furigana: ['かな', 'がわ', 'けん']
        },
        location: { lat: 35.4913535, lng: 139.284143 },
        cities: [
          {
            name: {
              en: 'Yokohama',
              ja: '横浜市',
              furigana: ['よこ', 'はま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 35.443707, lng: 139.6380256 },
            picture: true,
          }
        ]
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūbu',
      ja: '中部',
      furigana: ['ちゅう', 'ぶ']
    },
    zoom: {
      desktop: '370%',
      mobile: '800%',
    },
    prefectures: [
      {
        code: '15',
        name: {
          en: 'Niigata',
          ja: '新潟県',
          furigana: ['にい', 'がた', 'けん']
        },
        location: { lat: 37.5178386, lng: 138.9269794 },
        cities: [
          {
            name: {
              en: 'Niigata',
              ja: '新潟市',
              furigana: ['にい', 'がた', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 37.916192, lng: 139.036413 },
          }
        ],
      },
      {
        code: '16',
        name: {
          en: 'Toyama',
          ja: '富山県',
          furigana: ['とや', 'ま', 'けん']
        },
        location: { lat: 36.6958266, lng: 137.2137071 },
        cities: [
          {
            name: {
              en: 'Toyama',
              ja: '富山市',
              furigana: ['とや', 'ま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 36.6958266, lng: 137.2137071 },
            bottom: true,
          }
        ],
      },
      {
        code: '17',
        name: {
          en: 'Ishikawa',
          ja: '石川県',
          furigana: ['いし', 'かわ', 'けん']
        },
        location: { lat: 36.3260317, lng: 136.5289653 },
        cities: [
          {
            name: {
              en: 'Kanazawa',
              ja: '金沢市',
              furigana: ['かな', 'ざわ', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 36.561325, lng: 136.656205 },
          }
        ],
      },
      {
        code: '18',
        name: {
          en: 'Fukui',
          ja: '福井県',
          furigana: ['ふく', 'い', 'けん']
        },
        location: { lat: 35.896227, lng: 136.2111579 },
        cities: [
          {
            name: {
              en: 'Fukui',
              ja: '福井市',
              furigana: ['ふく', 'い', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 36.064649, lng: 136.219052 },
          }
        ],
      },
      {
        code: '19',
        name: {
          en: 'Yamanashi',
          ja: '山梨県',
          furigana: ['やま', 'なし', 'けん']
        },
        location: { lat: 35.6635113, lng: 138.6388879 },
        picture: true,
        cities: [
          {
            name: {
              en: 'Kōfu',
              ja: '甲府市',
              furigana: ['こう', 'ふ', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 35.6635113, lng: 138.6388879 },
          }
        ],
      },
      {
        code: '20',
        name: {
          en: 'Nagano',
          ja: '長野県',
          furigana: ['なが', 'の', 'けん']
        },
        location: { lat: 36.1543941, lng: 137.9218204 },
        cities: [
          {
            name: {
              en: 'Nagano',
              ja: '長野市',
              furigana: ['なが', 'の', 'し'],
            },
            types: [cityType.capital, cityType.favorite],
            location: { lat: 36.6485258, lng: 138.1950371 },
          }
        ]
      },
      {
        code: '21',
        name: {
          en: 'Gifu',
          ja: '岐阜県',
          furigana: ['ぎ', 'ふ', 'けん']
        },
        location: { lat: 35.7437491, lng: 136.9805103 },
        cities: [
          {
            name: {
              en: 'Gifu',
              ja: '岐阜市',
              furigana: ['ぎ', 'ふ', 'し']
            },
            types: [cityType.capital],
            location: { lat: 35.423298, lng: 136.760654 }
          }
        ],
      },
      {
        code: '22',
        name: {
          en: 'Shizuoka',
          ja: '静岡県',
          furigana: ['しず', 'おか', 'けん']
        },
        location: { lat: 35.0929397, lng: 138.3190276 },
        cities: [
          {
            name: {
              en: 'Shizuoka',
              ja: '静岡市',
              furigana: ['しず', 'おか', 'し']
            },
            types: [cityType.capital],
            location: { lat: 34.975562, lng: 138.3827608 },
          },
          {
            name: {
              en: 'Shimoda',
              ja: '下田市',
              furigana: ['しも', 'だ', 'し'],
            },
            types: [cityType.favorite],
            location: { lat: 34.6796171, lng: 138.9451459 },
            picture: true,
          }
        ]
      },
      {
        code: '23',
        name: {
          en: 'Aichi',
          ja: '愛知県',
          furigana: ['あい', 'ち']
        },
        location: { lat: 35.0182505, lng: 137.2923893 },
        cities: [
          {
            name: {
              en: 'Nagoya',
              ja: '名古屋市',
              furigana: ['な', 'ご', 'や', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 35.18145060000001, lng: 136.9065571 },
            bottom: true,
          }
        ]
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kansai',
      ja: '関西',
      furigana: ['かん', 'さい']
    },
    zoom: {
      desktop: '600%',
      mobile: '1400%',
    },
    prefectures: [
      {
        code: '24',
        name: {
          en: 'Mie',
          ja: '三重県',
          furigana: ['み', 'え', 'けん']
        },
        location: { lat: 33.8143901, lng: 136.0487047 },
        cities: [
          {
            name: {
              en: 'Tsu',
              ja: '津市',
              furigana: ['つ', 'し']
            },
            types: [cityType.capital],
            location: { lat: 34.730283, lng: 136.508591 },
          }
        ],
      },
      {
        code: '25',
        name: {
          en: 'Shiga',
          ja: '滋賀県',
          furigana: ['し', 'が', 'けん']
        },
        location: { lat: 35.3292014, lng: 136.0563212 },
        picture: true,
        cities: [
          {
            name: {
              en: 'Ōtsu',
              ja: '大津市',
              furigana: ['おお', 'つ', 'し']
            },
            types: [cityType.capital],
            location: { lat: 35.004531, lng: 135.86859 },
          }
        ],
      },
      {
        code: '26',
        name: {
          en: 'Kyōto',
          ja: '京都府',
          furigana: ['きょう', 'と', 'ふ']
        },
        location: { lat: 35.1566609, lng: 135.5251982 },
        cities: [
          {
            name: {
              en: 'Kyōto',
              ja: '京都府',
              furigana: ['きょう', 'と', 'ふ'],
            },
            types: [cityType.capital, cityType.favorite],
            location: { lat: 35.1566609, lng: 135.5251982 },
            picture: true,
          }
        ],
      },
      {
        code: '27',
        name: {
          en: 'Ōsaka',
          ja: '大阪府',
          furigana: ['おお', 'さか', 'ふ']
        },
        location: { lat: 34.6413315, lng: 135.5629394 },
        cities: [
          {
            name: {
              en: 'Ōsaka',
              ja: '大阪府',
              furigana: ['おお', 'さか', 'ふ'],
            },
            types: [cityType.capital, cityType.favorite],
            location: { lat: 34.6413315, lng: 135.5629394 },
            bottom: true,
            picture: true,
          }
        ],
      },
      {
        code: '28',
        name: {
          en: 'Hyōgo',
          ja: '兵庫県',
          furigana: ['ひょう', 'ご', 'けん']
        },
        location: { lat: 34.8579518, lng: 134.5453787 },
        cities: [
          {
            name: {
              en: 'Kōbe',
              ja: '神戸市',
              furigana: ['こう', 'べ', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.691279, lng: 135.183025 },
          }
        ],
      },
      {
        code: '29',
        name: {
          en: 'Nara',
          ja: '奈良県',
          furigana: ['な', 'ら', 'けん']
        },
        location: { lat: 34.2975528, lng: 135.8279734 },
        cities: [
          {
            name: {
              en: 'Nara',
              ja: '奈良市',
              furigana: ['な', 'ら', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.685086, lng: 135.805000 },
          }
        ],
      },
      {
        code: '30',
        name: {
          en: 'Wakayama',
          ja: '和歌山県',
          furigana: ['わか', 'やま', 'けん']
        },
        location: { lat: 33.9480914, lng: 135.3745358 },
        cities: [
          {
            name: {
              en: 'Wakayama',
              ja: '和歌山市',
              furigana: ['わか', 'やま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.230511, lng: 135.170833 },
          }
        ]
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūgoku',
      ja: '中国',
      furigana: ['ちゅう', 'ごく']
    },
    zoom: {
      desktop: '600%',
      mobile: '800%',
    },
    prefectures: [
      {
        code: '31',
        name: {
          en: 'Tottori',
          ja: '鳥取県',
          furigana: ['とっ', 'とり', 'けん']
        },
        location: { lat: 35.3573161, lng: 133.4066618 },
        cities: [
          {
            name: {
              en: 'Tottori',
              ja: '鳥取市',
              furigana: ['とっ', 'とり', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 35.501133, lng: 134.235091 },
          }
        ],
      },
      {
        code: '32',
        name: {
          en: 'Shimane',
          ja: '島根県',
          furigana: ['しま', 'ね', 'けん']
        },
        location: { lat: 35.1244094, lng: 132.6293446 },
        cities: [
          {
            name: {
              en: 'Matsue',
              ja: '松江市',
              furigana: ['まつ', 'え', 'し']
            },
            types: [cityType.capital],
            location: { lat: 35.472297, lng: 133.0505 },
          }
        ],
      },
      {
        code: '33',
        name: {
          en: 'Okayama',
          ja: '岡山県',
          furigana: ['おか', 'やま', 'けん']
        },
        location: { lat: 34.8963407, lng: 133.6375314 },
        cities: [
          {
            name: {
              en: 'Okayama',
              ja: '岡山市',
              furigana: ['おか', 'やま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.655146, lng: 133.919502 },
          }
        ],
      },
      {
        code: '34',
        name: {
          en: 'Hiroshima',
          ja: '広島県',
          furigana: ['ひろ', 'しま', 'けん']
        },
        location: { lat: 34.8823408, lng: 133.0194897 },
        cities: [
          {
            name: {
              en: 'Hiroshima',
              ja: '広島市',
              furigana: ['ひろ', 'しま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.3852894, lng: 132.4553055 },
          }]
      },
      {
        code: '35',
        name: {
          en: 'Yamaguchi',
          ja: '山口県',
          furigana: ['やま', 'ぐち', 'けん']
        },
        location: { lat: 34.2796769, lng: 131.5212742 },
        cities: [
          {
            name: {
              en: 'Yamaguchi',
              ja: '山口市',
              furigana: ['やま', 'ぐち', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.178496, lng: 131.473727 },
          }
        ]
      }
    ]
  },
  {
    code: 'SHIK',
    name: {
      en: 'Shikoku',
      ja: '四国',
      furigana: ['し', 'こく']
    },
    zoom: {
      desktop: '600%',
      mobile: '1400%',
    },
    prefectures: [
      {
        code: '36',
        name: {
          en: 'Tokushima',
          ja: '徳島県',
          furigana: ['とく', 'しま', 'けん']
        },
        location: { lat: 33.9419655, lng: 134.3236557 },
        cities: [
          {
            name: {
              en: 'Tokushima',
              ja: '徳島市',
              furigana: ['とく', 'しま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.042768, lng: 134.4444055 },
          }
        ],
      },
      {
        code: '37',
        name: {
          en: 'Kagawa',
          ja: '香川県',
          furigana: ['か', 'がわ', 'けん']
        },
        location: { lat: 34.2225915, lng: 134.0199152 },
        cities: [
          {
            name: {
              en: 'Takamatsu',
              ja: '高松市',
              furigana: ['たか', 'まつ', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 34.342542, lng: 134.0465405 }
          }
        ],
      },
      {
        code: '38',
        name: {
          en: 'Ehime',
          ja: '愛媛県',
          furigana: ['え', 'ひめ', 'けん']
        },
        location: { lat: 33.6025306, lng: 132.7857583 },
        cities: [
          {
            name: {
              en: 'Matsuyama',
              ja: '松山市',
              furigana: ['まつ', 'やま', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 33.839157, lng: 132.765575 }
          }
        ],
      },
      {
        code: '39',
        name: {
          en: 'Kochi',
          ja: '高知県',
          furigana: ['こう', 'ち', 'けん']
        },
        location: { lat: 33.5481246, lng: 133.2521507 },
        cities: [
          {
            name: {
              en: 'Kōchi',
              ja: '高知市',
              furigana: ['こう', 'ち', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 33.559705, lng: 133.53108 },
          }
        ]
      }
    ]
  },
  {
    code: 'KYU',
    name: {
      en: 'Kyūshū',
      ja: '九州',
      furigana: ['きゅう', 'しゅう']
    },
    zoom: {
      desktop: '200%',
      mobile: '600%',
    },
    prefectures: [
      {
        code: '40',
        name: {
          en: 'Fukuoka',
          ja: '福岡県',
          furigana: ['ふく', 'おか', 'けん']
        },
        location: { lat: 33.56625590000001, lng: 130.715857 },
        cities: [
          {
            name: {
              en: 'Fukuoka',
              ja: '福岡市',
              furigana: ['ふく', 'おか', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 33.5901838, lng: 130.4016888 },
          }
        ]
      },
      {
        code: '41',
        name: {
          en: 'Saga',
          ja: '佐賀県',
          furigana: ['さ', 'が', 'けん']
        },
        location: { lat: 33.3078371, lng: 130.2271243 },
        cities: [
          {
            name: {
              en: 'Saga',
              ja: '佐賀市',
              furigana: ['さ', 'が', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 33.249357, lng: 130.298822 },
            bottom: true,
          }
        ],
      },
      {
        code: '42',
        name: {
          en: 'Nagasaki',
          ja: '長崎県',
          furigana: ['なが', 'さき', 'けん']
        },
        location: { lat: 33.2488525, lng: 129.6930912 },
        textAnchor: 'end',
        cities: [
          {
            name: {
              en: 'Nagasaki',
              ja: '長崎市',
              furigana: ['なが', 'さき', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 32.750286, lng: 129.877667 },
            bottom: true,
          }
        ],
      },
      {
        code: '43',
        name: {
          en: 'Kumamoto',
          ja: '熊本県',
          furigana: ['くま', 'もと', 'けん']
        },
        location: { lat: 32.8594427, lng: 130.7969149 },
        cities: [
          {
            name: {
              en: 'Kumamoto',
              ja: '熊本市',
              furigana: ['くま', 'もと', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 32.803333, lng: 130.707778 },
            bottom: true,
          }
        ],
      },
      {
        code: '44',
        name: {
          en: 'Oita',
          ja: '大分県',
          furigana: ['おお', 'いた', 'けん']
        },
        location: { lat: 33.1589299, lng: 131.3611121 },
        cities: [
          {
            name: {
              en: 'Ōita',
              ja: '大分市',
              furigana: ['おお', 'いた', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 33.238194, lng: 131.612591 },
          }
        ],
      },
      {
        code: '45',
        name: {
          en: 'Miyazaki',
          ja: '宮崎県',
          furigana: ['みや', 'ざき', 'けん']
        },
        location: { lat: 32.6036022, lng: 131.441251 },
        cities: [
          {
            name: {
              en: 'Miyazaki',
              ja: '宮崎市',
              furigana: ['みや', 'ざき', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 31.907676, lng: 131.420241 },
          }
        ],
      },
      {
        code: '46',
        name: {
          en: 'Kagoshima',
          ja: '鹿児島県',
          furigana: ['か', 'ご', 'しま', 'けん']
        },
        location: { lat: 31.3911958, lng: 130.8778586 },
        cities: [
          {
            name: {
              en: 'Kagoshima',
              ja: '鹿児島市',
              furigana: ['か', 'ご', 'しま', 'し'],
            },
            types: [cityType.capital, cityType.favorite],
            location: { lat: 31.5968539, lng: 130.5571392 },
          }
        ],
      },
      {
        code: '47',
        name: {
          en: 'Okinawa',
          ja: '沖縄県',
          furigana: ['おき', 'なわ', 'けん']
        },
        location: { lat: 26.1201911, lng: 127.7025012 },
        cities: [
          {
            name: {
              en: 'Naha',
              ja: '那覇市',
              furigana: ['な', 'は', 'し'],
            },
            types: [cityType.capital],
            location: { lat: 26.212401, lng: 127.680932 },
          }
        ],
      }
    ]
  }
]
