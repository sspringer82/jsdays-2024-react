import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { BooksProvider } from './BooksProvider';
import { useRef, useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState('Klaus');
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label>
        Vorname:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Nachname:
        <input type="text" ref={ref} />
        <button onClick={() => console.log(ref.current!.value)}>ok</button>
      </label>
    </div>

    // <BooksProvider>
    //   <RouterProvider router={router} />
    // </BooksProvider>
  );
};

export default App;
