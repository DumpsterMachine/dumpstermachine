const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/locations/[city].astro');
let content = fs.readFileSync(file, 'utf8');

const citiesToAdd = [
  { name: 'boulder', display: 'Boulder, CO', phone: '888-555-0100' },
  { name: 'fort-collins', display: 'Fort Collins, CO', phone: '888-555-0100' },
  { name: 'pueblo', display: 'Pueblo, CO', phone: '888-555-0100' },
  { name: 'greeley', display: 'Greeley, CO', phone: '888-555-0100' },
  { name: 'grand-junction', display: 'Grand Junction, CO', phone: '888-555-0100' },
  { name: 'santa-fe', display: 'Santa Fe, NM', phone: '888-555-0100' },
  { name: 'las-cruces', display: 'Las Cruces, NM', phone: '888-555-0100' },
  { name: 'roswell', display: 'Roswell, NM', phone: '888-555-0100' },
  { name: 'farmington', display: 'Farmington, NM', phone: '888-555-0100' },
  { name: 'flagstaff', display: 'Flagstaff, AZ', phone: '888-555-0100' },
  { name: 'prescott', display: 'Prescott, AZ', phone: '888-555-0100' },
  { name: 'sedona', display: 'Sedona, AZ', phone: '888-555-0100' },
  { name: 'yuma', display: 'Yuma, AZ', phone: '888-555-0100' },
  { name: 'logan', display: 'Logan, UT', phone: '888-555-0100' },
  { name: 'st-george', display: 'St. George, UT', phone: '888-555-0100' },
  { name: 'ogden', display: 'Ogden, UT', phone: '888-555-0100' },
  { name: 'provo', display: 'Provo, UT', phone: '888-555-0100' },
  { name: 'idaho-falls', display: 'Idaho Falls, ID', phone: '888-555-0100' },
  { name: 'pocatello', display: 'Pocatello, ID', phone: '888-555-0100' },
  { name: 'twin-falls', display: 'Twin Falls, ID', phone: '888-555-0100' },
  { name: 'missoula', display: 'Missoula, MT', phone: '888-555-0100' },
  { name: 'bozeman', display: 'Bozeman, MT', phone: '888-555-0100' },
  { name: 'great-falls', display: 'Great Falls, MT', phone: '888-555-0100' },
  { name: 'casper', display: 'Casper, WY', phone: '888-555-0100' },
  { name: 'laramie', display: 'Laramie, WY', phone: '888-555-0100' }
];

let match = content.match(/const cities = \[\s*([\s\S]*?)\s*\];/);
if (match) {
  let existingCities = match[1];
  let newCitiesStr = citiesToAdd.map(c => `    {\n        "name": "${c.name}",\n        "display": "${c.display}",\n        "phone": "${c.phone}"\n    }`).join(',\n');
  let replaced = content.replace(match[0], `const cities = [\n${existingCities},\n${newCitiesStr}\n  ];`);
  fs.writeFileSync(file, replaced, 'utf8');
  console.log('Cities injected.');
}
