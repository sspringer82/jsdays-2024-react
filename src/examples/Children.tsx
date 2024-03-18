function Parent() {
  const children = ['Kind1', 'Kind2', 'Kind3'];
  return (
    <div>
      <h1>Parent</h1>
      <Child name={children[0]} />
      <Child name={children[1]} />
      <Child name={children[2]} />
    </div>
  );
}

type Props = {
  name: string;
};

const Child: React.FC<Props> = ({ name }) => {
  return <div>Child: {name}</div>;
};

function App() {
  return <Parent></Parent>;
}

export default App;
