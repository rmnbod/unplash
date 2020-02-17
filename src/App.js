import React from 'react';
import './App.css';
import Header from "./components/header";
import LoginJoin from './components/loginJoin';
import Categories from './components/categories';
import SearchMain from "./components/searchMain";
import Item from "./components/item";
import photo1 from '../src/assets/images/photo1.jpg'
import photo2 from '../src/assets/images/photo2.jpg'
import photo3 from '../src/assets/images/photo3.jpg'
import avatar from '../src/assets/images/avatar.jpg'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoginJoin />
        <Categories />
        <SearchMain />
        <article>
          <Item photo={photo1} avatar={avatar} />
          <Item photo={photo2} avatar={avatar} />
          <Item photo={photo3} avatar={avatar} />
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
