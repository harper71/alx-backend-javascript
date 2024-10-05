/* eslint-disable no-underscore-dangle */
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' && code !== 'string') {
      throw new TypeError('name and string must be a string');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
