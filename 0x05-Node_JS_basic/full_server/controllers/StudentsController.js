import readDatabase from '../utils';

const DBFile = (process.argv.length > 2) ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(DBFile).then((data) => {
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const [key, val] of Object.entries(data)) {
        response.write(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
        if (key === 'CS') {
          response.write('\n');
        }
      }
      response.end();
    }).catch((err) => {
      response.statusCode = 500;
      response.end(err.message);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.param('major');
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
    readDatabase(DBFile).then((data) => {
      response.statusCode = 200;
      response.end(`List: ${data[major].join(', ')}`);
    }).catch((err) => {
      response.statusCode = 500;
      response.end(err.message);
    });
  }
}
module.exports = StudentsController;
