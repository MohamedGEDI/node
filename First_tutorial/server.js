const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write('Hello World\n');
  if (req.url === '/about') {
    res.write('This is the about page\n');
  }
  if (req.url === '/contact') {
    res.write('This is the contact page\n');
  }
  res.end();
});
server.listen(5000);