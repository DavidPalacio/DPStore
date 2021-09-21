
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <header className="App-header">
        <NavBar/> 
      </header >
      <Saludo/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer/>  
        </Route>
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
