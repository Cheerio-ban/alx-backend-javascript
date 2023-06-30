export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // eslint-disable-line
    this._motor = motor; // eslint-disable-line
    this._color = color; // eslint-disable-line
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
