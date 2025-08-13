import { Injectable } from '@nestjs/common';
import { Book, books } from './customDb';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newID = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newID,
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };

    books.push(newBook);

    return newBook;
  }

  update(bookID: number, updatedBookFields: Partial<Book>): Book | undefined {
  const index = books.findIndex((book) => book.id === bookID);
  if (index === -1) return undefined;

  const currentBook = books[index];

  const updatedBook = {
    id: bookID,
    title: updatedBookFields.title ?? currentBook.title,
    author: updatedBookFields.author ?? currentBook.author,
    publicationYear: updatedBookFields.publicationYear ?? currentBook.publicationYear,
  };

  books[index] = updatedBook;
  return updatedBook;
}
  delete(bookID: number): Book[] {
    books.splice(bookID - 1, 1);
    return books;
  }
}