# Optional and Default Parameters

- In Javascript, all parameters are optional
- In Typescript, all parameters are required. However, you can mark a parameter as optional:

```typescript
function CreateCustomer(name: string, age?: number) {}

function GetBookByTitle(title: string = 'The C Programming Language') {}

// You can also set it to an expression
function GetBookByTitle(title: string = GetMostPopularBook()) {}
```

- The age parameter is optional by adding the question mark.
- All optional parameter must appear AFTER all required parameters.
- Default parameters alllows you to specify a default value to be used for optional parameters or required parameters when the user passes 'undefined'
- Default parameters may be set to a literal value or an expression.
- Default parameters are treated as optional parameters if they come after all required parameters. You don't need to add the question mark after the parameter name

# Rest Parameters

Rest parameters give you a mechanism for passing a variable number of additional parameters, after the parameters that the function expects.

Collects a group of parameters into a single array.
Denoted with an ellipsis prefix on last parameter.

```typescript
function GetBooksReadForCust(name: string, ...bookIDs: number[]) {}

let books = GetBooksReadForCust('Leigh', 2, 5);

let books = GetBooksReadForCust('Daniel', 2, 5, 12, 42);
```


