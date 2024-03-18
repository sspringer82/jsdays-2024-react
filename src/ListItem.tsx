import { Link } from 'react-router-dom';
import { Book } from './Book';

type Props = {
  book: Book;
  onDelete: (id: string) => void;
};

const ListItem: React.FC<Props> = ({ book, onDelete }) => {
  return (
    <div>
      {book.title} ({book.author}) - {book.price}
      <button
        onClick={() => {
          onDelete(book.id);
        }}
      >
        löschen
      </button>
      <Link to={`/detail/${book.id}`}>Details</Link>
    </div>
  );
};

export default ListItem;
