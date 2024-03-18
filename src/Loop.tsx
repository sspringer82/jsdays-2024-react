import React from 'react';
function App() {
  const names = ['Klaus', 'Lisa', 'Dieter'];

  return (
    <>
      <h1>Meine Liste</h1>
      <div>
        {names.map((firstName) => (
          <div key={firstName}>{firstName}</div>
        ))}
      </div>
    </>
  );
}

export default App;
