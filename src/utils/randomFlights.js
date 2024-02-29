const airportCoordinates = {
  AMS: { latitude: 52.3105, longitude: 4.7683 }, // Amsterdam
  ATH: { latitude: 37.9364, longitude: 23.9445 }, // Athens
  BCN: { latitude: 41.2974, longitude: 2.0833 }, // Barcelona
  BER: { latitude: 52.3667, longitude: 13.5 }, // Berlin
  BOD: { latitude: 44.8283, longitude: -0.7151 }, // Bordeaux
  BRU: { latitude: 50.9014, longitude: 4.4844 }, // Brussels
  BUD: { latitude: 47.4339, longitude: 19.2525 }, // Budapest
  CDG: { latitude: 49.0097, longitude: 2.5479 }, // Paris Charles de Gaulle
  CPH: { latitude: 55.618, longitude: 12.6561 }, // Copenhagen
  DBV: { latitude: 42.5614, longitude: 18.2681 }, // Dubrovnik
  DUB: { latitude: 53.4213, longitude: -6.2701 }, // Dublin
  DUS: { latitude: 51.2783, longitude: 6.7644 }, // Düsseldorf
  FCO: { latitude: 41.8003, longitude: 12.2389 }, // Rome Fiumicino
  FRA: { latitude: 50.0336, longitude: 8.5706 }, // Frankfurt
  HEL: { latitude: 60.3172, longitude: 24.9633 }, // Helsinki
  IST: { latitude: 41.2751, longitude: 28.7519 }, // Istanbul
  LHR: { latitude: 51.47, longitude: -0.4543 }, // London Heathrow
  LIS: { latitude: 38.7744, longitude: -9.1342 }, // Lisbon
  LYS: { latitude: 45.7256, longitude: 5.0811 }, // Lyon
  MAD: { latitude: 40.4719, longitude: -3.5624 }, // Madrid
  MAN: { latitude: 53.3653, longitude: -2.2728 }, // Manchester
  MRS: { latitude: 43.4393, longitude: 5.2217 }, // Marseille
  MUC: { latitude: 48.3537, longitude: 11.775 }, // Munich
  MXP: { latitude: 45.6306, longitude: 8.7281 }, // Milan Malpensa
  NCE: { latitude: 43.6634, longitude: 7.2148 }, // Nice
  OSL: { latitude: 60.1942, longitude: 11.1004 }, // Oslo
  OTP: { latitude: 44.5711, longitude: 26.085 }, // Bucharest Henri Coandă
  PRG: { latitude: 50.1018, longitude: 14.2632 }, // Prague
  SOF: { latitude: 42.6967, longitude: 23.4119 }, // Sofia
  STN: { latitude: 51.885, longitude: 0.235 }, // London Stansted
  TXL: { latitude: 52.5601, longitude: 13.2877 }, // Berlin Tegel
  VIE: { latitude: 48.1102, longitude: 16.5697 }, // Vienna
  WAW: { latitude: 52.1657, longitude: 20.9671 }, // Warsaw
  ZAG: { latitude: 45.7417, longitude: 16.0683 }, // Zagreb
  ZRH: { latitude: 47.4647, longitude: 8.5492 }, // Zurich
  CMN: { latitude: 33.3677, longitude: -7.5897 }, // Casablanca
  CAI: { latitude: 30.1219, longitude: 31.4061 }, // Cairo
  TUN: { latitude: 36.8515, longitude: 10.2272 }, // Tunis
  ALG: { latitude: 36.691, longitude: 3.2155 }, // Algiers
  RAK: { latitude: 31.6011, longitude: -8.0363 }, // Marrakech
  LCA: { latitude: 34.8756, longitude: 33.6248 }, // Larnaca
  HRG: { latitude: 27.179, longitude: 33.7961 }, // Hurghada
  SSH: { latitude: 27.9773, longitude: 34.3937 }, // Sharm El Sheikh
  AGP: { latitude: 36.6749, longitude: -4.4991 }, // Malaga
  VCE: { latitude: 45.504, longitude: 12.3397 }, // Venice
  LJU: { latitude: 46.2247, longitude: 14.456 }, // Ljubljana
  EDI: { latitude: 55.95, longitude: -3.3725 }, // Edinburgh
  GLA: { latitude: 55.8652, longitude: -4.4324 }, // Glasgow
  ARN: { latitude: 59.6498, longitude: 17.9239 }, // Stockholm Arlanda
  RIX: { latitude: 56.9221, longitude: 23.9799 }, // Riga
  GVA: { latitude: 46.2382, longitude: 6.1089 }, // Geneva
  LED: { latitude: 59.8003, longitude: 30.2625 }, // St. Petersburg
  BEG: { latitude: 44.8194, longitude: 20.3069 }, // Belgrade
  BHX: { latitude: 52.4525, longitude: -1.7436 }, // Birmingham
  EMA: { latitude: 52.8306, longitude: -1.3281 }, // East Midlands
  BRS: { latitude: 51.3827, longitude: -2.7183 }, // Bristol
  NCL: { latitude: 55.0374, longitude: -1.6915 }, // Newcastle
  LPL: { latitude: 53.3377, longitude: -2.853 }, // Liverpool
  SEN: { latitude: 51.5714, longitude: 0.6956 }, // London Southend
  SNN: { latitude: 52.7019, longitude: -8.9247 }, // Shannon
  ORK: { latitude: 51.8413, longitude: -8.4911 }, // Cork
  BFS: { latitude: 54.6575, longitude: -6.2182 }, // Belfast
  JFK: { latitude: 40.6413, longitude: -73.7781 },
  LAX: { latitude: 33.9416, longitude: -118.4085 },
  ORD: { latitude: 41.9742, longitude: -87.9073 },
  ATL: { latitude: 33.6407, longitude: -84.4277 },
  DFW: { latitude: 32.8998, longitude: -97.0403 },
  DEN: { latitude: 39.8561, longitude: -104.6737 },
  SFO: { latitude: 37.6213, longitude: -122.3790 },
  SEA: { latitude: 47.4502, longitude: -122.3088 },
  MIA: { latitude: 25.7959, longitude: -80.2870 },
  MSP: { latitude: 44.8805, longitude: -93.2166 },
  IAH: { latitude: 29.9844, longitude: -95.3414 },
  LAS: { latitude: 36.0800, longitude: -115.1522 },
  PHX: { latitude: 33.4342, longitude: -112.0116 },
  BOS: { latitude: 42.3656, longitude: -71.0096 },
  DTW: { latitude: 42.2125, longitude: -83.3534 },
  EWR: { latitude: 40.6895, longitude: -74.1745 },
  CLT: { latitude: 35.2140, longitude: -80.9431 },
  MCO: { latitude: 28.4312, longitude: -81.3081 },
  FLL: { latitude: 26.0722, longitude: -80.1447 },
  PHL: { latitude: 39.8721, longitude: -75.2421 },
  BWI: { latitude: 39.1774, longitude: -76.6684 },
  IAD: { latitude: 38.9531, longitude: -77.4565 },
  SAN: { latitude: 32.7336, longitude: -117.1904 },
  MDW: { latitude: 41.7868, longitude: -87.7416 },
  TPA: { latitude: 27.9756, longitude: -82.5333 },
  DAL: { latitude: 32.8470, longitude: -96.8518 },
  HOU: { latitude: 29.6454, longitude: -95.2789 },
  BNA: { latitude: 36.1264, longitude: -86.6774 },
  STL: { latitude: 38.7487, longitude: -90.3700 },
  SLC: { latitude: 40.7856, longitude: -111.9807 },
  MCI: { latitude: 39.2976, longitude: -94.7139 },
  DCA: { latitude: 38.8512, longitude: -77.0402 },
  SJC: { latitude: 37.3626, longitude: -121.9291 },
  MSY: { latitude: 29.9934, longitude: -90.2580 },
  RDU: { latitude: 35.8776, longitude: -78.7875 },
  PDX: { latitude: 45.5887, longitude: -122.5975 },
  SAT: { latitude: 29.5312, longitude: -98.4691 },
  IND: { latitude: 39.7173, longitude: -86.2944 },
  SMF: { latitude: 38.6953, longitude: -121.5910 },
  PIT: { latitude: 40.4915, longitude: -80.2328 },
  CLE: { latitude: 41.4117, longitude: -81.8494 },
  CMH: { latitude: 39.9980, longitude: -82.8919 },
  AUS: { latitude: 30.2025, longitude: -97.6664 },
  HNL: { latitude: 21.3259, longitude: -157.9215 },
  OAK: { latitude: 37.7214, longitude: -122.2208 },
  BUR: { latitude: 34.2005, longitude: -118.3587 },
  SNA: { latitude: 33.6762, longitude: -117.8674 },
  MKE: { latitude: 42.9472, longitude: -87.8966 },
  BUF: { latitude: 42.9403, longitude: -78.7322 },
  RSW: { latitude: 26.5361, longitude: -81.7552 },
  MSN: { latitude: 43.1399, longitude: -89.3375 },
  BDL: { latitude: 41.9389, longitude: -72.6861 },
  ORF: { latitude: 36.8946, longitude: -76.2010 },
  ABQ: { latitude: 35.0402, longitude: -106.6091 },
  JAX: { latitude: 30.4941, longitude: -81.6886 },
  GEG: { latitude: 47.6253, longitude: -117.5361 },
  BOI: { latitude: 43.5684, longitude: -116.2208 },
  OMA: { latitude: 41.3030, longitude: -95.8942 },
  TUS: { latitude: 32.1168, longitude: -110.9410 },
  DAY: { latitude: 39.9024, longitude: -84.2194 },
  ALB: { latitude: 42.7470, longitude: -73.8020 },
  BHM: { latitude: 33.5629, longitude: -86.7535 },
  RIC: { latitude: 37.5052, longitude: -77.3197 },
  SDF: { latitude: 38.1871, longitude: -85.7395 },
  MHT: { latitude: 42.9326, longitude: -71.4352 },
  PBI: { latitude: 26.6832, longitude: -80.0956 },
  ROC: { latitude: 43.1286, longitude: -77.6655 },
  SAV: { latitude: 32.1275, longitude: -81.2021 },
  BTV: { latitude: 44.4690, longitude: -73.1503 },
  GRR: { latitude: 42.8802, longitude: -85.5228 },
  HSV: { latitude: 34.6427, longitude: -86.7751 },
  OGG: { latitude: 20.8986, longitude: -156.4305 },
  ICT: { latitude: 37.6499, longitude: -97.4331 },
  CHS: { latitude: 32.8987, longitude: -80.0405 },
  PVD: { latitude: 41.7267, longitude: -71.4348 },
  CVG: { latitude: 39.0533, longitude: -84.6615 },
  LGB: { latitude: 33.8177, longitude: -118.1514 },
  GSO: { latitude: 36.1000, longitude: -79.9428 },
  AVL: { latitude: 35.4351, longitude: -82.5411 },
  TYS: { latitude: 35.8107, longitude: -83.9940 },
  MFE: { latitude: 26.1820, longitude: -98.2386 },
  CRP: { latitude: 27.7747, longitude: -97.5027 },
  ELP: { latitude: 31.7982, longitude: -106.3930 },
  XNA: { latitude: 36.2753, longitude: -94.3068 },
  PWM: { latitude: 43.6462, longitude: -70.3090 },
  MYR: { latitude: 33.6827, longitude: -78.9275 },
  GSP: { latitude: 34.8958, longitude: -82.2186 },
  TUL: { latitude: 36.1984, longitude: -95.8880 },
  BZN: { latitude: 45.7752, longitude: -111.1534 },
  DSM: { latitude: 41.5330, longitude: -93.6536 },
  LIT: { latitude: 34.7294, longitude: -92.2243 },
  JAN: { latitude: 32.3112, longitude: -90.0753 },
  GPT: { latitude: 30.4133, longitude: -89.0707 },
  FAT: { latitude: 36.7762, longitude: -119.7181 },
  BTR: { latitude: 30.5328, longitude: -91.1466 },
  MRY: { latitude: 36.5870, longitude: -121.8429 },
  TLH: { latitude: 30.3918, longitude: -84.3514 },
  ANC: { latitude: 61.1743, longitude: -149.9962 }
};
export function getRandomFlights() {
  // List of airports
  const airports = Object.keys(airportCoordinates);

  // Function to generate a random flight duration (in seconds)
  function generateFlightDuration() {
    return Math.floor(Math.random() * (7200 - 3600 + 2)) + 3600; // Random duration between 1 to 2 hours
  }

  // Generate JSON structures for 100 random flights
  const flights = [];
  let randomData = generateRandomData();
  for (let i = 0; i < 100; i++) {
    const origin = airports[Math.floor(Math.random() * airports.length)];
    let destination = airports[Math.floor(Math.random() * airports.length)];
    while (destination === origin) {
      destination = airports[Math.floor(Math.random() * airports.length)];
    }
    const duration = generateFlightDuration();
    const flight = {
      name: `${origin} to ${destination}`,
      data: randomData[i],
      metadata: `${randomData[i]}<br>Z3 t350 PPN p350<br>OSMOB h..m...<br>134.765<br>V<br>@h221@k260 @m.77@36`,
      points: [
        {
          time: 1674228873, // Assuming a fixed starting time for all flights
          latitude: airportCoordinates[origin].latitude,
          longitude: airportCoordinates[origin].longitude,
          altitudeFt: 31000,
        },
        {
          time: 1674228873 + duration, // Final time based on the duration
          latitude: airportCoordinates[destination].latitude,
          longitude: airportCoordinates[destination].longitude,
          altitudeFt: 0,
        },
      ],
    };
    flights.push(flight);
  }
  // Convert flights array to JSON string
  return JSON.stringify(flights, null, 2);
}

export function generateRandomData() {
  const dataLength = 100;
  let randomData = [];

  for (let i = 0; i < dataLength; i++) {
    // Generate a random number between 0 and 999
    const randomNumber = Math.floor(Math.random() * 1000);

    // Generate two random words of random lengths between 1 and 10 characters
    const word1 = generateRandomWord();
    const word2 = generateRandomWord();

    // Concatenate the number and words with '\n' separator
    const entry = `${randomNumber}\n${word1}\n${word2}`;

    randomData.push(entry);
  }
  return randomData;
}

// Function to generate a random word of random length between 1 and 10 characters
function generateRandomWord() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const wordLength = Math.floor(Math.random() * 10) + 1;
  let word = "";
  for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    word += characters[randomIndex];
  }
  return word;
}
