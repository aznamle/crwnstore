import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </div>
  );
}

export default App;
