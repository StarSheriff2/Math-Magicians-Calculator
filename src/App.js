import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
