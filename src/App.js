import './App.css';

//icones das redes sociais
import instagram from './instagram.png'
import github from './github.png'
import linkedin from './linkedin.png'

function App() {
  return (
    <div className="App">
      <header>
        <div>GERENCIADOR DE TAREFAS</div>   
      </header>
      <nav>
          <ul>
            <li><a>Home</a></li>
            <li>Sobre</li>
            <li>Tarefas</li>
          </ul>
        </nav>
      <main>
        Qualquer coisa
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
