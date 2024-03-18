import { Book } from './Book';

type Props = {
  book: Book;
};

const ListItem: React.FC<Props> = ({ book }) => {
  return (
    <div>
      {book.title} ({book.author}) - {book.price}
    </div>
  );
};

export default ListItem;
