import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Nav from './components/nav/nav.component'
import HomePage from './pages/homePage/homepage.component'
import ShopPage from './pages/shopPage/shop.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />      
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
