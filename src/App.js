import React from 'react';
import './App.css';
import Header from "./components/header";
import SectionList from "./components/sectionList";
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
        <section className='login-join'>
          <a id='login' href='/login'>Login</a>
          <a id='join' href='/join'>Join Free</a>
        </section>
        <nav className='nav-category'>
          <p>Editorial</p>
          <div id='section-list-separator'/>
          <SectionList/>
        </nav>
        <SearchMain/>
        <article>
          <Item photo={photo1} avatar={avatar}/>
          <Item photo={photo2} avatar={avatar}/>
          <Item photo={photo3} avatar={avatar}/>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
