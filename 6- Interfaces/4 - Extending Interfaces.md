# Extending Interfaces

```typescript
interface LibraryResource {
  catalogNumber: number;
}

interface Book {
  title: string;
}

interface Encyclopedia extends LibraryResource, Book {
  volume: number;
}
```

Encyclopedia extends LibraryResource and Book, so it has the catalogNumber and title properties. It also has volume, which is its own property.
