export const routePoints = [
  {
    name: "Paris to Madrid",
    data: "43\n✓VLG 18HA\n360-\nXI\n→DEVRO",
    metadata:
      "43<br>✓VLG 18HA<br>360-<br>XI<br>→DEVRO<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226273,
        latitude: 48.7261,
        longitude: 2.3666,
        altitudeFt: 31000,
      },
      {
        time: 1674233473,
        latitude: 40.4168,
        longitude: -3.7038,
        altitudeFt: 31000,
      },
    ],
  },
  // {
  //   name: "BIXBY",
  //   data: "60\nVIBE3405\n350-\nZ3\n➡BTZ",
  //   metadata:
  //     "60<br>VIBE3405<br>350-<br>Z3<br>➡BTZ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
  //   points: [
  //     {
  //       time: 1674226873,
  //       latitude: 44.8378,
  //       longitude: -0.5792,
  //       altitudeFt: 31000,
  //     },
  //     {
  //       time: 1674230570,
  //       latitude: 44.7881,
  //       longitude: -0.5727,
  //       altitudeFt: 31000,
  //     },
  //     {
  //       time: 1674232223,
  //       latitude: 44.7384,
  //       longitude: -0.5662,
  //       altitudeFt: 32000,
  //     },
  //     {
  //       time: 1674233984,
  //       latitude: 44.6887,
  //       longitude: -0.5597,
  //       altitudeFt: 32000,
  //     },
  //     {
  //       time: 1674235722,
  //       latitude: 44.639,
  //       longitude: -0.5532,
  //       altitudeFt: 32000,
  //     },
  //   ],
  // },
  {
    name: "Paris to Lille",
    data: "43\nVRYR60VE\n360-\nNILANG",
    metadata:
      "43<br>VRYR60VE<br>360-<br>NILANG<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.8566,
        longitude: 2.3522,
        altitudeFt: 31000,
      },
      {
        time: 1674226873 + 3600,
        latitude: 50.6292,
        longitude: 3.0573,
        altitudeFt: 31000,
      },
    ],
  },
  {
    name: "Bordeaux (BOD) to Lyon (LYS)",
    data: "43\nVEZY95KC\n360-\nNI RALIX\n➡TUPAR",
    metadata:
      "43<br>VEZY95KC<br>360-<br>NI RALIX<br>➡TUPAR<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 31000,
      },
      {
        time: 1674226873 + 4200, // Estimated flight duration: 1 hour and 10 minutes (4200 seconds)
        latitude: 45.7256,
        longitude: 5.0811,
        altitudeFt: 31000,
      },
    ],
  },
  {
    name: "Bordeaux (BOD) to Dijon",
    data: "47\n✓BEL7AD\n350-\nZ3\n➜URUNA",
    metadata:
      "47<br>✓BEL7AD<br>350-<br>Z3<br>➜URUNA<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674216873,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 31000,
      },
      {
        time: 1674216873 + 4800, // Estimated flight duration: 1 hour and 20 minutes (4800 seconds)
        latitude: 47.3216,
        longitude: 5.0415,
        altitudeFt: 31000,
      },
    ],
  },
  {
    name: "Paris CDG (CDG) to geneve (NCE)",
    data: "42\nVRYR219Y\n360-\nXI\n➡BOKNO",
    metadata:
      "42<br>VRYR219Y<br>360-<br>XI<br>➡BOKNO<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226990,
        latitude: 48.8566,
        longitude: 2.3522,
        altitudeFt: 31000,
      },
      {
        time: 1674226990 + 4200, // Adding 1 hour 10 minutes (4200 seconds) for estimated flight duration
        latitude: 46.2044,
        longitude: 6.1432,
        altitudeFt: 31000,
      },
    ],
  },
  {
    data: "43-5\nVVLG8830\n352350\nR2",
    metadata:
      "43-5<br>VVLG8830<br>352350<br>R2<br>Z3 t350 PPN p350<br>OSMOB h..m..<br>134.765<br>V<br>@h221@k260 @m.77@36",
    name: "Paris CDG (CDG) to Toulouse (TLS)",
    points: [
      {
        time: 1674227873,
        latitude: 49.0097,
        longitude: 2.5479,
        altitudeFt: 31000,
      },
      {
        time: 1674227873 + 4800, // Adding 1 hour 20 minutes (4800 seconds) for estimated flight duration
        latitude: 43.6293,
        longitude: 1.3638,
        altitudeFt: 31000,
      },
    ],
  },

  //     {
  //       "name": "Helsinki Airport to Ibiza",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.37062858374265,
  //           "longitude": 2.622935779781875,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235417,
  //           "latitude": 43.275213327514955,
  //           "longitude": -9.184147510069618,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Charles de Gaulle Airport to Tirana",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.04997626753647,
  //           "longitude": 2.4251764518848598,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235933,
  //           "latitude": 31.579225399757984,
  //           "longitude": -0.6701941400913647,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "London Heathrow to Marrakesh",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.405319605803406,
  //           "longitude": 2.6407495895007163,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235653,
  //           "latitude": 33.67328117473334,
  //           "longitude": -11.049048861519477,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Copenhagen Airport to Istanbul",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.49257066471371,
  //           "longitude": 2.619658423030506,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234195,
  //           "latitude": 57.80504484647605,
  //           "longitude": 16.672814363876057,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Stockholm Arlanda Airport to Alexandria",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.970819877643336,
  //           "longitude": 2.1133937513495784,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233813,
  //           "latitude": 33.17827461226454,
  //           "longitude": -2.6911382215253887,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Rome Fiumicino Airport to Milan",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.9363588025384,
  //           "longitude": 2.8464031800381795,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233537,
  //           "latitude": 54.74518379460578,
  //           "longitude": -19.494457082400682,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "London Heathrow to Burgas",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.88268310551168,
  //           "longitude": 2.4333040822882817,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234615,
  //           "latitude": 44.36573967639531,
  //           "longitude": 19.23744170737286,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Charles de Gaulle Airport to Biarritz",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.50374435748491,
  //           "longitude": 2.713681367948321,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232667,
  //           "latitude": 59.03711827781914,
  //           "longitude": 1.4645136919019919,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Amsterdam Airport Schiphol to Monastir",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.109527127352955,
  //           "longitude": 2.7899820834736886,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235403,
  //           "latitude": 53.585468970208865,
  //           "longitude": -3.0674007697128403,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Helsinki Airport to Marseille",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.29608256471103,
  //           "longitude": 2.7746584540354986,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234601,
  //           "latitude": 37.76592425787678,
  //           "longitude": -1.3468029450608832,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Helsinki Airport to Malaga",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.09231745341315,
  //           "longitude": 2.3443436425597985,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234642,
  //           "latitude": 47.22839663508383,
  //           "longitude": 4.688207304837711,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Frankfurt Airport to Bucharest",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.49779362198246,
  //           "longitude": 2.950430382697193,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233897,
  //           "latitude": 57.28751919666425,
  //           "longitude": 16.81491345229717,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Paris CDG to Ljubljana",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.01590713194163,
  //           "longitude": 2.3859030530019085,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232793,
  //           "latitude": 50.46533983877183,
  //           "longitude": 1.6097844791249472,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Rome Fiumicino Airport to London",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.8047850154682,
  //           "longitude": 2.4843983040695363,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235386,
  //           "latitude": 49.731935631498175,
  //           "longitude": -4.096089868687134,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Paris CDG to Essaouira",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.55894715723943,
  //           "longitude": 2.055654322746198,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235358,
  //           "latitude": 47.00323485100436,
  //           "longitude": -15.815217384413245,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Zurich Airport to Belgrade",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.35366030565135,
  //           "longitude": 2.8898814829034523,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233661,
  //           "latitude": 52.8695314337421,
  //           "longitude": 17.88511191719487,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Paris CDG to Seville",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.538914675248755,
  //           "longitude": 2.9426351062011022,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232870,
  //           "latitude": 43.48369376261516,
  //           "longitude": 9.907242007856087,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Oslo Airport to Thessaloniki",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.01772487707361,
  //           "longitude": 2.2762703122791685,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233970,
  //           "latitude": 37.33545715909258,
  //           "longitude": -6.893066544766953,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Charles de Gaulle Airport to Barcelona",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.317457661061454,
  //           "longitude": 2.693905120628365,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235781,
  //           "latitude": 59.28829585722647,
  //           "longitude": 9.875521501139648,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "London Heathrow to Rome",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.90991753220459,
  //           "longitude": 2.340852159081316,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234634,
  //           "latitude": 48.080828720280635,
  //           "longitude": 19.01623824119519,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Zurich Airport to London",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.498270617723314,
  //           "longitude": 2.7099943539635136,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234653,
  //           "latitude": 56.600783439790845,
  //           "longitude": 14.513786060212013,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Athens International Airport to Pula",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.48895155422574,
  //           "longitude": 2.2278297313895745,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232611,
  //           "latitude": 46.96026865057476,
  //           "longitude": 11.144711630941721,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Frankfurt Airport to Venice",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.372174263794726,
  //           "longitude": 2.2109278944093296,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232566,
  //           "latitude": 30.066373639198222,
  //           "longitude": -11.173629517244699,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Charles de Gaulle Airport to Tallinn",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.59527143704383,
  //           "longitude": 2.3211474845500812,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234526,
  //           "latitude": 58.140972477388395,
  //           "longitude": -17.250954144691217,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Helsinki Airport to Essaouira",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.44348713092494,
  //           "longitude": 2.685660455113723,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232829,
  //           "latitude": 57.73051571116361,
  //           "longitude": -1.837858127421967,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Lisbon Airport to Tunis",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.221669864659575,
  //           "longitude": 2.378604665296764,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233480,
  //           "latitude": 39.398506996807576,
  //           "longitude": 6.394246075300138,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Vienna International Airport to Sofia",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.93465452686482,
  //           "longitude": 2.460541815921221,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232641,
  //           "latitude": 54.22937914335223,
  //           "longitude": -4.522710588475016,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Oslo Airport to Aswan",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.09463541619768,
  //           "longitude": 2.8801984088022374,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234506,
  //           "latitude": 53.054463535113484,
  //           "longitude": 12.59669284233766,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Madrid Barajas to Split",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.25344143325389,
  //           "longitude": 2.6006309798102367,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232680,
  //           "latitude": 49.76973811488399,
  //           "longitude": -2.051500013358421,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "London Heathrow to Lyon",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.70307518199811,
  //           "longitude": 2.3027764644085287,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235795,
  //           "latitude": 41.989201049189695,
  //           "longitude": 3.7673936004579005,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Rome Fiumicino Airport to Munich",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.05219262070182,
  //           "longitude": 2.7454957864958645,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233719,
  //           "latitude": 39.95599473982235,
  //           "longitude": -7.773949428037579,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Helsinki Airport to Santorini",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.23104193802152,
  //           "longitude": 2.8021191886160257,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234375,
  //           "latitude": 42.196131772977594,
  //           "longitude": 5.078854668251267,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Barcelona Airport to Budapest",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.08695149546102,
  //           "longitude": 2.893258530450169,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233675,
  //           "latitude": 53.47981892571122,
  //           "longitude": 1.1802705282167736,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Zurich Airport to Lyon",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.660862231287624,
  //           "longitude": 2.1320710603158854,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235434,
  //           "latitude": 52.35623435317011,
  //           "longitude": -6.457406102638039,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Frankfurt Airport to Moscow",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.0464196466035,
  //           "longitude": 2.0918383601292287,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232877,
  //           "latitude": 38.77030255343589,
  //           "longitude": -19.486945306633558,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Dublin Airport to Gran Canaria",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.09021212316832,
  //           "longitude": 2.0946668779379385,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233756,
  //           "latitude": 39.78056693270058,
  //           "longitude": 6.288003478644697,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Madrid Barajas to Coruna",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.25878000564668,
  //           "longitude": 2.7814889785775057,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674233269,
  //           "latitude": 51.81654878105252,
  //           "longitude": 1.473326595191729,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Barcelona Airport to Sharm El Sheikh",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.20293123181696,
  //           "longitude": 2.0675503430289126,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234212,
  //           "latitude": 35.32244704416632,
  //           "longitude": 12.803372998095995,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Moscow Sheremetyevo Airport to Vilnius",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.092464480392145,
  //           "longitude": 2.0037821519237506,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235767,
  //           "latitude": 53.74156188824657,
  //           "longitude": 4.464222621003813,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Rome Fiumicino Airport to Tallinn",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.05886753160484,
  //           "longitude": 2.1085939447004414,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232871,
  //           "latitude": 59.6262856955595,
  //           "longitude": -5.637975988682626,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Dublin Airport to Munich",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.64978175898884,
  //           "longitude": 2.688616871649289,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235758,
  //           "latitude": 35.727943726037765,
  //           "longitude": -11.904207701320919,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Istanbul Airport to Marrakesh",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.42826477640831,
  //           "longitude": 2.4508948231597323,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235926,
  //           "latitude": 37.27390812053321,
  //           "longitude": 2.5208705173169506,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Munich Airport to Tangier",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.85201323735187,
  //           "longitude": 2.488249737666023,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232489,
  //           "latitude": 51.23855022519225,
  //           "longitude": -2.000919674726216,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Dublin Airport to Casablanca",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.2047040453846,
  //           "longitude": 2.7195778560094777,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232521,
  //           "latitude": 45.6237531967715,
  //           "longitude": -9.07954468385884,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Zurich Airport to Toulouse",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.635583283301514,
  //           "longitude": 2.473235632394535,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235815,
  //           "latitude": 54.160094564715756,
  //           "longitude": -0.6645937157420789,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Munich Airport to Vilnius",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.7477307945974,
  //           "longitude": 2.1517088537772477,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234315,
  //           "latitude": 33.44215578706344,
  //           "longitude": -17.791737510416237,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Moscow Sheremetyevo Airport to Athens",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.01875076791669,
  //           "longitude": 2.6576299934232495,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234580,
  //           "latitude": 56.99581250728879,
  //           "longitude": -15.05449142993272,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Dublin Airport to Madrid",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.5286492667607,
  //           "longitude": 2.3129567083134006,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674235889,
  //           "latitude": 59.55970705665804,
  //           "longitude": 5.135002378274905,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Amsterdam Airport Schiphol to Skopje",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.41797789082176,
  //           "longitude": 2.6513365205649615,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674234090,
  //           "latitude": 41.78811071206997,
  //           "longitude": -8.233611408789958,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Madrid Barajas to Munich",
  //       "points": [
  //         {
  //           "time": 1674228873,
  //           "latitude": 48.65184230591383,
  //           "longitude": 2.843723116080821,
  //           "altitudeFt": 31000
  //         },
  //         {
  //           "time": 1674232615,
  //           "latitude": 54.799156078353704,
  //           "longitude": 7.881487422977457,
  //           "altitudeFt": 31000
  //         }
  //       ]
  //     }
];
