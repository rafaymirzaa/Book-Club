// src/library.js
import { Book } from "./book.js";

export const myLibrary = [];

export function addBook(book) {
  myLibrary.push(book);
}

export function deleteBook(index) {
  myLibrary.splice(index, 1);
}
