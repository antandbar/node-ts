'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const booksBo_1 = require("../bos/booksBo");
class BooksController {
    async getBooks(req, res) {
        const books = await booksBo_1.booksBo.getBooks();
        res.status(200).json({ results: books });
    }
    async saveBook(req, res) {
        const { title, author, isbn } = req.body;
        const book = await booksBo_1.booksBo.saveBook(title, author, isbn);
        res.status(201).json({ result: book });
    }
}
exports.booksController = new BooksController();
