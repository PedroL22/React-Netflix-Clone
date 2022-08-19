import { React, useState } from 'react';
import './styles.css';
import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrow from '../../assets/images/right-arrow.png';

function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-Left">
        <img src={LeftArrow} className="arrow" onClick={handleLeftArrow} />
      </div>
      <div className="movieRow-Right">
        <img src={RightArrow} className="arrow" onClick={handleRightArrow} />
      </div>
      <div className="movieRow-ListArea">
        <div
          className="movieRow-List"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
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
