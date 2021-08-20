
import './App.css';
import { BrowserRouter, Switch, Route } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Saludo from './components/Saludo';
import Lista from './components/ItemList';

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar/> 
      </header>
      <Saludo/>
      <Lista/>
    </>
  );
}

export default App;
