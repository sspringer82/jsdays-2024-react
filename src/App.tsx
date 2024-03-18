import React, { useEffect, useState } from 'react';
import { Book } from './Book';

const url = '/api/books/1';

const App: React.FC = () => {
  // function App() {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, []);

  if (book !== null) {
    return <div>{book.title}</div>;
  }
  return <div>Nix</div>;
};

export default App;
