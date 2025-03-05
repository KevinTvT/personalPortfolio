import './App.css';
import Header from './components/Header'

function App() {
  const name = "Kevin"

  return (
    <div className="App">
      <Header />
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
