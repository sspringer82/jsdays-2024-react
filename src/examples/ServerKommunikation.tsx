import { useEffect, useState } from 'react';
import { Book } from './Book';

const url = 'http://localhost:3001/books/1';

function App() {
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
}

export default App;
