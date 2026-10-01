const fs = require('node:fs');

try {
  const content = 'this is written synchronously.';
  fs.writeFileSync('output.txt', content, 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error(err);
}
