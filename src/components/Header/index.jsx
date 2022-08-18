import React from 'react';
import './styles.css';

function Header({ dark }) {
  return (
    <header className={dark ? 'dark' : ''}>
      <div className="header-Logo">
        <a href="/">
          <img
            src="https://logospng.org/download/netflix/logo-netflix-256.png"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className="header-User">
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix User"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
