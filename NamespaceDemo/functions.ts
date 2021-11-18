/* eslint-disable no-redeclare */

import Category from './enums';
import {  BookOrUndefined, BookProperties, Unpromisify } from './types';
import { default as RefBook } from '../src/classes/encyclopedia';
import { Book, CallBack, LibMgrCallback } from './intefaces';


export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Books count=${books.length}`);
    console.log(`First book is ${books.find(book => book.available)?.title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}

export function logBookTitles(bookTitles: string[]): void {
    bookTitles.forEach(bookTitle => console.log(bookTitle));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const specialBook = getAllBooks()[index];

    const { title, author } = specialBook;
    return [title, author];
}

export function calcTotalPages(): bigint {
    const libs = <const>[{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    return libs
        .reduce((acc: bigint, obj) => acc + BigInt(obj.avgPagesPerBook) * BigInt(obj.books), BigInt(0));


}


export function createCustomerID(name: string, id: number): string {
    return `Name=${name}, id=${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`name=${name}`);
    if (age) {
        console.log(`age=${age}`);
    }
    if (city) {
        console.log(`city=${city}`);
    }
}

export function getBookByID(bookId: number): BookOrUndefined {
    return getAllBooks()
        .find(book => book.id === bookId);

}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer=${customer}`);

    const titles = bookIDs
        .map(bookId => getBookByID(bookId))
        .filter(book => book.available)
        .map(book => book.title);
    return titles;
}

export function getTitles(id: number, available: boolean): string[];
export function getTitles(available: boolean): string[];
export function getTitles(author: string): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books
                .filter(book => book.author === arg)
                .map(book => book.author);
        } else if (typeof arg === 'boolean') {
            return books
                .filter(book => book.available === arg)
                .map(book => book.author);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books
                .filter(book => book.available === available && book.id === id)
                .map(book => book.author);
        }
    }
}

export function assertStringValue(param: any): asserts param is string {

    if (typeof param !== 'string') {
        throw Error('value should have been a string');
    }

}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();

}


export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, propName: TKey): TObject[TKey] | string {
    const specialProperty = obj[propName];

    if (typeof specialProperty === 'function') {
        return specialProperty['name'];
    }
    return specialProperty;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}
export function  purge<T>(inventory: T[]): T[]{
    return inventory.slice(2);
}

// export function getBooksByCategory(category: Category, callback: LibMgrCallback): void{
export function getBooksByCategory(category: Category, callback: CallBack<string[]>): void{
    setTimeout(()=>{
        try{
            const titles = getBookTitlesByCategory(category);
            if(titles.length >0){
                callback(null, titles);
            }else{
                throw new Error('No books found');
            }

        }catch(err){
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void{
    if(err){
        console.log(err.message);
    }else{
        console.log(titles);
    }

}

export function getBooksByCategoryPromise(category: Category): Promise<string[]>{
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(()=>{
            const titles = getBookTitlesByCategory(category);
            if(titles.length >0){
                resolve(titles);
            }else{
                reject('No books found');
            }

        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<void>{
    // to get expected type
    // const titles: Unpromisify<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
    const titles = await getBooksByCategoryPromise(category);
    const titles2 = await getBooksByCategoryPromise(category);

    const titles3 = await Promise.all([getBooksByCategoryPromise(category), getBooksByCategoryPromise(category)]);

    console.log(titles, titles2);

};