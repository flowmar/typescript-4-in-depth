import { Category } from './enums';
import { UniversityLibrarian } from './classes';
import { Book, DamageLogger, Author, Librarian } from './interfaces';

function GetAllBooks(): Book[] {
  let books = [
    {
      id: 1,
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction,
    },
    {
      id: 2,
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction,
    },
    {
      id: 3,
      title: 'I Know Why the Caged Bird Sings',
      author: 'Maya Angelou',
      available: true,
      category: Category.Poetry,
    },
    {
      id: 4,
      title: 'Moby Dick',
      author: 'Herman Melville',
      available: true,
      category: Category.Fiction,
    },
  ];
  return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for (let currentBook of books) {
    if (currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }
  console.log('Total Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(
  categoryFilter: Category = Category.Fiction
): Array<string> {
  console.log('Getting books in category: ' + Category[categoryFilter]);

  const allBooks = GetAllBooks();
  const filteredTitles: string[] = [];

  for (let currentBook of allBooks) {
    if (currentBook.category == categoryFilter) {
      filteredTitles.push(currentBook.title);
    }
  }
  return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for (let title of titles) {
    console.log(title);
  }
}

function GetBookByID(id: number): Book {
  const allBooks = GetAllBooks();
  return allBooks.filter((book) => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
  console.log('Creating customer ' + name);

  if (age) {
    console.log('Age: ' + age);
  }

  if (city) {
    console.log('City: ' + city);
  }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log('Checking out books for ' + customer);

  let booksCheckedOut: string[] = [];

  for (let id of bookIDs) {
    let book = GetBookByID(id);
    if (book.available) {
      booksCheckedOut.push(book.title);
    }
  }

  return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(author: string, available: boolean): string[];

function GetTitles(author: string, available?: boolean): string[] {
  const allBooks = GetAllBooks();
  const searchResults: string[] = [];

  if (available !== undefined) {
    for (let book of allBooks) {
      if (book.author === author && book.available === available) {
        searchResults.push(book.title);
      }
    }
  } else {
    for (let book of allBooks) {
      if (book.author === author) {
        searchResults.push(book.title);
      }
    }
  }

  return searchResults;
}

function PrintBook(currentBook: Book): void {
  console.log(currentBook.title + ' by ' + currentBook.author);
}

// **************************************************

/**
 * myBook implements all of the properties of the Book interface, so it can be passed to the PrintBook function, which is expecting a Book.
 *
 * myBook2 does not have the ":Book" after it, so it is of type "any", which means that it can act as if it were of the type that the Book interface defines.
 */

let myBook: Book = {
  id: 5,
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  available: true,
  category: Category.Fiction,
  pages: 250,
  markDamaged: (reason: string) => console.log('Damaged: ' + reason),
};

let myBook2 = {
  id: 6,
  title: 'BFG',
  author: 'Roald Dahl',
  available: true,
  category: Category.Fiction,
  pages: 125,
  copies: 3,
};

PrintBook(myBook); // Works because all of the properties of the Book interface are defined

myBook.markDamaged('missing back cover');

PrintBook(myBook2); // Works because of Duck Typing!!

let logDamage: DamageLogger;
logDamage = (damage: string) => console.log('Damage reported: ' + damage);
logDamage('coffee stains');

//**********************************************

// let myBooks: string[] = GetTitles('James Joyce', false);
// myBooks.forEach((title) => console.log(title));

// LogFirstAvailable();

// let fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach(title => console.log(title));

// CreateCustomer('Michelle');
// CreateCustomer('Leigh', 6);
// CreateCustomer(
//   'Marie',
//   12,
//   'Atlanta'
// );

// let x: number;

// x = 5;

// let IDGenerator: (chars: string, nums: number) => string;
// IDGenerator = (name: string, id: number) => {
//   return name + id;
// };

// let myID: string = CreateCustomerID('flowmar', 15);
// console.log(myID);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// LogBookTitles(fictionBooks);

// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

let favoriteLibrarian: Librarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Elaine');
