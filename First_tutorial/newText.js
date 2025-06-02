const fs = require('fs');
const path = require('path');

const newText = fs.writeFileSync(path.resolve(__dirname, 'contents', 'result.txt'), 'This is a second text', { flag: 'a' });
exports.newText = newText;
