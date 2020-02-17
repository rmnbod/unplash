import React from 'react';
import './App.css';
import Header from "./components/header";
import LoginJoin from './components/loginJoin';
import Categories from './components/categories';
import SearchMain from "./components/searchMain";
import Feed from "./components/feed";
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
