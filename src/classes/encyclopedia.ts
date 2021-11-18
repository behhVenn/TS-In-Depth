/* eslint-disable no-underscore-dangle */
import { RefItem } from '.';
import { positiveInteger } from './decorators';

export default class Encyclopedia extends RefItem {
    private _copies: number;

    get copies(): number{
        return this._copies;
    }

    @positiveInteger
    set copies(value: number){
        this._copies = value;
    }
    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
        edition = edition;
    }

    printItem() {
        super.printItem();
        console.log(`Edition: edition (${this.year})`);
    }

    printCitation() {
        console.log(`${this.title} – ${this.year}`);
    }

}