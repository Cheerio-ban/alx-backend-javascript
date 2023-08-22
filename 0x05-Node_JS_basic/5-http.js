const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  url = req.url;
  
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.end('This is the list of our students');
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
