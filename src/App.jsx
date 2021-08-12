import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Confirmation from 'pages/Confirmation/Confirmation';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/confirmation" component={Confirmation} exact />
      </Switch>
    </Router>
  );
}
