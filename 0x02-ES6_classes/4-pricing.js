/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions, no-unused-vars
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // methods
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static covertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && conversionRate !== 'number') {
      throw new TypeError('Both amount and the convertion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
