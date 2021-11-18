import { Library, RefItem, UL, Shelf  } from './classes';
import Category from '../NamespaceDemo/enums';
import { showHello, createCustomerID, getBookByID, getTitles, printRefBook, getAllBooks, logFirstAvailable, purge, getProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from '../NamespaceDemo/functions';
import { Author, Book, Librarian, Logger, Magazine } from '../NamespaceDemo/intefaces';
import { BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType } from '../NamespaceDemo/types';
import { default as RefBook } from './classes/encyclopedia';
import { Linter } from 'eslint';



showHello('greeting', 'TypeScript');

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// type Book = {
//     id: number,
//     title: string,
//     author: string,
//     available: boolean,
//     category: Category
// }

// interface Book {
//     id: number,
//     title: string,
//     author: string,
//     available: boolean,
//     category: Category,
//     pages?: number,
//     markDamaged?: DamageLogger
// }

// function getAllBooks(): readonly Book[] {
//     const books: readonly Book[] = <const>[
//         { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
//         { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
//         { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
//         { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
//     ];

//     return books;
// }

// function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
//     console.log(`Books count=${books.length}`);
//     console.log(`First book is ${books.find(book => book.available)?.title}`);
// }
// enum Category {
//     JavaScript,
//     CSS,
//     HTML,
//     TypeScript,
//     Angular
// }

// logFirstAvailable(getAllBooks());
// logFirstAvailable();

// function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
//     return getAllBooks()
//         .filter(book => book.category === category)
//         .map(book => book.title);
// }

// console.log(getBookTitlesByCategory());

// function logBookTitles(bookTitles: string[]): void {
//     bookTitles.forEach(bookTitle => console.log(bookTitle));
// }

// logBookTitles(getBookTitlesByCategory(Category.CSS));



// function getBookAuthorByIndex(index: number): [title: string, author: string] {
//     const specialBook = getAllBooks()[index];

//     const { title, author } = specialBook;
//     return [title, author];
// }

// console.log(getBookAuthorByIndex(0));

// function calcTotalPages(): bigint {
//     const libs = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

//     return libs
//         .reduce((acc: bigint, obj) => acc + BigInt(obj.avgPagesPerBook) * BigInt(obj.books), BigInt(0));

// }

// 0202

// console.log(calcTotalPages());


// function createCustomerID(name: string, id: number): string {
//     return `Name=${name}, id=${id}`;
// }

let myId = createCustomerID('Ann', 10);

// console.log(myId);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `Name=${name}, id=${id}`;
idGenerator = createCustomerID;
// console.log(idGenerator('Asd', 11));

// 0302
// function createCustomer(name: string, age?: number, city?: string): void {
//     console.log(`name=${name}`);
//     if (age) {
//         console.log(`age=${age}`);
//     }
//     if (city) {
//         console.log(`city=${city}`);
//     }
// }

// createCustomer('Name');
// createCustomer('Name', 10);
// createCustomer('Name', 10, 'City');


// function getBookByID(bookId: number): BookOrUndefined {
//     return getAllBooks()
//         .find(book => book.id === bookId);

// }

getBookByID(1);

// function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
//     console.log(`Customer=${customer}`);

//     const titles = bookIDs
//         .map(bookId => getBookByID(bookId))
//         .filter(book => book.available)
//         .map(book => book.title);
//     return titles;
// }

// const titles = сheckoutBooks('QWE', 1, 2, 3, 4);

// titles.forEach(title => console.log(title));


// 03.03
// function getTitles(id: number, available: boolean): string[];
// function getTitles(available: boolean): string[];
// function getTitles(author: string): string[];
// function getTitles(...args: any[]): string[] {
//     const books = getAllBooks();

//     if (args.length === 1) {
//         const [arg] = args;
//         if (typeof arg === 'string') {
//             return books
//                 .filter(book => book.author === arg)
//                 .map(book => book.author);
//         } else if (typeof arg === 'boolean') {
//             return books
//                 .filter(book => book.available === arg)
//                 .map(book => book.author);
//         }
//     } else if (args.length === 2) {
//         const [id, available] = args;
//         if (typeof id === 'number' && typeof available === 'boolean') {
//             return books
//                 .filter(book => book.available === available && book.id === id)
//                 .map(book => book.author);
//         }
//     }
// }

let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);


// 03.04
// function assertStringValue(param: any): asserts param is string {

//     if (typeof param !== 'string') {
//         throw Error('value should have been a string');
//     }

// }

// function bookTitleTransform(title: any): string {
//     assertStringValue(title);
//     return [...title].reverse().join('');
// }

// let modifiedTitle = bookTitleTransform('bookTitle');
// console.log(modifiedTitle);
// modifiedTitle = bookTitleTransform(123);
// console.log(modifiedTitle);


// 04.01
// function printBook(book: Book) {
//     console.log(`${book.title} by ${book.author}`);
// }

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// 04.02
// interface DamageLogger {
//     (param: string): void;
// }

// (reason: string) => void

let logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);

// logDamage('missing back cover');


// 04.03
// interface Person {
//     name: string;
//     email: string;
// }

// interface Author extends Person {
//     numBooksPublished: number;

// }

// interface Librarian extends Person {
//     department: string;
//     assistCustomer: (custName: string) => void;
// }

let favoriteAuthor: Author = {
    name: 'Anna',
    email: 'asd@asd.com',
    numBooksPublished: 1
};

// let favoriteLibrarian: Librarian = {
//     name: 'lib',
//     email: 'asd@asd.com',
//     department: 'dep',
//     assistCustomer: null
// }

// let favoriteLibrarian: Librarian = {
//     name: 'lib',
//     email: 'asd@asd.com',
//     department: 'dep',
//     assistCustomer: null
// }



// 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer.book?.getTitle?.());
// console.log(offer.book?.authors?.[0]);


// 04.05

// type BookProperties = keyof Book;

// console.log(BookProperies);

// function getProperty(book: Book, propName: BookProperties): any {
//     const specialProperty = book[propName];

//     if (typeof specialProperty === 'function') {
//         return specialProperty['name'];
//     }
//     return specialProperty;
// }

// getProperty(myBook, 'title');
// getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'isbn');



// 05.01
// abstract class ReferenceItem {
//     // title: string;
//     // year: number;
//     // constructor(newTitle: string, newYear: number,) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     _publisher: string;
//     #id: number;
//     static department: string = 'qwe';
//     abstract printCitation(): void;

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     constructor(public title: string, protected year: number, id: number) {
//         console.log('Creating a new ReferenceItem...');
//         this.title = title;
//         this.year = year;
//         this.#id = id;
//     }

//     printItem() {
//         console.log(`${this.title} was published in ${this.year}, department=${ReferenceItem.department}`);
//     }

//     getID(): number {
//         return this.#id;
//     }
// }

// let ref: RefItem = new RefIte('Typescript', 2021, 123);
// console.log(ref);
// ref.printItem();

// ref.publisher = 'publisher';

// console.log(ref);
// console.log(ref.getID());


// 05.02

// class Encyclopedia extends ReferenceItem {
//     constructor(title: string, year: number, id: number, public edition: number) {
//         super(title, year, id);
//         edition = edition;
//     }

//     printItem() {
//         super.printItem();
//         console.log(`Edition: edition (${this.year})`);
//     }

//     printCitation() {
//         console.log(`${this.title} – ${this.year}`);
//     }

// }

let refBook = new RefBook('title', 1900, 123, 2);

// printRefBook(refBook);

// refBook.printItem();

// 05.03
// refBook.printCitation();

// 05.04
// class UniversityLibrarian implements Librarian {
//     department: string;
//     name: string;
//     email: string;

//     //!!!!
//     assistCustomer(): void {
//         console.log(`${this.name}`);// is assisting ${void}`);
//     }

// }


let favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'qwe';
favoriteLibrarian.assistCustomer('asd');

// 05.05
// type PersonBook = Person & Book;
let personBook: PersonBook = {
    name: 'name',
    email: 'email',
    title: 'title',
    author: 'author',
    available: true,
    category: Category.HTML,
    id: 1
};

// console.log(personBook);


// type BookOrUndefined = Book | undefined;

// 06.03
// printRefBook(refBook);
const univLibr = new UL.UniversityLibrarian();
// printRefBook(univLibr);


// 06.05
// const flag = true;
// if (flag) {
//     const modules = await import('./classes');
//     const reader = new modules.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }

// 06.06
// const library: Library = {address : 'address', id: 123, name : 'name'};
// console.log(library);

// // 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge<Book>(inventory));

// const numbers = [1,2,3,4,5];
// console.log(purge(numbers));


// 07.02
const bookShelf  = new Shelf<Book>();
inventory.forEach(inv => bookShelf.add(inv));
// console.log(bookShelf.getFirst());

const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf  = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());
magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// 07.03

// console.log(getProperty(getAllBooks()[0], 'title'));

// 07.04
const bookRequiredFields: BookRequiredFields = {
    author: 'author',
    available: false,
    category: Category.CSS,
    id: 1,
    title: 'asd',
    markDamaged: null,
    pages: 100
};

const updatedBook: UpdatedBook = {};

// const params: Parameters<СreateCustomerFunctionType>;
// const params: Parameters <typeof createCustomer> = ['Anna', 10, 'city'];
// createCustomer(...params);

// 07.05

// 08.01
// const ul = new UL.UniversityLibrarian();
// console.log(ul) ;
// UL.UniversityLibrarian['a'] = 'qwe';
// ul.assistCustomer = function(){};
// const pr  = Object.getPrototypeOf(ul);
// pr.assistCustomer2 = function(){};


// 08.02
// const ul = new UL.UniversityLibrarian();
// console.log(ul) ;
// ul.name = 'Anna';
// ul['printLibrarian']();
// console.log(ul);

// 08.03
// const ul = new UL.UniversityLibrarian();
// ul.assistFaculty = null;
// ul.teachCommunity = null;

// 08.04
// const encyclopedia = new RefBook('title', 1900, 123, 2);
// encyclopedia.printItem();

// 08.05
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul.assistCustomer('Boris');
// console.log(ul);

// !!!!! 08.06
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// console.log(ul.name);
// console.log(ul);


// 08.07
// const enciclopedia =  new RefBook('title', 1900, 123, 2);
// enciclopedia.copies = 10;
// console.log(enciclopedia);

// 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// 09.01
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles=>{
//         console.log(titles);
//         return titles.length;
//     })
//     .then(len=> {
//         console.log(len);
//         return Promise.resolve(len);
//     })
//     .then(len => console.log(3))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles=>console.log(titles))
//     .catch(err => console.log(err));
// console.log('End');

// 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
   // .catch(err => console.log(err));
console.log('End');