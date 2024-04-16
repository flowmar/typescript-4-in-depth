# Function Types

```typescript
function PublicationMessage(year: number): string {
  return 'Date published: ' + year;
}
```

- A function type is defined by a combination of the parameter types and return type
- Variables may be declared with function types
- Function assigned must have the same signature as the variable type

```typescript
let publishFunc: (someYear: number) => string;

publishFunc = PublicationMessage;

let message: string = publishFunc(2021);
```


Declaring and using function types:

```typescript
function GetAllBooks() {
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

function LogFirstAvailable(books): void {
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

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

enum Category {
  Biography,
  Poetry,
  Fiction,
  History,
  Children,
}

function GetBookByID(id: number) {
  const allBooks = GetAllBooks();
  return allBooks.filter((book) => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
  return name + id;
}
// **********************************************************

let x: number;

x = 5;

let IDGenerator: (chars: string, nums: number) => string;
IDGenerator = (name: string, id: number) => {
  return name + id;
};

let myID: string = CreateCustomerID('flowmar', 15);
console.log(myID);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// LogBookTitles(fictionBooks);

// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));

/** 
val - current element in the array
idx - index of value
arr - the array itself

The function above isLogging the index values and the title of the book.
Pre-incrementing because we want to start with 1, instead of 0.
*/
```



