const http = require('http');
const { readFile } = require('fs');

const printStudents = (dataa) => {
  const data = dataa.split('\n');
  const newarr = [];
  for (const elem of data) {
    newarr.push(elem.split(','));
  }

  const newhash = {};
  let output = '';
  for (const elem of newarr) {
    const len = elem.length - 1;
    if (elem[len] in newhash) {
      newhash[elem[len]].push(elem[0]);
    } else {
      newhash[elem[len]] = [elem[0]];
    }
  }
  let students = 0;
  for (const [k, v] of Object.entries(newhash)) {
    if (k !== 'field') {
      if (k.trim() !== '') {
        students += v.length;
      }
    }
  }
  output += `Number of students: ${students}\n`;
  for (const [k, v] of Object.entries(newhash)) {
    if (k !== 'field') {
      if (k.trim() !== '') {
        let arrstr = v.toString();
        arrstr = arrstr.split(',');
        output += `Number of students in ${k}: ${v.length}. List: ${arrstr.join(', ')}\n`;
      }
    }
  }
  return output;
};

const countStudents = (filename) => new Promise((resolve, reject) => {
  readFile(filename, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(printStudents(data));
    }
  });
});

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
      const newString = String(data);
      res.end(newString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
