import { addBook, findByISBNAndAuthor, findByAuthor } from './request.js';

// Test cases
addBook({ name: 'Harry Potter and the Philosopher’s Stone', isbn: '1978-0-7475-3269-9', author: 'J.K Rowling', year: '1997' });
addBook({ name: 'Harry Potter and the Chamber of Secrets', isbn: '0-7475-3849-2', author: 'J.K Rowling', year: '1998' });
addBook({ name: 'The Little Prince', isbn: '978-0156012195', author: 'Antoine Saint-Exupery', year: '1943' });

findByISBNAndAuthor('1978-0-7475-3269-9', 'J.K Rowling');
findByAuthor('J.K Rowling');
