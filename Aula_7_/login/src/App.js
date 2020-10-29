import logo from './logo.svg';
import './App.css';
import Rodape from './components/rodape';
import Titulo from './titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Titulo texto='Login' descricao='Informe os dados abaixo.' />

        <p>SENAI Informática</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Rodape />

    </div>
  );
}

export default App;