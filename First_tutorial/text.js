const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname, 'contents', 'result.txt');

const text = fs.readFileSync(filepath, 'utf8');
exports.text = text;
