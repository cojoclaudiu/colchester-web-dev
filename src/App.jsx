import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}
