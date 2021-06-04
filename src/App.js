import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/nav/nav.component'
import HomePage from './pages/homePage/homepage.component'
import ShopPage from './pages/shopPage/shop.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
