import Nav from './components/nav/nav.component'
import Header from './components/header/header.component'
import Intro from './components/intro/intro.compontent'
import HomeShop from './components/homeshop/homeshop.component'
import Benefits from './components/benefits/benefits.component'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />      
      <Header />
      <Intro />
      <HomeShop />
      <Benefits />
    </div>
  );
}

export default App;
