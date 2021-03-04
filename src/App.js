import Navbar from './components/navbar/index';
import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home"
import Projects from './components/pages/Projects'
import './App.css';
import Footbar from './components/Footer/index'
function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
      </Switch>
      <Footbar/>
    </HashRouter>
  );
}

export default App;
