export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name; // eslint-disable-line
    this._length = length; // eslint-disable-line
    this._students = students; // eslint-disable-line
  }

  get name() {
    return this._name; // eslint-disable-line
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name; // eslint-disable-line
  }

  get length() {
    return this._length; // eslint-disable-line
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length; // eslint-disable-line
  }

  get students() {
    return this._students; // eslint-disable-line
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw new TypeError('students must be array of strings');
    }
    for (const val of students) {
      if (typeof val !== 'string') {
        throw new TypeError('students must be array of strings');
      }
    }
    this._students = students; // eslint-disable-line
  }
}
