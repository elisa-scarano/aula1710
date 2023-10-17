import minhaImagem from './img/image.jpeg'
import Noticia from './components/noticia.js'
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Olá mundo</h1>
    <Noticia titulo="Esssaaaa é foda bichhooo" imagem={minhaImagem} alt="ilusao" descricao="muitoooo locoooooo" categoria="AAAAAAAAAAA"></Noticia>
    </div>
  );
}

export default App;
