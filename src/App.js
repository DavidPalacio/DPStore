
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Saludo from './components/Saludo';
import Lista from "./components/itemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Saludo/>
      <Lista/>
      
      
    </div>
  );
}

export default App;
