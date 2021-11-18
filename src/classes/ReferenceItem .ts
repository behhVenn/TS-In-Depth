/* eslint-disable no-underscore-dangle */
import {timeout} from './decorators';

abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number,) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    _publisher: string;
    #id: number;
    static department: string = 'qwe';
    abstract printCitation(): void;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number, id: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
        this.#id = id;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}, department=${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }
}

export { ReferenceItem as RefItem };

// function timeout(arg0: number) {
//     throw new Error("Function not implemented.");
// }
