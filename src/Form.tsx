import { useForm } from 'react-hook-form';
import { Book } from './Book';
import { createBook } from './books.api';
import { useNavigate } from 'react-router-dom';

type CreateBook = Omit<Book, 'id'>;

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<CreateBook>();
  const navigate = useNavigate();

  async function onSubmit(book: CreateBook) {
    await createBook(book);
    navigate('/list');
  }

  return (
    <>
      <h1>Form works!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Autor:
            <input type="text" {...register('author')} />
          </label>
        </div>
        <div>
          <label>
            Titel:
            <input type="text" {...register('title')} />
          </label>
        </div>
        <div>
          <label>
            ISBN:
            <input type="text" {...register('isbn')} />
          </label>
        </div>
        <div>
          <label>
            Seiten:
            <input type="text" {...register('pages')} />
          </label>
        </div>
        <div>
          <label>
            Preis:
            <input type="text" {...register('price')} />
          </label>
        </div>
        <button type="submit">speichern</button>
      </form>
    </>
  );
};

export default Form;
