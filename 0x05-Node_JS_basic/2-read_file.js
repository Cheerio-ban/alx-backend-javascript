const { readFileSync } = require('fs');

const countStudents = (filepath) => {
  try {
    let data = readFileSync(filepath, 'utf-8');

    data = data.split('\n');
    const newarr = [];
    for (const elem of data) {
      newarr.push(elem.split(','));
    }

    const newhash = {};

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
    console.log(`Number of students: ${students}`);
    for (const [k, v] of Object.entries(newhash)) {
      if (k !== 'field') {
        if (k.trim() !== '') {
          let arrstr = v.toString();
          arrstr = arrstr.split(',');
          console.log(`Number of students in ${k}: ${v.length}. List: ${arrstr.join(', ')}`);
        }
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  }
};

module.exports = countStudents;
