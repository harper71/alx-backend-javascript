/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof sqft !== 'number' && floors !== 'number') {
      throw new TypeError('sqft and floors must be a number');
    }

    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
