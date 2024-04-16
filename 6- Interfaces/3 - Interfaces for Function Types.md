# Interfaces for Function Types

```typescript
function CreateCustomerID(name: string, id: number): string {
  return name + id;
}

// In an interface, you use a colon instead of an arrow between the parameter list and the function return type.
interface StringGenerator {
  (chars: string, nums: number): string;
}

// let IdGenerator: (chars: string, nums: number): string;
// IdGenerator = CreateCustomerID;

// Now that you have an interface for the function type, you can use it to define a variable that can hold a function of that type:
let IdGenerator: StringGenerator;
IdGenerator = CreateCustomerID;
```
