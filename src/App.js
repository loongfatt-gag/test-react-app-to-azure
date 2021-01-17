import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Projucts';
import Reports from './pages/Reports';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/reports' component={Reports} />
          <Route path='/support' component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
