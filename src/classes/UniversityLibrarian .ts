import * as Interfaces from '../../NamespaceDemo/intefaces';
import { format, logger, logMethod, logParameter, sealed, writable } from './decorators';

//@sealed('UniversityLibrarian')
//@logger
export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    @format() name: string;
    email: string;

    constructor(){
        console.log('test');
    }

    //the reason of work without error in case of usage assistCustomer without parameters(when related interface has signature with parameter):
    //https://stackoverflow.com/questions/51727721/typescript-interface-implementing-doesnt-check-method-parameters
    //@logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    //@writable(true)
    assistFaculty(){
        console.log('Assisting faculty');
    }

    //@writable(true)
    teachCommunity(){
        console.log('Teaching community');
    }

}
