import { useEffect, useState } from 'react';
import { deleteBook, getAllBooks } from './books.api';
import ListItem from './ListItem';
import { useBooksContext } from './BooksProvider';

function List() {
  // const [books, setBooks] = useState<Book[]>([]);
  const [books, setBooks] = useBooksContext();
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllBooks()
      .then((books) => setBooks(books))
      .catch(() => setError(true));
  }, []);

  async function handleDelete(id: number) {
    await deleteBook(id);
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
  }

  if (error) {
    return <div>Es ist ein Fehler aufgetreten</div>;
  }

  if (books.length === 0) {
    return <div>Keine Bücher gefunden</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <ListItem book={book} key={book.id} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
