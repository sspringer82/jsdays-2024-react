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

export async function deleteBook(id: string): Promise<void> {
  const response = await fetch(`${booksBaseUrl}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Es ist ein Fehler aufgetreten');
  }
}

export async function createBook(book: Omit<Book, 'id'>): Promise<Book> {
  const response = await fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error('whoops');
  }
  return response.json();
}
