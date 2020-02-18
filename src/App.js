import React from 'react';
import './App.css';
import Header from "./sections/header/header";
import LoginJoin from './sections/login-join/loginJoin';
import Categories from './sections/categories/categories';
import SearchMain from "./sections/search-section/searchMain";
import Feed from "./sections/feed/feed";
import photo1 from '../src/assets/images/photo1.jpg'
import photo2 from '../src/assets/images/photo2.jpg'
import photo3 from '../src/assets/images/photo3.jpg'
import avatar from '../src/assets/images/avatar.jpg'

const items = [
  {
    avatar,
    username: "Carl Johnson",
    photo: photo1
  },
  {
    avatar,
    username: "Niko Bellic",
    photo: photo2
  },
  {
    avatar,
    username: "John Petesburg",
    photo: photo3
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoginJoin />
        <Categories />
        <SearchMain />
        <Feed items={items} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
