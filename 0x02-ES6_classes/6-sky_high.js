import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors; // eslint-disable-line
    }

    get floors() {
        return this._floors; // eslint-disable-line
    }

    evacuationWarningMessage() {
        return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
    }
}
