import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <Hero />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/about-me-page' exact component={AboutMePage} />
            <Route path='/contact-me-page' exact component={ContactMePage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
