# Understanding Interfaces

## What is an Interface?

It's like a contract that defines types.

Compiler enforces the contract via type checking.

Interfaces don't compile to anything in Javascript, they're just used by the compiler for type-checking.

Collection of property and method definitions.

Duck typing - as long as an object has the shape of an expected type, it can behave as if it were that type.

"When I see a bird that walks like a duck, and swims like a duck and quacks like a duck, I call that bird a duck."

- James Whitcomb Riley

# Duck Typing

```typescript
interface Duck {
  walk: () => void;
  swim: () => void;
  quack: () => void;
}

let probablyADuck = {
  walk: () => console.log('walking like a duck'),
  swim: () => console.log('swimming like a duck'),
  quack: () => console.log('quack like a duck'),
};

functionFlyOverWater(bird: Duck){}
FlyOverWater(probablyADuck); // WORKS!
```

# Defining an Interface

- 'interface' keyword
- List properties with their types
- Optional properties denoted with '?'
- Provide function signatures - no implementing

```typescript
interface Book {
  id: number;
  title: string;
  author: string;
  pages?: number;
  markDamaged: (reason: string) => void;
}
```
