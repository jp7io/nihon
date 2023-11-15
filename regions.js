const regions = [
  {
    "code": "HOK",
    "name": {
      "en": "Hokkaidō",
      "ja": "北海道"
    },
    "cities": [{
      "en": "Sapporo",
      "ja": "札幌市",
      "capital": true
    }],
    "prefectures": [
      {
        "code": "01",
        "name": {
          "en": "Hokkaidō",
          "ja": "北海道"
        }
      }
    ],
  },
  {
    "code": "TOH",
    "name": {
      "en": "Tōhoku",
      "ja": "東北"
    },
    "cities": [{
      "en": "Sendai",
      "ja": "仙台市",
      "capital": true
    }],
    "prefectures": [
      {
        "code": "02",
        "name": {
          "en": "Aomori",
          "ja": "青森県"
        }
      },
      {
        "code": "03",
        "name": {
          "en": "Iwate",
          "ja": "岩手県"
        }
      },
      {
        "code": "04",
        "name": {
          "en": "Miyagi",
          "ja": "宮城県"
        }
      },
      {
        "code": "05",
        "name": {
          "en": "Akita",
          "ja": "秋田県"
        }
      },
      {
        "code": "06",
        "name": {
          "en": "Yamagata",
          "ja": "山形県"
        }
      },
      {
        "code": "07",
        "name": {
          "en": "Fukushima",
          "ja": "福島県"
        }
      }
    ]
  },
  {
    "code": "KAN",
    "name": {
      "en": "Kantō",
      "ja": "関東"
    },
    "cities": [{
      "en": "Tōkyō",
      "ja": "東京都",
      "capital": true
    }],
    "prefectures": [
      {
        "code": "08",
        "name": {
          "en": "Ibaraki",
          "ja": "茨城県"
        }
      },
      {
        "code": "09",
        "name": {
          "en": "Tochigi",
          "ja": "栃木県"
        }
      },
      {
        "code": "10",
        "name": {
          "en": "Gunma",
          "ja": "群馬県"
        }
      },
      {
        "code": "11",
        "name": {
          "en": "Saitama",
          "ja": "埼玉県"
        }
      },
      {
        "code": "12",
        "name": {
          "en": "Chiba",
          "ja": "千葉県"
        }
      },
      {
        "code": "13",
        "name": {
          "en": "Tōkyo",
          "ja": "東京都"
        }
      },
      {
        "code": "14",
        "name": {
          "en": "Kanagawa",
          "ja": "神奈川県"
        }
      }
    ]
  },
  {
    "code": "CHU",
    "name": {
      "en": "Chūbu",
      "ja": "中部"
    },
    "cities": [{
      "en": "Nagoya",
      "ja": "名古屋",
      "capital": true
    }, {
      "en": "Nagano",
      "ja": "長野市",
    },
    {
      "en": "Shimoda",
      "ja": "下田市",
    }
    ],
    "prefectures": [
      {
        "code": "15",
        "name": {
          "en": "Niigata",
          "ja": "新潟県"
        }
      },
      {
        "code": "16",
        "name": {
          "en": "Toyama",
          "ja": "富山県"
        }
      },
      {
        "code": "17",
        "name": {
          "en": "Ishikawa",
          "ja": "石川県"
        }
      },
      {
        "code": "18",
        "name": {
          "en": "Fukui",
          "ja": "福井県"
        }
      },
      {
        "code": "19",
        "name": {
          "en": "Yamanashi",
          "ja": "山梨県"
        }
      },
      {
        "code": "20",
        "name": {
          "en": "Nagano",
          "ja": "長野県"
        }
      },
      {
        "code": "21",
        "name": {
          "en": "Gifu",
          "ja": "岐阜県"
        }
      },
      {
        "code": "22",
        "name": {
          "en": "Shizuoka",
          "ja": "静岡県"
        }
      },
      {
        "code": "23",
        "name": {
          "en": "Aichi",
          "ja": "愛知県"
        }
      }
    ]
  },
  {
    "code": "KAN",
    "name": {
      "en": "Kansai",
      "ja": "関西"
    },
    "cities": [{
      "en": "Kyōto",
      "ja": "京都府",
      "capital": true
    }, {
      "en": "Ōsaka",
      "ja": "大阪府"
    }],
    "prefectures": [
      {
        "code": "24",
        "name": {
          "en": "Mie",
          "ja": "三重県"
        }
      },
      {
        "code": "25",
        "name": {
          "en": "Shiga",
          "ja": "滋賀県"
        }
      },
      {
        "code": "26",
        "name": {
          "en": "Kyōto",
          "ja": "京都府"
        }
      },
      {
        "code": "27",
        "name": {
          "en": "Osaka",
          "ja": "大阪府"
        }
      },
      {
        "code": "28",
        "name": {
          "en": "Hyogo",
          "ja": "兵庫県"
        }
      },
      {
        "code": "29",
        "name": {
          "en": "Nara",
          "ja": "奈良県"
        }
      },
      {
        "code": "30",
        "name": {
          "en": "Wakayama",
          "ja": "和歌山県"
        }
      }
    ]
  },
  {
    "code": "CHU",
    "name": {
      "en": "Chūgoku",
      "ja": "中国"
    },
    "cities": [{
      "en": "Hiroshima",
      "ja": "広島市",
      "capital": true
    }],
    "prefectures": [
      {
        "code": "31",
        "name": {
          "en": "Tottori",
          "ja": "鳥取県"
        }
      },
      {
        "code": "32",
        "name": {
          "en": "Shimane",
          "ja": "島根県"
        }
      },
      {
        "code": "33",
        "name": {
          "en": "Okayama",
          "ja": "岡山県"
        }
      },
      {
        "code": "34",
        "name": {
          "en": "Hiroshima",
          "ja": "広島県"
        }
      },
      {
        "code": "35",
        "name": {
          "en": "Yamaguchi",
          "ja": "山口県"
        }
      }
    ]
  },
  {
    "code": "SHIK",
    "name": {
      "en": "Shikoku",
      "ja": "四国"
    },
    "cities": [{
      "en": "Takamatsu",
      "ja": "高松市",
      "capital": true
    }],
    "prefectures": [
      {
        "code": "36",
        "name": {
          "en": "Tokushima",
          "ja": "徳島県"
        }
      },
      {
        "code": "37",
        "name": {
          "en": "Kagawa",
          "ja": "香川県"
        }
      },
      {
        "code": "38",
        "name": {
          "en": "Ehime",
          "ja": "愛媛県"
        }
      },
      {
        "code": "39",
        "name": {
          "en": "Kochi",
          "ja": "高知県"
        }
      }
    ]
  },
  {
    "code": "KYU",
    "name": {
      "en": "Kyūshū",
      "ja": "九州"
    },
    "cities": [{
      "en": "Fukuoka",
      "ja": "福岡市",
      "capital": true
    },

    {
      "en": "Kagoshima",
      "ja": "鹿児島市",
      "capital": false
    }
    ],
    "prefectures": [
      {
        "code": "40",
        "name": {
          "en": "Fukuoka",
          "ja": "福岡県"
        }
      },
      {
        "code": "41",
        "name": {
          "en": "Saga",
          "ja": "佐賀県"
        }
      },
      {
        "code": "42",
        "name": {
          "en": "Nagasaki",
          "ja": "長崎県"
        }
      },
      {
        "code": "43",
        "name": {
          "en": "Kumamoto",
          "ja": "熊本県"
        }
      },
      {
        "code": "44",
        "name": {
          "en": "Oita",
          "ja": "大分県"
        }
      },
      {
        "code": "45",
        "name": {
          "en": "Miyazaki",
          "ja": "宮崎県"
        }
      },
      {
        "code": "46",
        "name": {
          "en": "Kagoshima",
          "ja": "鹿児島県"
        }
      },
      {
        "code": "47",
        "name": {
          "en": "Okinawa",
          "ja": "沖縄県"
        }
      }
    ]
  }
]
