import { React, useEffect, useState } from 'react';
import './App.css';
import API from './API';
import MovieRow from './components/MovieRow';
import Featured from './components/Featured';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [darkHeader, setDarkHeader] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      const list = await API.getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await API.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setDarkHeader(true);
      } else {
        setDarkHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="App">
      <Header dark={darkHeader} />

      {featuredData && <Featured item={featuredData} />}

      <section className="lists">
        {movieList.map((item) => (
          <MovieRow key={item.slug} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <a href="https://github.com/PedroL22/">
          Made with
          {' '}
          <span className="heart">♥</span>
          {' '}
          by Pedro Lucena
          <br />
          <a href="https://netflix.com">Image rights for Netflix</a>
          <br />
          <a href="https://tmdb.org">Data taken from TMDB.org</a>
        </a>
      </footer>
    </div>
  );
}

export default App;
