import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <img
        className="logo"
        src="https://static1.squarespace.com/static/5639629de4b05b184b572406/t/56a7c667ab28106eca63707b/1453835881454/supermarket"
        alt="">
        </img>
      <div className="ui item">
        <h3 id="app-name">My Grocery App</h3>
      </div>
      <div className="ui item right">
        <button className="ui teal button right menu">
          View Items
        </button>
      </div>
    </div>
  );
}

export default Header;
