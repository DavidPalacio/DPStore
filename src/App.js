import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>

      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bienvenidos a la Tienda de Doña Marleny, 
        </h1>
        <h2>Su Tienda de Barrio OnLine !!!</h2>
        <p>Proyecto React de David Palacio</p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
        Entrá Ve!!
        </a>
      </body>
    </div>
  );
}

export default App;
