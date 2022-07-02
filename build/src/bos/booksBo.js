'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksBo = void 0;
const Book_1 = __importDefault(require("../models/Book"));
class BooksBo {
    async getBooks() {
        const books = await Book_1.default.find();
        return books;
    }
    async saveBook(title, author, isbn) {
        const book = new Book_1.default({ title, author, isbn });
        const bookSave = await book.save();
        return bookSave;
    }
}
exports.booksBo = new BooksBo();
