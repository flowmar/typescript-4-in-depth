# Function Overloads

Creating multiple functions with the same name, but differing in their types.

One symbol name
Multiple function types
One Implementation with type guards

# Implementing Function Overloads

```typescript
function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
```

Neither of these contain an implementation.

There will only be 1 implementation compatible with both string and boolean parameters. Then, inside the function with the implementation, you must execute conditional logic to determine which type of parameter was passed in.

```typescript
function GetTitles(bookProperty: any): string[] {
  if (typeof bookProperty == 'string') {
    // get books by author, add to foundTitles
  } else if (typeof bookProperty == 'boolean') {
    // get books by availability, add to foundTitles
  }

  return foundTitles;
}
```
