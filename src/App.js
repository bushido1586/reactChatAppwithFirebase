import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = react.useState()
  return (
    <div className="App">
      {!name && <EmailAdderComponent setName={setName} />}
      {name && <Container name = {name} />}
    </div>
  );
}

export default App;
