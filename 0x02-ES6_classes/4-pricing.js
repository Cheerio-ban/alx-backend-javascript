import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount; // eslint-disable-line
    this._currency = currency; // eslint-disable-line
  }

  get amount() {
    return this._amount; // eslint-disable-line
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value; // eslint-disable-line
  }

  get currency() {
    return this._currency; // eslint-disable-line
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = value; // eslint-disable-line
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`; // eslint-disable-line
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
