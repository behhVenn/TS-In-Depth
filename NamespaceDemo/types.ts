import Category from './enums';
import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './intefaces';

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;


// export type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;
// export type СreateCustomerFunctionType  = (name: string, age?: number, city?: string) => void;
export type СreateCustomerFunctionType  = typeof createCustomer;

export type fn = (param1: string, param2: number, param3: boolean ) => symbol;
export type p1<T> = T extends (param1: infer R , param2: number, param3: boolean ) => symbol ? R: never;
export type p2<T> = T extends (param1:  string, param2: infer R, param3: boolean ) => symbol ? R: never;
export type p3<T> = T extends (param1: string , param2: number, param3: infer R ) => symbol ? R: never;

type P1 = p1<fn>;
type P2 = p2<fn>;
type P3 = p3<fn>;


export type Unpromisify<T> = T extends Promise<infer R>? R: never;
//export type FT = typeof getBooksByCategoryPromise;
export type FT = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;