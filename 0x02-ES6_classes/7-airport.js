export default class Airport {
  constructor(name, code) {
    this._name = name; // eslint-disable-line
    this._code = code; // eslint-disable-line
  }

  toString() {
    return `[object ${this._code}]`; // eslint-disable-line
  }
}
