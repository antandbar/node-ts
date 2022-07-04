'use strict';

import { Request, Response, NextFunction } from 'express';
import { booksBo } from '../bos/booksBo';
import { Book } from '../models/Book';

class BooksController {
  public async getBooks(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const books: Book[] = await booksBo.getBooks();
      res.status(200).json({ results: books });
    } catch (err) {
      next(err);
    }
  }

  public async saveBook(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { title, author, isbn } = req.body;

      const book: Book = await booksBo.saveBook(title, author, isbn);

      res.status(201).json({ result: book });
    } catch (err) {
      next(err);
    }
  }
}

export const booksController = new BooksController();
