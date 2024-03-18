import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { BooksProvider } from './BooksProvider';
import './App.css';

const App: React.FC = () => {
  return (
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  );
};

export default App;
