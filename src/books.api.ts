import { Book } from './Book';

const booksBaseUrl = '/api/books';

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch(booksBaseUrl);
  if (!response.ok) {
    throw new Error('Es ist ein Fehler aufgetreten');
  }
  const data = await response.json();
  return data;
}
