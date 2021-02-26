import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PaginaInicial from './pages/Home';
import PaginaContato from './pages/Contact';
import PaginaProduto from './pages/Product';
import PaginaGithub from './pages/Github';
import PaginaNotFound from './pages/NotFound';
import ComponenteHeader from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Cabeçalho */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height="100" />
          <ComponenteHeader />
        </header>

        {/* Conteúdo */}
        <main className="App-main">
          <Switch>
            <Route exact path="/" component={PaginaInicial} />
            <Route exact path="/contato" component={PaginaContato} />
            <Route exact path="/produtos" component={PaginaProduto} />
            <Route exact path="/produtos/:nomeProduto" component={PaginaProduto} />
            <Route exact path="/github" component={PaginaGithub} />
            <Route exact path="/github/:nomeUsuario" component={PaginaGithub} />
            <Route path="*" status="404" component={PaginaNotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );

    {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    */}
}

export default App;
