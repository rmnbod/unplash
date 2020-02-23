import React from 'react';
import './App.css';
import LoginJoin from './sections/login-join/loginJoin';
import Categories from './sections/categories/categories';
import SearchMain from "./sections/search-section/searchMain";
import Feed from "./sections/feed/feed";
import photo1 from '../src/assets/images/photo1.jpg'
import photo2 from '../src/assets/images/photo2.jpg'
import photo3 from '../src/assets/images/photo3.jpg'
import avatar from '../src/assets/images/avatar.jpg'
import AdaptiveHeader from './sections/header/AdaptiveHeader';

const items = [
  {
    avatar,
    username: "John Doe",
    photo: photo1
  },
  {
    avatar,
    username: "John Doe",
    photo: photo2
  },
  {
    avatar,
    username: "John Doe",
    photo: photo3
  }
];

function App() {
  return (
    <div className="App">
      <AdaptiveHeader />
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
