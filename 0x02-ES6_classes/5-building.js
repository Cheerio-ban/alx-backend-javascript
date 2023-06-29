export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft; // eslint-disable-line
  }

  get sqft() {
    return this._sqft; // eslint-disable-line
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value; // eslint-disable-line
  }

  evacuationWarningMessage() { // eslint-disable-line
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
