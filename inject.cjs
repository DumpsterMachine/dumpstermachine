const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/locations/[city].astro');
let content = fs.readFileSync(file, 'utf8');

const citiesToAdd = [
  { name: 'seattle', display: 'Seattle, WA', phone: '888-555-0100' },
  { name: 'portland-or', display: 'Portland, OR', phone: '888-555-0100' },
  { name: 'san-jose', display: 'San Jose, CA', phone: '888-555-0100' },
  { name: 'san-francisco', display: 'San Francisco, CA', phone: '888-555-0100' },
  { name: 'fresno', display: 'Fresno, CA', phone: '888-555-0100' },
  { name: 'bakersfield', display: 'Bakersfield, CA', phone: '888-555-0100' },
  { name: 'reno', display: 'Reno, NV', phone: '888-555-0100' },
  { name: 'boise', display: 'Boise, ID', phone: '888-555-0100' },
  { name: 'spokane', display: 'Spokane, WA', phone: '888-555-0100' },
  { name: 'anchorage', display: 'Anchorage, AK', phone: '888-555-0100' },
  { name: 'honolulu', display: 'Honolulu, HI', phone: '888-555-0100' },
  { name: 'billings', display: 'Billings, MT', phone: '888-555-0100' },
  { name: 'cheyenne', display: 'Cheyenne, WY', phone: '888-555-0100' },
  { name: 'fargo', display: 'Fargo, ND', phone: '888-555-0100' },
  { name: 'sioux-falls', display: 'Sioux Falls, SD', phone: '888-555-0100' },
  { name: 'lincoln', display: 'Lincoln, NE', phone: '888-555-0100' },
  { name: 'wichita', display: 'Wichita, KS', phone: '888-555-0100' },
  { name: 'norman', display: 'Norman, OK', phone: '888-555-0100' },
  { name: 'lawton', display: 'Lawton, OK', phone: '888-555-0100' },
  { name: 'springfield-mo', display: 'Springfield, MO', phone: '888-555-0100' },
  { name: 'columbia-mo', display: 'Columbia, MO', phone: '888-555-0100' },
  { name: 'peoria', display: 'Peoria, IL', phone: '888-555-0100' },
  { name: 'rockford', display: 'Rockford, IL', phone: '888-555-0100' },
  { name: 'gary', display: 'Gary, IN', phone: '888-555-0100' },
  { name: 'south-bend', display: 'South Bend, IN', phone: '888-555-0100' }
];

let match = content.match(/const cities = \[\s*([\s\S]*?)\s*\];/);
if (match) {
  let existingCities = match[1];
  let newCitiesStr = citiesToAdd.map(c => `    {\n        "name": "${c.name}",\n        "display": "${c.display}",\n        "phone": "${c.phone}"\n    }`).join(',\n');
  let replaced = content.replace(match[0], `const cities = [\n${existingCities},\n${newCitiesStr}\n  ];`);
  fs.writeFileSync(file, replaced, 'utf8');
  console.log('Cities injected.');
}
