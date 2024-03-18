import { useEffect, useState } from 'react';

function App() {
  console.log('RENDER');

  const [names, setNames] = useState(['Klaus', 'Lisa', 'Dieter']);

  useEffect(() => {
    setTimeout(() => {
      setNames((prevState) => {
        return [...prevState, 'Lydia'];
      });
    }, 2000);
    return () => {
      console.log('Unmount');
    };
  }, []);

  return (
    <>
      <h1>Meine Liste</h1>
      <div>
        {names.map((firstName) => (
          <div key={firstName}>{firstName}</div>
        ))}
      </div>
      <button
        onClick={() =>
          setNames(() => {
            return [...names, 'peter'];
          })
        }
      >
        add name
      </button>
    </>
  );
}

export default App;
