import React from 'react';
import {
  BrowserRouter as Router,Switch,Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Counter from "./components/Counter";

import './styles/global.css';

function App() {
  return (
    //Inserumos as paginas em pages na boa pratica NÃO COLOCAR COMPONENTES
    <>
      <Navbar/>

      <Router>
        <Switch>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/counter' component={Counter}/>
        </Switch>
      </Router>
    </>
    );
}

export default App;
