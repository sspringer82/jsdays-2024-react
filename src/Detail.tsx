import { useEffect, useState } from 'react';
import { Book } from './Book';
import { getAllBooks } from './books.api';
import { useNavigate, useParams } from 'react-router-dom';

const Detail: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks().then((books) =>
      setBook(() => {
        const book = books.find((book) => book.id == id);
        return book as unknown as Book;
      })
    );
  }, []);

  return (
    <div>
      {book?.title}
      <button onClick={() => navigate('/list')}>zurück</button>
    </div>
  );
};

export default Detail;
