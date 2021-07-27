import React from 'react';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/events'>
            <Events />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
