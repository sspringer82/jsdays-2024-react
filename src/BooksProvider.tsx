import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { Book } from './Book';

type BooksContextType = [Book[], Dispatch<SetStateAction<Book[]>>];

const BooksContext = createContext<null | BooksContextType>(null);

type Props = {
  children?: React.ReactNode;
};

const BooksProvider: React.FC<Props> = ({ children }) => {
  const state = useState<Book[]>([]);

  return (
    <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
  );
};

function useBooksContext(): BooksContextType {
  const context = useContext(BooksContext);

  if (context === null) {
    throw new Error('Du hast wahrscheinlich den Provider vergessen!');
  }

  return context;
}

export { BooksProvider, useBooksContext };
