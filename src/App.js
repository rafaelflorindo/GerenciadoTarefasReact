import './App.css';

//icones das redes sociais
import instagram from './instagram.png'
import github from './github.png'
import linkedin from './linkedin.png'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Tarefas</li>
          </ul>
        </nav>
      </header>
      <main>

      </main>
      <footer>
        <p>Desenvolvido por: Rafael Florindo</p>
        <div>
          <a href="#" ><img src={instagram} /></a>
          <a href="https://github.com/rafaelflorindo" ><img src={github} /></a>
          <a href="#" ><img src={linkedin} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
