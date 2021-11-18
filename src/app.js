/* eslint-disable no-redeclare */
let __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
showHello('greeting', 'TypeScript');
function showHello(divName, name) {
    let elt = document.getElementById(divName);
    elt.innerText = 'Hello from ' + name;
}
function getAllBooks() {
    let books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}
function logFirstAvailable(books) {
    let _a;
    if (books === void 0) {
        books = getAllBooks();
    }
    console.log('Books count=' + books.length);
    console.log('First book is ' + ((_a = books.find(function (book) {
        return book.available;
    })) === null || _a === void 0 ? void 0 : _a.title));
}
let Category;
(function (Category) {
    Category[Category['JavaScript'] = 0] = 'JavaScript';
    Category[Category['CSS'] = 1] = 'CSS';
    Category[Category['HTML'] = 2] = 'HTML';
    Category[Category['TypeScript'] = 3] = 'TypeScript';
    Category[Category['Angular'] = 4] = 'Angular';
})(Category || (Category = {}));
// logFirstAvailable(getAllBooks());
// logFirstAvailable();
function getBookTitlesByCategory(category) {
    if (category === void 0) {
        category = Category.JavaScript;
    }
    return getAllBooks()
        .filter(function (book) {
            return book.category === category;
        })
        .map(function (book) {
            return book.title;
        });
}
// console.log(getBookTitlesByCategory());
function logBookTitles(bookTitles) {
    bookTitles.forEach(function (bookTitle) {
        return console.log(bookTitle);
    });
}
// logBookTitles(getBookTitlesByCategory(Category.CSS));
function getBookAuthorByIndex(index) {
    let specialBook = getAllBooks()[index];
    let title = specialBook.title, author = specialBook.author;
    return [title, author];
}
// console.log(getBookAuthorByIndex(0));
function calcTotalPages() {
    let libs = [{ lib: 'libName1', books: 1000000000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5000000000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3000000000, avgPagesPerBook: 280 }];
    return libs
        .reduce(function (acc, obj) {
            return acc + BigInt(obj.avgPagesPerBook) * BigInt(obj.books);
        }, BigInt(0));
}
// 0202
// console.log(calcTotalPages());
function createCustomerID(name, id) {
    return 'Name=' + name + ', id=' + id;
}
let myId = createCustomerID('Ann', 10);
// console.log(myId);
let idGenerator;
idGenerator = function (name, id) {
    return 'Name=' + name + ', id=' + id;
};
idGenerator = createCustomerID;
// console.log(idGenerator('Asd', 11));
// 0302
function createCustomer(name, age, city) {
    console.log('name=' + name);
    if (age) {
        console.log('age=' + age);
    }
    if (city) {
        console.log('city=' + city);
    }
}
// createCustomer('Name');
// createCustomer('Name', 10);
// createCustomer('Name', 10, 'City');
function getBookByID(bookId) {
    return getAllBooks()
        .find(function (book) {
            return book.id === bookId;
        });
}
getBookByID(1);
function сheckoutBooks(customer) {
    let bookIDs = [];
    for (let _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Customer=' + customer);
    let titles = bookIDs
        .map(function (bookId) {
            return getBookByID(bookId);
        })
        .filter(function (book) {
            return book.available;
        })
        .map(function (book) {
            return book.title;
        });
    return titles;
}
function getTitles() {
    let args = [];
    for (let _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    let books = getAllBooks();
    if (args.length === 1) {
        let arg_1 = args[0];
        if (typeof arg_1 === 'string') {
            return books
                .filter(function (book) {
                    return book.author === arg_1;
                })
                .map(function (book) {
                    return book.author;
                });
        } else if (typeof arg_1 === 'boolean') {
            return books
                .filter(function (book) {
                    return book.available === arg_1;
                })
                .map(function (book) {
                    return book.author;
                });
        }
    } else if (args.length === 2) {
        let id_1 = args[0], available_1 = args[1];
        if (typeof id_1 === 'number' && typeof available_1 === 'boolean') {
            return books
                .filter(function (book) {
                    return book.available === available_1 && book.id === id_1;
                })
                .map(function (book) {
                    return book.author;
                });
        }
    }
}
let checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
// 03.04
function assertStringValue(param) {
    if (typeof param !== 'string') {
        throw Error('value should have been a string');
    }
}
function bookTitleTransform(title) {
    assertStringValue(title);
    return __spreadArray([], title, true).reverse().join('');
}
// let modifiedTitle = bookTitleTransform('bookTitle');
// console.log(modifiedTitle);
// modifiedTitle = bookTitleTransform(123);
// console.log(modifiedTitle);
// 04.01
function printBook(book) {
    console.log(book.title + ' by ' + book.author);
}
let myBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: function (reason) {
        return console.log('Damaged: ' + reason);
    }
};
// (reason: string) => void
let logDamage = function (reason) {
    return console.log('Damaged: ' + reason);
};
let favoriteAuthor = {
    name: 'Anna',
    email: 'asd@asd.com',
    numBooksPublished: 1
};
let favoriteLibrarian = {
    name: 'lib',
    email: 'asd@asd.com',
    department: 'dep',
    assistCustomer: null
};
// 04.04
let offer = {
    book: {
        title: 'Essential TypeScript'
    }
};
// console.log(BookProperies);
// function getProperty(book, propName) {
//     let specialProperty = book[propName];
//     if (typeof specialProperty === 'function') {
//         return specialProperty['name'];
//     }
//     return specialProperty;
// }
// getProperty(myBook, 'title');
// getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'isbn');
// 05.01
let ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
        this.title = title;
        this.year = year;
    }
    Object.defineProperty(ReferenceItem.prototype, 'publisher', {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + ' was published in ' + this.year);
    };
    return ReferenceItem;
}());
let ref = new ReferenceItem('Typescript', 2021);
// console.log(ref);
// ref.printItem();
ref.publisher = 'publisher';
console.log(ref.publisher);
