// Challenge: every book below repeats the same three-field shape by hand.
// Try adding a fourth book (any title/author/isbn you like) and notice
// how easy it is to typo a key name, like "athor" instead of "author",
// with nothing catching the mistake.
//
// Your job: write a createBook(title, author, isbn) factory function
// in a new file, books.js, that returns an object with those three
// fields. Replace every object below with a call to it.
//
// Check final/ once you're done, or if you get stuck.

const book1 = { title: 'Harry Potter', author: 'J.K. Rowling', isbn: 'AB123' };
const book2 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: 'CD456' };
const book3 = { title: 'Dune', author: 'Frank Herbert', isbn: 'EF789' };

console.log(book1);
console.log(book2);
console.log(book3);
