import needle from 'needle';


/**
 * function to add a book to the server.
 * @param {object} book - the book is an object with fields: name, isbn, author, year.
 */
function addBook(book) {
    needle.post(`$http://localhost:3000/add-book`, book, (err, resp, body) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(body);
        }
    });
}

//function for find isbn and author
function findByISBNAndAuthor(isbn, author) {
    needle.get(`http://localhost:3000/find-by-isbn-author?isbn=${isbn}&author=${author}`, (err, resp, body) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(body);
        }
    });
}

/**
 * Function to find books by author.

 */
function findByAuthor(author) {
    needle.get(`http://localhost:3000/find-by-author?author=${author}`, (err, resp, body) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(body);
        }
    });
}

export { addBook, findByISBNAndAuthor, findByAuthor };
