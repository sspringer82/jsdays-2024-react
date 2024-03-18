function App() {
  const name = 'Welt';

  const value = 4;

  if (value === 3) {
    return <div>Value ist 4</div>;
  }

  let content = <div>value ist vier</div>;
  if (value !== 4) {
    content = <div>value ist nicht vier</div>;
  }

  return (
    <div>
      <h1>Hallo {1 + 1}</h1>
      <div>Value ist {value === 4 && <span>VIER</span>}</div>
      <div>
        {value === 4 ? (
          <span>Value ist vier</span>
        ) : (
          <span>Value ist nicht vier</span>
        )}
      </div>
      <div>{content}</div>
    </div>
  );
}

export default App;
