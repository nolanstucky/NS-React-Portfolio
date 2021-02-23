import Navbar from './components/navbar/index';
import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home"
import TestBox from './components/Box'
import Projects from './components/pages/Projects'

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </HashRouter>
  );
}

export default App;
