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
import useAdaptive from './hooks/useAdaptive';
import DesktopFeed from './sections/feed/DesktopFeed';

const items = [
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582607450312-0b0e45fc9fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582586420225-bf9e91657feb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582423498587-8fe13ed3fa10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582458217950-177a4df59b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582530237443-eb1b41717a3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582634046693-d4840db2bb02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582586588244-64ad8f007cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    avatar,
    username: "John Doe",
    photo: "https://images.unsplash.com/photo-1582607450312-0b0e45fc9fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
  },
];

function App() {

  const isMobile = useAdaptive();

  return (
    <div className="App">
      <AdaptiveHeader />
      <main>
        { isMobile && <LoginJoin /> }
        <Categories />
        <SearchMain />
        { isMobile ? <Feed items={items} /> : <DesktopFeed items={items} /> }
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
