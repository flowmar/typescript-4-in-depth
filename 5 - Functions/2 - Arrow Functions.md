# Arrow Functions (aka Lambda functions)

```typescript
let arr = allBooks.filter(function (book) {
  return book.author === 'Herman Melville';
});
```

- a consise syntax for anonymous functions
- an anonymous function is passed to the filter function above, without naming the function and only using the function keyword
- an arrow function is more concise:

```typescript
let arr = allBooks.filter((book) => book.author === 'Herman Melville');
```

To the left of the arrow are the parameters of the function.
To the right of the arrow is the body of the function.

Another benefit of using an arrow function: 'this' is captured at function creation, not invocation.

# Arrow Function Syntax

```typescript
myBooks.forEach(() => console.log('Done reading!'));

myBooks.forEach(title => console.log('Done reading!'));

myBooks.forEach((title, number, stuff) => console.log('Done reading!'));

myBooks.forEach((title, number, stuff) => {
  console.log('Done reading!'));)
  // Do more stuff
  };
```

# Capturing "this" in Arrow Functions

```typescript
function Book() {
  this.publishDate = 2021;
  setInterval(() => {
    console.log(this.publishDate);
  }, 1000);
}
```

'this' can be used directly in Arrow functions. 
