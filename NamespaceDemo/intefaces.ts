import Category from './enums';
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (param: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;

}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine{
    title;
    publisher;
}

interface ShelfItem{
    title;
}

interface LibMgrCallback{
    (err: Error, titles: string[]): void;
}

interface CallBack<T>{
    (err: Error, data: T): void;

}

export { Book, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem, LibMgrCallback, CallBack };
