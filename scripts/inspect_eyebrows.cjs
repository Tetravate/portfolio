const fs = require('fs');
const main = fs.readFileSync('src/main.js', 'utf8');
const homeCode = main.slice(main.indexOf('function renderHomePage'), main.indexOf('function renderWorkPage'));
const regex = /<div class="eyebrow">([^<]*)<\/div>/g;
let match;
while ((match = regex.exec(homeCode)) !== null) {
  console.log('Homepage eyebrow:', match[1]);
}
