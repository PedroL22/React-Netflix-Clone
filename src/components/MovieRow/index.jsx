import React from 'react';
import './styles.css';

function MovieRow({ title, items }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-ListArea">
        <div className="movieRow-List">
          {items.results.length > 0
            && items.results.map((item, key) => (
              <div key={key} className="movieRow-Item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={`Banner${item.original_title}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
