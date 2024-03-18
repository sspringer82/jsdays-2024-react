import { useEffect, useState } from 'react';
import { deleteBook, getAllBooks } from './books.api';
import ListItem from './ListItem';
import { useBooksContext } from './BooksProvider';
import { Link } from 'react-router-dom';

function List() {
  // const [books, setBooks] = useState<Book[]>([]);
  const [books, setBooks] = useBooksContext();
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getAllBooks()
      .then((books) => setBooks(books))
      .catch(() => setError(true));
  }, []);

  async function handleDelete(id: string) {
    await deleteBook(id);
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== id);
    });
  }

  if (error) {
    return <div>Es ist ein Fehler aufgetreten</div>;
  }

  if (books.length === 0) {
    return (
      <div>
        Keine Bücher gefunden<Link to="/create">Neu</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <label>
          Suchen:{' '}
          <input
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
        </label>
      </div>
      {books
        .filter((book) =>
          book.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((book) => (
          <ListItem book={book} key={book.id} onDelete={handleDelete} />
        ))}
      <Link to="/create">Neu</Link>
    </div>
  );
}

export default List;
