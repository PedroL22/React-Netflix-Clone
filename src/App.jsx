import { React, useEffect, useState } from 'react';
import './App.css';
import API from './API';
import MovieRow from './components/MovieRow';
import Featured from './components/Featured';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await API.getHomeList();
      setMovieList(list);

      const originals = list.filter((i) => i.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    };

    loadAll();
  }, []);

  return (
    <div className="App">
      {featuredData && <Featured item={featuredData} />}

      <section className="lists">
        {movieList.map((item) => (
          <MovieRow key={item.slug} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
