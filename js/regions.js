// @ts-check

export const cityType = {
  regionCapital: 'regionCapital',
  major: 'major',
  favorite: 'favorite',
}

export const regions = [
  {
    code: 'HOK',
    name: {
      en: 'Hokkaidō',
      ja: ['北', '海', '道'],
      furigana: ['ほっ', 'かい', 'どう']
    },
    prefectures: [
      {
        code: '01',
        name: {
          en: 'Hokkaidō',
          ja: ['北', '海', '道'],
          furigana: ['ほっ', 'かい', 'どう']
        },
        cities: [{
          en: 'Sapporo',
          ja: ['札', '幌', '市'],
          furigana: ['さっ', 'ぽろ', 'し'],
          types: [cityType.regionCapital, cityType.favorite]
        }],
      }
    ],
  },
  {
    code: 'TOH',
    name: {
      en: 'Tōhoku',
      ja: ['東', '北'],
      furigana: ['とう', 'ほく']
    },
    prefectures: [
      {
        code: '02',
        name: {
          en: 'Aomori',
          ja: ['青', '森', '県'],
          furigana: ['あお', 'もり', 'けん']
        }
      },
      {
        code: '03',
        name: {
          en: 'Iwate',
          ja: ['岩', '手', '県'],
          furigana: ['いわ', 'て', 'けん']
        }
      },
      {
        code: '04',
        name: {
          en: 'Miyagi',
          ja: ['宮', '城', '県'],
          furigana: ['みや', 'ぎ', 'けん']
        }
      },
      {
        code: '05',
        name: {
          en: 'Akita',
          ja: ['秋', '田', '県'],
          furigana: ['あき', 'た', 'けん']
        }
      },
      {
        code: '06',
        name: {
          en: 'Yamagata',
          ja: ['山', '形', '県'],
          furigana: ['やま', 'がた', 'けん']
        },
        cities: [{
          en: 'Sendai',
          ja: ['仙', '台', '市'],
          furigana: ['せん', 'だい', 'し'],
          types: [cityType.regionCapital]
        }],
      },
      {
        code: '07',
        name: {
          en: 'Fukushima',
          ja: ['福', '島', '県'],
          furigana: ['ふく', 'しま', 'けん']
        }
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kantō',
      ja: ['関', '東'],
      furigana: ['かん', 'とう']
    },
    prefectures: [
      {
        code: '08',
        name: {
          en: 'Ibaraki',
          ja: ['茨', '城', '県'],
          furigana: ['いば', 'らき', 'けん']
        }
      },
      {
        code: '09',
        name: {
          en: 'Tochigi',
          ja: ['栃', '木', '県'],
          furigana: ['とち', 'ぎ', 'けん']
        }
      },
      {
        code: '10',
        name: {
          en: 'Gunma',
          ja: ['群', '馬', '県'],
          furigana: ['ぐん', 'ま', 'けん']
        }
      },
      {
        code: '11',
        name: {
          en: 'Saitama',
          ja: ['埼', '玉', '県'],
          furigana: ['さい', 'たま', 'けん']
        }
      },
      {
        code: '12',
        name: {
          en: 'Chiba',
          ja: ['千', '葉', '県'],
          furigana: ['ちば']
        }
      },
      {
        code: '13',
        name: {
          en: 'Tōkyo',
          ja: ['東', '京都'],
          furigana: ['とう', 'きょう']
        },
        cities: [{
          en: 'Tōkyō',
          ja: ['東', '京都'],
          furigana: ['とう', 'きょう', 'と'],
          types: [cityType.regionCapital]
        }],
      },
      {
        code: '14',
        name: {
          en: 'Kanagawa',
          ja: ['神', '奈川', '県'],
          furigana: ['かな', 'がわ', 'けん']
        }
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūbu',
      ja: ['中', '部'],
      furigana: ['ちゅう', 'ぶ']
    },
    prefectures: [
      {
        code: '15',
        name: {
          en: 'Niigata',
          ja: ['新', '潟', '県'],
          furigana: ['にい', 'がた', 'けん']
        }
      },
      {
        code: '16',
        name: {
          en: 'Toyama',
          ja: ['富', '山', '県'],
          furigana: ['とや', 'ま', 'けん']
        }
      },
      {
        code: '17',
        name: {
          en: 'Ishikawa',
          ja: ['石', '川', '県'],
          furigana: ['いし', 'かわ', 'けん']
        }
      },
      {
        code: '18',
        name: {
          en: 'Fukui',
          ja: ['福', '井', '県'],
          furigana: ['ふく', 'い', 'けん']
        }
      },
      {
        code: '19',
        name: {
          en: 'Yamanashi',
          ja: ['山', '梨', '県'],
          furigana: ['やま', 'なし', 'けん']
        },
        cities: [{
          en: 'Nagoya',
          ja: ['名', '古屋'],
          furigana: ['なご', 'や'],
          types: [cityType.regionCapital]
        }],
      },
      {
        code: '20',
        name: {
          en: 'Nagano',
          ja: ['長', '野', '県'],
          furigana: ['なが', 'の', 'けん']
        },
        cities: [
          {
            en: 'Nagano',
            ja: ['長', '野', '市'],
            furigana: ['なが', 'の', 'し'],
            types: [cityType.favorite]
          }
        ]
      },
      {
        code: '21',
        name: {
          en: 'Gifu',
          ja: ['岐', '阜', '県'],
          furigana: ['ぎふ']
        }
      },
      {
        code: '22',
        name: {
          en: 'Shizuoka',
          ja: ['静', '岡', '県'],
          furigana: ['しず', 'おか', 'けん']
        },
        cities: [
          {
            en: 'Shimoda',
            ja: ['下', '田', '市'],
            furigana: ['しも', 'だ', 'し'],
            types: [cityType.favorite]
          }
        ]
      },
      {
        code: '23',
        name: {
          en: 'Aichi',
          ja: ['愛', '知', '県'],
          furigana: ['あい', 'ち']
        }
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kansai',
      ja: ['関', '西'],
      furigana: ['かん', 'さい']
    },
    prefectures: [
      {
        code: '24',
        name: {
          en: 'Mie',
          ja: ['三', '重', '県'],
          furigana: ['み', 'え', 'けん']
        }
      },
      {
        code: '25',
        name: {
          en: 'Shiga',
          ja: ['滋', '賀', '県'],
          furigana: ['し', 'が', 'けん']
        }
      },
      {
        code: '26',
        name: {
          en: 'Kyōto',
          ja: ['京', '都', '府'],
          furigana: ['きょう', 'と', 'ふ']
        },
        cities: [
          {
            en: 'Kyōto',
            ja: ['京', '都', '府'],
            furigana: ['きょう', 'と', 'ふ'],
            types: [cityType.regionCapital, cityType.favorite]
          }
        ],
      },
      {
        code: '27',
        name: {
          en: 'Osaka',
          ja: ['大', '阪', '府'],
          furigana: ['おお', 'さか', 'ふ']
        },
        cities: [
          {
            en: 'Ōsaka',
            ja: ['大', '阪', '府'],
            furigana: ['おお', 'さか', 'ふ'],
            types: [cityType.major, cityType.favorite]
          }
        ],
      },
      {
        code: '28',
        name: {
          en: 'Hyogo',
          ja: ['兵', '庫', '県'],
          furigana: ['ひょう', 'ご', 'けん']
        }
      },
      {
        code: '29',
        name: {
          en: 'Nara',
          ja: ['奈', '良', '県'],
          furigana: ['な', 'ら', 'けん']
        }
      },
      {
        code: '30',
        name: {
          en: 'Wakayama',
          ja: ['和', '歌', '山', '県'],
          furigana: ['わか', 'やま', 'けん']
        }
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūgoku',
      ja: ['中', '国'],
      furigana: ['ちゅう', 'ごく']
    },
    prefectures: [
      {
        code: '31',
        name: {
          en: 'Tottori',
          ja: ['鳥', '取', '県'],
          furigana: ['とっ', 'とり', 'けん']
        }
      },
      {
        code: '32',
        name: {
          en: 'Shimane',
          ja: ['島', '根', '県'],
          furigana: ['しま', 'ね', 'けん']
        }
      },
      {
        code: '33',
        name: {
          en: 'Okayama',
          ja: ['岡', '山', '県'],
          furigana: ['おか', 'やま', 'けん']
        }
      },
      {
        code: '34',
        name: {
          en: 'Hiroshima',
          ja: ['広', '島', '県'],
          furigana: ['ひろ', 'しま', 'けん']
        },
        cities: [{
          en: 'Hiroshima',
          ja: ['広', '島', '市'],
          furigana: ['ひろ', 'しま', 'し'],
          types: [cityType.regionCapital]
        }]
      },
      {
        code: '35',
        name: {
          en: 'Yamaguchi',
          ja: ['山', '口', '県'],
          furigana: ['やま', 'ぐち', 'けん']
        }
      }
    ]
  },
  {
    code: 'SHIK',
    name: {
      en: 'Shikoku',
      ja: ['四', '国'],
      furigana: ['し', 'こく']
    },
    prefectures: [
      {
        code: '36',
        name: {
          en: 'Tokushima',
          ja: ['徳', '島', '県'],
          furigana: ['とく', 'しま', 'けん']
        },
        cities: [{
          en: 'Takamatsu',
          ja: ['高', '松', '市'],
          furigana: ['たか', 'まつ', 'し'],
          types: [cityType.regionCapital]
        }],
      },
      {
        code: '37',
        name: {
          en: 'Kagawa',
          ja: ['香', '川', '県'],
          furigana: ['か', 'がわ', 'けん']
        }
      },
      {
        code: '38',
        name: {
          en: 'Ehime',
          ja: ['愛', '媛', '県'],
          furigana: ['え', 'ひめ', 'けん']
        }
      },
      {
        code: '39',
        name: {
          en: 'Kochi',
          ja: ['高', '知', '県'],
          furigana: ['こう', 'ち', 'けん']
        }
      }
    ]
  },
  {
    code: 'KYU',
    name: {
      en: 'Kyūshū',
      ja: ['九', '州'],
      furigana: ['きゅう', 'しゅう']
    },
    prefectures: [
      {
        code: '40',
        name: {
          en: 'Fukuoka',
          ja: ['福', '岡', '県'],
          furigana: ['ふく', 'おか', 'けん']
        },
        cities: [{
          en: 'Fukuoka',
          ja: ['福', '岡', '市'],
          furigana: ['ふく', 'おか', 'し'],
          types: [cityType.regionCapital]
        }
        ]
      },
      {
        code: '41',
        name: {
          en: 'Saga',
          ja: ['佐', '賀', '県'],
          furigana: ['さ', 'が', 'けん']
        }
      },
      {
        code: '42',
        name: {
          en: 'Nagasaki',
          ja: ['長', '崎', '県'],
          furigana: ['なが', 'さき', 'けん']
        }
      },
      {
        code: '43',
        name: {
          en: 'Kumamoto',
          ja: ['熊', '本', '県'],
          furigana: ['くま', 'もと', 'けん']
        }
      },
      {
        code: '44',
        name: {
          en: 'Oita',
          ja: ['大', '分', '県'],
          furigana: ['おお', 'いた', 'けん']
        }
      },
      {
        code: '45',
        name: {
          en: 'Miyazaki',
          ja: ['宮', '崎', '県'],
          furigana: ['みや', 'ざき', 'けん']
        }
      },
      {
        code: '46',
        name: {
          en: 'Kagoshima',
          ja: ['鹿', '児', '島', '県'],
          furigana: ['かご', 'しま', 'けん']
        },
        cities: [
          {
            en: 'Kagoshima',
            ja: ['鹿', '児', '島', '市'],
            furigana: ['かご', 'しま', 'し'],
            types: [cityType.favorite]
          }],
      },
      {
        code: '47',
        name: {
          en: 'Okinawa',
          ja: ['沖', '縄', '県'],
          furigana: ['おき', 'なわ', 'けん']
        }
      }
    ]
  }
]
