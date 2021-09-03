import Navbar from './components/navbar/index';
import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home"
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import './App.css';
import Footbar from './components/Footer/index'
import { Box} from 'grommet';
import { Grommet } from 'grommet';

const globalGrommetTheme = {
  global: {
    focus: {
      border: {
        color :'rgba(0,0,0,0)'
      }
    },
    button: {
      active: {
        background: {
          color: '#FCE181'
        }
      }
    }
  }
}

function App() {
  return (
    <HashRouter basename="/">
      <Grommet theme={globalGrommetTheme}>
      <Box >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume}/>
      </Switch>
      </Box>
      {/* <Footbar/> */}
      </Grommet>
    </HashRouter>
  );
}

export default App;
