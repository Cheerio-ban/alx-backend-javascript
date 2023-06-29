export default class Currency {
  constructor(code, name) {
    this._code = code; // eslint-disable-line
    this._name = name; // eslint-disable-line
  }

  get code() {
    return this._code; // eslint-disable-line
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value; // eslint-disable-line
  }

  get name() {
    return this._name; // eslint-disable-line
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value; // eslint-disable-line
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // eslint-disable-line
  }
}
