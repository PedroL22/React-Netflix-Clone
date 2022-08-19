import React from 'react';
import './styles.css';
import playButton from '../../assets/images/play-button.png';

function Featured({ item }) {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = `${description.substring(0, 200)}...`;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-Vertical">
        <div className="featured-Horizontal">
          <div className="featured-Name">{item.name}</div>
          <div className="featured-Info">
            <div className="featured-Score">
              {item.vote_average.toPrecision(2).replace('.', '')}
              % Match
            </div>
            <div className="featured-Year">{firstDate.getFullYear()}</div>
            <div className="featured-Seasons">
              {item.number_of_seasons}
              {' '}
              season
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured-Description">{description}</div>
          </div>
          <div className="featured-Buttons">
            <a className="featured-PlayButton" href={`/watch/${item.id}`}>
              <img className="play-button" src={playButton} />
              {' '}
              Play
            </a>
            <a className="featured-InfoButton" href={`/${item.id}`}>
              More info
            </a>
          </div>
          <div className="featured-Genres">
            <strong>Genres: </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
