const fs = require('fs');
const css = fs.readFileSync('src/style.css', 'utf8');

const regex = /@media[^{]*\{[\s\S]*?\n\}/g;
let m;
const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('.section ') || l.trim() === '.section {' || l.includes('padding: 4.25rem') || l.includes('.section-secondary')) {
    console.log((idx + 1) + ': ' + l);
  }
});
