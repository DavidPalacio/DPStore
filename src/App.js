
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Saludo/>
      
    </div>
  );
}

export default App;
