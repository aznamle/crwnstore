import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component'


function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signup' component={SignInAndSignOutPage} />
        </Switch>
      </div>
  );
}

export default App;
