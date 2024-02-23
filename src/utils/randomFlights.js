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
};
export function getRandomFlights() {
  // List of airports in Europe or North Africa
  const airports = Object.keys(airportCoordinates);

  // Function to generate a random flight duration (in seconds)
  function generateFlightDuration() {
    return Math.floor(Math.random() * (7200 - 3600 + 1)) + 3600; // Random duration between 1 to 2 hours
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
          time: 1674226873, // Assuming a fixed starting time for all flights
          latitude: airportCoordinates[origin].latitude,
          longitude: airportCoordinates[origin].longitude,
          altitudeFt: 31000,
        },
        {
          time: 1674226873 + duration, // Final time based on the duration
          latitude: airportCoordinates[destination].latitude,
          longitude: airportCoordinates[destination].longitude,
          altitudeFt: 0,
        },
      ],
    };
    flights.push(flight);
  }
  // Convert flights array to JSON string with indentation for readability
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
