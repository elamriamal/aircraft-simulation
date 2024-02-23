export const routePoints = [
  {
    name: "Paris to Madrid",
    data: "43\n✓VLG 18HA\n360-\nXI\n→DEVRO",
    metadata:
      "43<br>✓VLG 18HA<br>360-<br>XI<br>→DEVRO<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674224273,
        latitude: 48.7261,
        longitude: 2.3666,
        altitudeFt: 31000,
      },
      {
        time: 1674224273 + 7200,
        latitude: 40.4168,
        longitude: -3.7038,
        altitudeFt: 31000,
      },
    ],
  },
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

  {
    data: "60\nVIBE3405\n350-\nZ3\n➡BTZ",
    metadata:
      "60<br>VIBE3405<br>350-<br>Z3<br>➡BTZ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    name: "Helsinki Airport to Ibiza",
    points: [
      {
        time: 1674228873,
        latitude: 48.37062858374265,
        longitude: 2.622935779781875,
        altitudeFt: 31000,
      },
      {
        time: 1674235417,
        latitude: 43.275213327514955,
        longitude: -9.184147510069618,
        altitudeFt: 31000,
      },
    ],
  },
  {
    name: "BUD to NCL",
    data: "992\nXyHsQg\nQGABBIOP",
    metadata:
      "992\nXyHsQg\nQGABBIOP<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4339,
        longitude: 19.2525,
        altitudeFt: 31000,
      },
      {
        time: 1674232815,
        latitude: 55.0374,
        longitude: -1.6915,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "DUB to OSL",
    data: "277\nIrUxcFL\nGi",
    metadata:
      "277\nIrUxcFL\nGi<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 53.4213,
        longitude: -6.2701,
        altitudeFt: 31000,
      },
      {
        time: 1674232441,
        latitude: 60.1942,
        longitude: 11.1004,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "PRG to VIE",
    data: "223\nfM\nHSl",
    metadata:
      "223\nfM\nHSl<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.1018,
        longitude: 14.2632,
        altitudeFt: 31000,
      },
      {
        time: 1674232497,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LJU to LPL",
    data: "414\nn\nSyTnAvgdXy",
    metadata:
      "414\nn\nSyTnAvgdXy<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 46.2247,
        longitude: 14.456,
        altitudeFt: 31000,
      },
      {
        time: 1674232624,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BEG to VCE",
    data: "777\nqUmDJmNcP\nCaFoq",
    metadata:
      "777\nqUmDJmNcP\nCaFoq<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8194,
        longitude: 20.3069,
        altitudeFt: 31000,
      },
      {
        time: 1674233669,
        latitude: 45.504,
        longitude: 12.3397,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "FRA to MRS",
    data: "588\nsGC\nqbGCBlIeR",
    metadata:
      "588\nsGC\nqbGCBlIeR<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 31000,
      },
      {
        time: 1674230828,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "HEL to EDI",
    data: "711\npQOr\njeeMt",
    metadata:
      "711\npQOr\njeeMt<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 60.3172,
        longitude: 24.9633,
        altitudeFt: 31000,
      },
      {
        time: 1674231016,
        latitude: 55.95,
        longitude: -3.3725,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ZRH to AGP",
    data: "428\ntH\nd",
    metadata:
      "428\ntH\nd<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4647,
        longitude: 8.5492,
        altitudeFt: 31000,
      },
      {
        time: 1674231156,
        latitude: 36.6749,
        longitude: -4.4991,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "VIE to GVA",
    data: "334\nwBT\ncTUnuAC",
    metadata:
      "334\nwBT\ncTUnuAC<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 31000,
      },
      {
        time: 1674231773,
        latitude: 46.2382,
        longitude: 6.1089,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to GLA",
    data: "726\neIuRd\nCZG",
    metadata:
      "726\neIuRd\nCZG<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674231800,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MRS to RAK",
    data: "328\nYaLHJyGCUD\nEZsC",
    metadata:
      "328\nYaLHJyGCUD\nEZsC<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 31000,
      },
      {
        time: 1674232458,
        latitude: 31.6011,
        longitude: -8.0363,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "CAI to GLA",
    data: "57\nVXASnmG\nRYgiULHaU",
    metadata:
      "57\nVXASnmG\nRYgiULHaU<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 30.1219,
        longitude: 31.4061,
        altitudeFt: 31000,
      },
      {
        time: 1674232019,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "VIE to STN",
    data: "414\nrLDFjec\nIZyDHH",
    metadata:
      "414\nrLDFjec\nIZyDHH<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 31000,
      },
      {
        time: 1674233689,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "GVA to BCN",
    data: "326\nZYWQG\nnvTeCeYpbG",
    metadata:
      "326\nZYWQG\nnvTeCeYpbG<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 46.2382,
        longitude: 6.1089,
        altitudeFt: 31000,
      },
      {
        time: 1674232771,
        latitude: 41.2974,
        longitude: 2.0833,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BRS to LCA",
    data: "408\nND\nigUuZor",
    metadata:
      "408\nND\nigUuZor<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.3827,
        longitude: -2.7183,
        altitudeFt: 31000,
      },
      {
        time: 1674233511,
        latitude: 34.8756,
        longitude: 33.6248,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MXP to PRG",
    data: "334\nZGQPndLU\nfjZ",
    metadata:
      "334\nZGQPndLU\nfjZ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 45.6306,
        longitude: 8.7281,
        altitudeFt: 31000,
      },
      {
        time: 1674231581,
        latitude: 50.1018,
        longitude: 14.2632,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ZRH to EMA",
    data: "781\nwlXYkdtkvh\nbTJsGHPV",
    metadata:
      "781\nwlXYkdtkvh\nbTJsGHPV<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4647,
        longitude: 8.5492,
        altitudeFt: 31000,
      },
      {
        time: 1674232647,
        latitude: 52.8306,
        longitude: -1.3281,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "SEN to SOF",
    data: "318\nii\nLaYuKIgn",
    metadata:
      "318\nii\nLaYuKIgn<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.5714,
        longitude: 0.6956,
        altitudeFt: 31000,
      },
      {
        time: 1674230918,
        latitude: 42.6967,
        longitude: 23.4119,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LCA to DUB",
    data: "711\nTHYZUavG\nm",
    metadata:
      "711\nTHYZUavG\nm<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 34.8756,
        longitude: 33.6248,
        altitudeFt: 31000,
      },
      {
        time: 1674231781,
        latitude: 53.4213,
        longitude: -6.2701,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "TUN to RIX",
    data: "136\nWmcSvzzsf\nhAZCQP",
    metadata:
      "136\nWmcSvzzsf\nhAZCQP<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.8515,
        longitude: 10.2272,
        altitudeFt: 31000,
      },
      {
        time: 1674231365,
        latitude: 56.9221,
        longitude: 23.9799,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "FRA to MRS",
    data: "624\nBCOjDp\npzMVBkb",
    metadata:
      "624\nBCOjDp\npzMVBkb<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 31000,
      },
      {
        time: 1674233880,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "STN to LPL",
    data: "705\nrXVTYCSL\nxuGMhk",
    metadata:
      "705\nrXVTYCSL\nxuGMhk<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 31000,
      },
      {
        time: 1674232719,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BEG to EDI",
    data: "670\nvaqCbc\nHIDqI",
    metadata:
      "670\nvaqCbc\nHIDqI<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8194,
        longitude: 20.3069,
        altitudeFt: 31000,
      },
      {
        time: 1674231019,
        latitude: 55.95,
        longitude: -3.3725,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "GLA to SOF",
    data: "501\nVXsesHWB\nFGRT",
    metadata:
      "501\nVXsesHWB\nFGRT<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 31000,
      },
      {
        time: 1674230660,
        latitude: 42.6967,
        longitude: 23.4119,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "STN to ORK",
    data: "1\nlGZZrDlCs\nN",
    metadata:
      "1\nlGZZrDlCs\nN<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 31000,
      },
      {
        time: 1674232391,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LHR to ORK",
    data: "58\nRNUZdj\nXGd",
    metadata:
      "58\nRNUZdj\nXGd<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.47,
        longitude: -0.4543,
        altitudeFt: 31000,
      },
      {
        time: 1674231016,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LPL to FCO",
    data: "297\nwCItqkkr\nAnamklKJ",
    metadata:
      "297\nwCItqkkr\nAnamklKJ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 31000,
      },
      {
        time: 1674232391,
        latitude: 41.8003,
        longitude: 12.2389,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "STN to CPH",
    data: "950\nSujwBTFpW\nG",
    metadata:
      "950\nSujwBTFpW\nG<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 31000,
      },
      {
        time: 1674233350,
        latitude: 55.618,
        longitude: 12.6561,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to ZRH",
    data: "553\nvvcTc\nRQ",
    metadata:
      "553\nvvcTc\nRQ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674233018,
        latitude: 47.4647,
        longitude: 8.5492,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ALG to EMA",
    data: "972\nLfHD\nTiXenXK",
    metadata:
      "972\nLfHD\nTiXenXK<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.691,
        longitude: 3.2155,
        altitudeFt: 31000,
      },
      {
        time: 1674233778,
        latitude: 52.8306,
        longitude: -1.3281,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BUD to CAI",
    data: "978\nCMTQtPHKU\nF",
    metadata:
      "978\nCMTQtPHKU\nF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4339,
        longitude: 19.2525,
        altitudeFt: 31000,
      },
      {
        time: 1674233211,
        latitude: 30.1219,
        longitude: 31.4061,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "AMS to MAD",
    data: "508\nAeotoZLIan\nzZxK",
    metadata:
      "508\nAeotoZLIan\nzZxK<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.3105,
        longitude: 4.7683,
        altitudeFt: 31000,
      },
      {
        time: 1674233024,
        latitude: 40.4719,
        longitude: -3.5624,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "PRG to AMS",
    data: "12\nQcUAB\nlnaxvODgPp",
    metadata:
      "12\nQcUAB\nlnaxvODgPp<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.1018,
        longitude: 14.2632,
        altitudeFt: 31000,
      },
      {
        time: 1674231670,
        latitude: 52.3105,
        longitude: 4.7683,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "CAI to SOF",
    data: "233\nu\nsZBwBxUJ",
    metadata:
      "233\nu\nsZBwBxUJ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 30.1219,
        longitude: 31.4061,
        altitudeFt: 31000,
      },
      {
        time: 1674230921,
        latitude: 42.6967,
        longitude: 23.4119,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LPL to MXP",
    data: "961\nXpo\nR",
    metadata:
      "961\nXpo\nR<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 31000,
      },
      {
        time: 1674231885,
        latitude: 45.6306,
        longitude: 8.7281,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ZRH to CPH",
    data: "305\nsP\nzRzLcJAF",
    metadata:
      "305\nsP\nzRzLcJAF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4647,
        longitude: 8.5492,
        altitudeFt: 31000,
      },
      {
        time: 1674233848,
        latitude: 55.618,
        longitude: 12.6561,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "DUB to SOF",
    data: "886\nzQiurpwgr\nKaCNbURs",
    metadata:
      "886\nzQiurpwgr\nKaCNbURs<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 53.4213,
        longitude: -6.2701,
        altitudeFt: 31000,
      },
      {
        time: 1674231908,
        latitude: 42.6967,
        longitude: 23.4119,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "TUN to MUC",
    data: "230\ntRNslHGsu\nBbwLyQo",
    metadata:
      "230\ntRNslHGsu\nBbwLyQo<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.8515,
        longitude: 10.2272,
        altitudeFt: 31000,
      },
      {
        time: 1674232523,
        latitude: 48.3537,
        longitude: 11.775,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "DBV to HEL",
    data: "88\nZ\nLwdSVMNs",
    metadata:
      "88\nZ\nLwdSVMNs<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 42.5614,
        longitude: 18.2681,
        altitudeFt: 31000,
      },
      {
        time: 1674230538,
        latitude: 60.3172,
        longitude: 24.9633,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "VCE to TXL",
    data: "939\nifUS\nFaWgvxzI",
    metadata:
      "939\nifUS\nFaWgvxzI<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 45.504,
        longitude: 12.3397,
        altitudeFt: 31000,
      },
      {
        time: 1674231945,
        latitude: 52.5601,
        longitude: 13.2877,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to OSL",
    data: "762\nNcWnFoQPE\nZstXbOIu",
    metadata:
      "762\nNcWnFoQPE\nZstXbOIu<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674232465,
        latitude: 60.1942,
        longitude: 11.1004,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "RAK to RIX",
    data: "141\nAIjJ\nW",
    metadata:
      "141\nAIjJ\nW<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 31.6011,
        longitude: -8.0363,
        altitudeFt: 31000,
      },
      {
        time: 1674232516,
        latitude: 56.9221,
        longitude: 23.9799,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "HRG to LIS",
    data: "433\noIUopqDi\nWZQLSU",
    metadata:
      "433\noIUopqDi\nWZQLSU<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 27.179,
        longitude: 33.7961,
        altitudeFt: 31000,
      },
      {
        time: 1674232023,
        latitude: 38.7744,
        longitude: -9.1342,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "RIX to GLA",
    data: "704\nxIvzN\nicDjLNICK",
    metadata:
      "704\nxIvzN\nicDjLNICK<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 56.9221,
        longitude: 23.9799,
        altitudeFt: 31000,
      },
      {
        time: 1674233210,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BFS to OSL",
    data: "477\nPJ\nJKVViA",
    metadata:
      "477\nPJ\nJKVViA<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 54.6575,
        longitude: -6.2182,
        altitudeFt: 31000,
      },
      {
        time: 1674231367,
        latitude: 60.1942,
        longitude: 11.1004,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "STN to SSH",
    data: "251\nRbNKpqc\nj",
    metadata:
      "251\nRbNKpqc\nj<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 31000,
      },
      {
        time: 1674231644,
        latitude: 27.9773,
        longitude: 34.3937,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ORK to VIE",
    data: "622\nfdX\niXa",
    metadata:
      "622\nfdX\niXa<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 31000,
      },
      {
        time: 1674233843,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "AMS to LHR",
    data: "412\nPqBZCnKh\nUUF",
    metadata:
      "412\nPqBZCnKh\nUUF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.3105,
        longitude: 4.7683,
        altitudeFt: 31000,
      },
      {
        time: 1674233191,
        latitude: 51.47,
        longitude: -0.4543,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to ORK",
    data: "294\nTzJ\nIRcqdPvwEF",
    metadata:
      "294\nTzJ\nIRcqdPvwEF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674233793,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "GLA to CDG",
    data: "116\ndpmpcPtx\njebdFUs",
    metadata:
      "116\ndpmpcPtx\njebdFUs<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 31000,
      },
      {
        time: 1674233942,
        latitude: 49.0097,
        longitude: 2.5479,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "VIE to IST",
    data: "503\nWdUif\nWxq",
    metadata:
      "503\nWdUif\nWxq<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 31000,
      },
      {
        time: 1674230984,
        latitude: 41.2751,
        longitude: 28.7519,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "HEL to RIX",
    data: "126\nnhB\nZPuOi",
    metadata:
      "126\nnhB\nZPuOi<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 60.3172,
        longitude: 24.9633,
        altitudeFt: 31000,
      },
      {
        time: 1674231577,
        latitude: 56.9221,
        longitude: 23.9799,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "SNN to LCA",
    data: "787\nWgl\nCjvDOEp",
    metadata:
      "787\nWgl\nCjvDOEp<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.7019,
        longitude: -8.9247,
        altitudeFt: 31000,
      },
      {
        time: 1674230544,
        latitude: 34.8756,
        longitude: 33.6248,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BOD to ORK",
    data: "31\nfPrghkXas\nmTIbQWQZX",
    metadata:
      "31\nfPrghkXas\nmTIbQWQZX<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 31000,
      },
      {
        time: 1674231915,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BFS to CAI",
    data: "272\ndhJ\nwlAjuE",
    metadata:
      "272\ndhJ\nwlAjuE<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 54.6575,
        longitude: -6.2182,
        altitudeFt: 31000,
      },
      {
        time: 1674233240,
        latitude: 30.1219,
        longitude: 31.4061,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "AGP to FRA",
    data: "70\nouEDxpD\niPapPSqXFA",
    metadata:
      "70\nouEDxpD\niPapPSqXFA<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.6749,
        longitude: -4.4991,
        altitudeFt: 31000,
      },
      {
        time: 1674231890,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BUD to LYS",
    data: "557\nrsuSDdD\nPZtgVqrB",
    metadata:
      "557\nrsuSDdD\nPZtgVqrB<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4339,
        longitude: 19.2525,
        altitudeFt: 31000,
      },
      {
        time: 1674232293,
        latitude: 45.7256,
        longitude: 5.0811,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to ORK",
    data: "210\njLnY\npJ",
    metadata:
      "210\njLnY\npJ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674233959,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BFS to PRG",
    data: "235\nTYNMCTd\nLGSPnpxwEl",
    metadata:
      "235\nTYNMCTd\nLGSPnpxwEl<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 54.6575,
        longitude: -6.2182,
        altitudeFt: 31000,
      },
      {
        time: 1674233806,
        latitude: 50.1018,
        longitude: 14.2632,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "SNN to OTP",
    data: "877\nkdGzbk\nuSh",
    metadata:
      "877\nkdGzbk\nuSh<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.7019,
        longitude: -8.9247,
        altitudeFt: 31000,
      },
      {
        time: 1674233386,
        latitude: 44.5711,
        longitude: 26.085,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BEG to NCL",
    data: "731\neIPgpC\niJTMPuD",
    metadata:
      "731\neIPgpC\niJTMPuD<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8194,
        longitude: 20.3069,
        altitudeFt: 31000,
      },
      {
        time: 1674230903,
        latitude: 55.0374,
        longitude: -1.6915,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BOD to MXP",
    data: "332\nxAStN\nnBmsWck",
    metadata:
      "332\nxAStN\nnBmsWck<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 31000,
      },
      {
        time: 1674231871,
        latitude: 45.6306,
        longitude: 8.7281,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "NCL to RAK",
    data: "633\nzZoXumQCet\njZrZRFo",
    metadata:
      "633\nzZoXumQCet\njZrZRFo<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.0374,
        longitude: -1.6915,
        altitudeFt: 31000,
      },
      {
        time: 1674231296,
        latitude: 31.6011,
        longitude: -8.0363,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LED to ORK",
    data: "759\nFOKE\nturrmsP",
    metadata:
      "759\nFOKE\nturrmsP<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.8003,
        longitude: 30.2625,
        altitudeFt: 31000,
      },
      {
        time: 1674233190,
        latitude: 51.8413,
        longitude: -8.4911,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MXP to PRG",
    data: "756\nvXOsof\neCwc",
    metadata:
      "756\nvXOsof\neCwc<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 45.6306,
        longitude: 8.7281,
        altitudeFt: 31000,
      },
      {
        time: 1674232116,
        latitude: 50.1018,
        longitude: 14.2632,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "GVA to CPH",
    data: "566\nRfEVKSZmRs\noGQRdKGLfT",
    metadata:
      "566\nRfEVKSZmRs\noGQRdKGLfT<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 46.2382,
        longitude: 6.1089,
        altitudeFt: 31000,
      },
      {
        time: 1674230757,
        latitude: 55.618,
        longitude: 12.6561,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "RAK to MAN",
    data: "859\nvON\nmokRWF",
    metadata:
      "859\nvON\nmokRWF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 31.6011,
        longitude: -8.0363,
        altitudeFt: 31000,
      },
      {
        time: 1674233961,
        latitude: 53.3653,
        longitude: -2.2728,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LYS to AGP",
    data: "632\nkXrYp\nzdSmcS",
    metadata:
      "632\nkXrYp\nzdSmcS<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 45.7256,
        longitude: 5.0811,
        altitudeFt: 31000,
      },
      {
        time: 1674233105,
        latitude: 36.6749,
        longitude: -4.4991,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "WAW to BFS",
    data: "89\nDLvFlCElxP\nxpzkFiquGw",
    metadata:
      "89\nDLvFlCElxP\nxpzkFiquGw<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.1657,
        longitude: 20.9671,
        altitudeFt: 31000,
      },
      {
        time: 1674230840,
        latitude: 54.6575,
        longitude: -6.2182,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "EDI to BHX",
    data: "685\neNhUBbqKR\nxzwoNmHQL",
    metadata:
      "685\neNhUBbqKR\nxzwoNmHQL<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.95,
        longitude: -3.3725,
        altitudeFt: 31000,
      },
      {
        time: 1674231817,
        latitude: 52.4525,
        longitude: -1.7436,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BRS to MRS",
    data: "354\nGRsXcN\nl",
    metadata:
      "354\nGRsXcN\nl<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 51.3827,
        longitude: -2.7183,
        altitudeFt: 31000,
      },
      {
        time: 1674231747,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ALG to LPL",
    data: "261\naQthVnXFX\nVJtL",
    metadata:
      "261\naQthVnXFX\nVJtL<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.691,
        longitude: 3.2155,
        altitudeFt: 31000,
      },
      {
        time: 1674233492,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "TUN to STN",
    data: "242\nrmpsHchP\nIfOUwYH",
    metadata:
      "242\nrmpsHchP\nIfOUwYH<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.8515,
        longitude: 10.2272,
        altitudeFt: 31000,
      },
      {
        time: 1674233643,
        latitude: 51.885,
        longitude: 0.235,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MRS to FCO",
    data: "563\nroAGczqhP\nt",
    metadata:
      "563\nroAGczqhP\nt<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 31000,
      },
      {
        time: 1674231255,
        latitude: 41.8003,
        longitude: 12.2389,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "CPH to LED",
    data: "567\nuvuHruNX\nOKUWEMPFb",
    metadata:
      "567\nuvuHruNX\nOKUWEMPFb<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.618,
        longitude: 12.6561,
        altitudeFt: 31000,
      },
      {
        time: 1674233502,
        latitude: 59.8003,
        longitude: 30.2625,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BUD to ATH",
    data: "907\nfTHCawlqI\nt",
    metadata:
      "907\nfTHCawlqI\nt<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 47.4339,
        longitude: 19.2525,
        altitudeFt: 31000,
      },
      {
        time: 1674232430,
        latitude: 37.9364,
        longitude: 23.9445,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "AGP to LED",
    data: "113\nUdKEhHhAlR\nuKOYB",
    metadata:
      "113\nUdKEhHhAlR\nuKOYB<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 36.6749,
        longitude: -4.4991,
        altitudeFt: 31000,
      },
      {
        time: 1674233950,
        latitude: 59.8003,
        longitude: 30.2625,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to DUS",
    data: "196\nO\nRNCBomzD",
    metadata:
      "196\nO\nRNCBomzD<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674233560,
        latitude: 51.2783,
        longitude: 6.7644,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "OSL to TXL",
    data: "382\nnw\nHUuxSSiob",
    metadata:
      "382\nnw\nHUuxSSiob<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 60.1942,
        longitude: 11.1004,
        altitudeFt: 31000,
      },
      {
        time: 1674232256,
        latitude: 52.5601,
        longitude: 13.2877,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "EMA to MRS",
    data: "711\nuCK\nzTZT",
    metadata:
      "711\nuCK\nzTZT<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.8306,
        longitude: -1.3281,
        altitudeFt: 31000,
      },
      {
        time: 1674232419,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "DBV to SNN",
    data: "313\nbjm\nzZujj",
    metadata:
      "313\nbjm\nzZujj<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 42.5614,
        longitude: 18.2681,
        altitudeFt: 31000,
      },
      {
        time: 1674232010,
        latitude: 52.7019,
        longitude: -8.9247,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BFS to LIS",
    data: "486\nbcGdRIAX\nU",
    metadata:
      "486\nbcGdRIAX\nU<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 54.6575,
        longitude: -6.2182,
        altitudeFt: 31000,
      },
      {
        time: 1674231637,
        latitude: 38.7744,
        longitude: -9.1342,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "FRA to SEN",
    data: "532\nJOCLTgeIuT\nueGkrExfe",
    metadata:
      "532\nJOCLTgeIuT\nueGkrExfe<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 31000,
      },
      {
        time: 1674230485,
        latitude: 51.5714,
        longitude: 0.6956,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "FCO to EDI",
    data: "644\nsWV\nrNmgZNdtz",
    metadata:
      "644\nsWV\nrNmgZNdtz<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 41.8003,
        longitude: 12.2389,
        altitudeFt: 31000,
      },
      {
        time: 1674230963,
        latitude: 55.95,
        longitude: -3.3725,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "AMS to CMN",
    data: "260\nbXIOw\nlal",
    metadata:
      "260\nbXIOw\nlal<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.3105,
        longitude: 4.7683,
        altitudeFt: 31000,
      },
      {
        time: 1674232447,
        latitude: 33.3677,
        longitude: -7.5897,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "SNN to IST",
    data: "856\neOwXrY\nuwxXLdXldn",
    metadata:
      "856\neOwXrY\nuwxXLdXldn<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 52.7019,
        longitude: -8.9247,
        altitudeFt: 31000,
      },
      {
        time: 1674230793,
        latitude: 41.2751,
        longitude: 28.7519,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ARN to TXL",
    data: "941\nFVdnBPLMQ\njEZiA",
    metadata:
      "941\nFVdnBPLMQ\njEZiA<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 31000,
      },
      {
        time: 1674232405,
        latitude: 52.5601,
        longitude: 13.2877,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "CMN to CDG",
    data: "861\nhxRVpXozES\ntXgQDW",
    metadata:
      "861\nhxRVpXozES\ntXgQDW<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 33.3677,
        longitude: -7.5897,
        altitudeFt: 31000,
      },
      {
        time: 1674230577,
        latitude: 49.0097,
        longitude: 2.5479,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "GLA to ALG",
    data: "626\nd\nbJcWnvDCap",
    metadata:
      "626\nd\nbJcWnvDCap<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.8652,
        longitude: -4.4324,
        altitudeFt: 31000,
      },
      {
        time: 1674231274,
        latitude: 36.691,
        longitude: 3.2155,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "NCL to MAN",
    data: "12\ncV\nrxwucQW",
    metadata:
      "12\ncV\nrxwucQW<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 55.0374,
        longitude: -1.6915,
        altitudeFt: 31000,
      },
      {
        time: 1674232805,
        latitude: 53.3653,
        longitude: -2.2728,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ATH to LHR",
    data: "982\nSHvzV\nkbvjHVjRSW",
    metadata:
      "982\nSHvzV\nkbvjHVjRSW<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 37.9364,
        longitude: 23.9445,
        altitudeFt: 31000,
      },
      {
        time: 1674233736,
        latitude: 51.47,
        longitude: -0.4543,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "VIE to OSL",
    data: "16\nZCq\nlfdRYZCQHF",
    metadata:
      "16\nZCq\nlfdRYZCQHF<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.1102,
        longitude: 16.5697,
        altitudeFt: 31000,
      },
      {
        time: 1674233577,
        latitude: 60.1942,
        longitude: 11.1004,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MRS to AMS",
    data: "194\ndFs\nWRCURfgWlr",
    metadata:
      "194\ndFs\nWRCURfgWlr<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 43.4393,
        longitude: 5.2217,
        altitudeFt: 31000,
      },
      {
        time: 1674230719,
        latitude: 52.3105,
        longitude: 4.7683,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "FRA to LJU",
    data: "281\nJVBMkXZoZi\nytDqn",
    metadata:
      "281\nJVBMkXZoZi\nytDqn<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 31000,
      },
      {
        time: 1674232439,
        latitude: 46.2247,
        longitude: 14.456,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LCA to FRA",
    data: "54\nFC\nmRHP",
    metadata:
      "54\nFC\nmRHP<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 34.8756,
        longitude: 33.6248,
        altitudeFt: 31000,
      },
      {
        time: 1674233821,
        latitude: 50.0336,
        longitude: 8.5706,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "BOD to BRU",
    data: "836\nVDiqWpFR\nAK",
    metadata:
      "836\nVDiqWpFR\nAK<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 31000,
      },
      {
        time: 1674232467,
        latitude: 50.9014,
        longitude: 4.4844,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "RIX to BOD",
    data: "441\ntvMlC\nGmnNZ",
    metadata:
      "441\ntvMlC\nGmnNZ<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 56.9221,
        longitude: 23.9799,
        altitudeFt: 31000,
      },
      {
        time: 1674232746,
        latitude: 44.8283,
        longitude: -0.7151,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "MUC to WAW",
    data: "344\nuGOet\nYOUO",
    metadata:
      "344\nuGOet\nYOUO<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 48.3537,
        longitude: 11.775,
        altitudeFt: 31000,
      },
      {
        time: 1674232245,
        latitude: 52.1657,
        longitude: 20.9671,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "LPL to ARN",
    data: "723\nXHNlRoV\nVv",
    metadata:
      "723\nXHNlRoV\nVv<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 53.3377,
        longitude: -2.853,
        altitudeFt: 31000,
      },
      {
        time: 1674233111,
        latitude: 59.6498,
        longitude: 17.9239,
        altitudeFt: 0,
      },
    ],
  },
  {
    name: "ZAG to SEN",
    data: "270\nzc\nlgvcTohfGw",
    metadata:
      "270\nzc\nlgvcTohfGw<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36",
    points: [
      {
        time: 1674226873,
        latitude: 45.7417,
        longitude: 16.0683,
        altitudeFt: 31000,
      },
      {
        time: 1674232276,
        latitude: 51.5714,
        longitude: 0.6956,
        altitudeFt: 0,
      },
    ],
  },
];
