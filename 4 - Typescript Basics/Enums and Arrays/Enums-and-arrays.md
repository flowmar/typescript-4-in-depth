# Enums

```typescript
enum Category {
  Biography,
  Poetry,
  Fiction,
} // 0,1,2
enum Category {
  Biography = 1,
  Poetry,
  Fiction,
} // 1, 2, 3
enum Category {
  Biography = 5,
  Poetry = 8,
  Fiction = 9,
} //5, 8, 9

let favoriteCategory: Category = Category.Biography;

console.log(favoriteCategory); // 5
let categoryString = Categroy[favoriteCategory]; // Biography
```

# Arrays

- One of the primary ways that data is stored in JS and TS.
- Can be decalred 2 ways:
  - let strArray1: string[] = ['here', 'are', 'strings'];
  - let strArray2: Array<string> = ['more', 'strings', 'here'];
- Accessed and used much like JS arrays
- Declare as an array of 'any' to store any type in the array

# Tuples

- Array where types for first few elements are specified
- Types do not have to be the same
- Additional elements can be any type from those previously specified

```typescript
let myTuple: [number, string] = [25, 'truck'];
let firstElement myTuple[0]; // 25
let secondElement myTuple[1]; //truck

// Other elements canbe numbers or strings
myTuple[2] = 100;
myTuple[2] = 'this works!';
```
