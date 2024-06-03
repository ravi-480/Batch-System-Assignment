import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="home">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">
            make the best financial decisions
          </h1>
          <p className="header-description">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="header-buttons">
            <button className="header-button">
              <div className="header-button-text">
                get started
              </div>
            </button>
            <div className="header-watch">
              <div className="header-watch-text">
                watch video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
