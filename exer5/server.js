import express from 'express';
import fs from 'fs';

const app = express();


app.use(express.json());

// Ensure that the books.txt file exists
fs.access(BOOKS_FILE_PATH, fs.constants.F_OK, (err) => {
    if (err) {
        fs.writeFileSync('books.txt', ''); // creates an empty file if it doesn't exist
    }
});

/**
 * POST method to add a book to the server that uses endpoint /add-book
 * accepts an object in the request body with fields: name, isbn, author, year and saves the book details to a file named books.txt.
 */
app.post('/add-book', (req, res) => {
    const { name, isbn, author, year } = req.body;

    if (!name || !isbn || !author || !year) {
        return res.json({ success: false });
    }

    const bookDetails = `${name},${isbn},${author},${year}\n`;

    fs.appendFile(BOOKS_FILE_PATH, bookDetails, (err) => {
        if (err) {
            console.error(err);
            return res.json({ success: false });
        }
        return res.json({ success: true });
    });
});

/**
 * GET method to retrieve a book details by ISBN and author (Endpoint: /find-by-isbn-author)
 */
app.get('/find-by-isbn-author', (req, res) => {
    const { isbn, author } = req.query;

    fs.readFile(BOOKS_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        const lines = data.split('\n');
        const book = lines.find(line => {
            const [name, bookIsbn, bookAuthor] = line.split(',');
            return bookIsbn === isbn && bookAuthor === author;
        });

        if (!book) {
            return res.status(404).json({ message: 'Book not found' }); //error message if book not found
        }

        const [name, bookIsbn, bookAuthor, year] = book.split(',');
        return res.json({ name, isbn: bookIsbn, author: bookAuthor, year });
    });
});

/**
 * GET method to retrieve books by author (Endpoint: /find-by-author)
 */
app.get('/find-by-author', (req, res) => {
    const { author } = req.query;

    fs.readFile(BOOKS_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        const lines = data.split('\n');
        const books = lines.filter(line => {
            const [, , bookAuthor] = line.split(',');
            return bookAuthor === author;
        });

        if (books.length === 0) {
            return res.status(404).json({ message: 'Books by this author not found' }); //error message if book not found
        }

        const formattedBooks = books.map(book => {
            const [name, isbn, bookAuthor, year] = book.split(',');
            return { name, isbn, author: bookAuthor, year };
        });

        return res.json(formattedBooks);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port 3000`);
});
