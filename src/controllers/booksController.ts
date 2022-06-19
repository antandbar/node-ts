'use strict';

import { Request, Response } from 'express';
import BookModel, { Book } from '../models/Book';

class BooksController {
  public async getBook(req: Request, res: Response): Promise<void> {
    const books: Book[] = await BookModel.find();
    res.status(200).json({ results: books });
  }

  public async saveBook(req: Request, res: Response): Promise<void> {
    const { title, author, isbn } = req.body;

    const book: Book = new BookModel({ title, author, isbn });
    book.save();
    res.status(201).json({ result: book });
  }
}

export const booksController = new BooksController();
