const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/pages/locations/[city].astro');
let content = fs.readFileSync(file, 'utf8');

const citiesToAdd = [
  { name: 'akron', display: 'Akron, OH', phone: '888-555-0100' },
  { name: 'dayton', display: 'Dayton, OH', phone: '888-555-0100' },
  { name: 'canton', display: 'Canton, OH', phone: '888-555-0100' },
  { name: 'lansing', display: 'Lansing, MI', phone: '888-555-0100' },
  { name: 'ann-arbor', display: 'Ann Arbor, MI', phone: '888-555-0100' },
  { name: 'kalamazoo', display: 'Kalamazoo, MI', phone: '888-555-0100' },
  { name: 'flint', display: 'Flint, MI', phone: '888-555-0100' },
  { name: 'evansville', display: 'Evansville, IN', phone: '888-555-0100' },
  { name: 'bloomington-in', display: 'Bloomington, IN', phone: '888-555-0100' },
  { name: 'lafayette-in', display: 'Lafayette, IN', phone: '888-555-0100' },
  { name: 'champaign', display: 'Champaign, IL', phone: '888-555-0100' },
  { name: 'springfield-il', display: 'Springfield, IL', phone: '888-555-0100' },
  { name: 'decatur-il', display: 'Decatur, IL', phone: '888-555-0100' },
  { name: 'davenport', display: 'Davenport, IA', phone: '888-555-0100' },
  { name: 'cedar-rapids', display: 'Cedar Rapids, IA', phone: '888-555-0100' },
  { name: 'iowa-city', display: 'Iowa City, IA', phone: '888-555-0100' },
  { name: 'waterloo-ia', display: 'Waterloo, IA', phone: '888-555-0100' },
  { name: 'rochester-mn', display: 'Rochester, MN', phone: '888-555-0100' },
  { name: 'duluth', display: 'Duluth, MN', phone: '888-555-0100' },
  { name: 'st-cloud', display: 'St. Cloud, MN', phone: '888-555-0100' },
  { name: 'mankato', display: 'Mankato, MN', phone: '888-555-0100' },
  { name: 'eau-claire', display: 'Eau Claire, WI', phone: '888-555-0100' },
  { name: 'la-crosse', display: 'La Crosse, WI', phone: '888-555-0100' },
  { name: 'appleton', display: 'Appleton, WI', phone: '888-555-0100' },
  { name: 'oshkosh', display: 'Oshkosh, WI', phone: '888-555-0100' }
];

let match = content.match(/const cities = \[\s*([\s\S]*?)\s*\];/);
if (match) {
  let existingCities = match[1];
  let newCitiesStr = citiesToAdd.map(c => `    {\n        "name": "${c.name}",\n        "display": "${c.display}",\n        "phone": "${c.phone}"\n    }`).join(',\n');
  let replaced = content.replace(match[0], `const cities = [\n${existingCities},\n${newCitiesStr}\n  ];`);
  fs.writeFileSync(file, replaced, 'utf8');
  console.log('Cities injected.');
}
