import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import LoginComponent from './composant/LoginComponent';
import RegisterComponent from './composant/RegisterComponent';
import Home from './composant/Home';
import NavBar from './composant/NavBar';
import portail from './composant/portail';
import AdminPanel from './composant/AdminPanel';



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginComponent}/>
        <Route exact path="/portail" component={portail}/>
        <Route exact path="/register" component={RegisterComponent}/>
        <Route exact path="/admin" component={AdminPanel}/>
      </Switch>
    </Router>
  );
}

export default App;
