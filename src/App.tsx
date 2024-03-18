import React, { useEffect, useState } from 'react';
import { Book } from './Book';
import { getAllBooks } from './books.api';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllBooks()
      .then((books) => setBooks(books))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <div>Es ist ein Fehler aufgetreten</div>;
  }

  if (books.length === 0) {
    return <div>Keine Bücher gefunden</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}

export default App;
