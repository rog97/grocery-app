import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu white">
      <img
        className="logo"
        src="https://static1.squarespace.com/static/5639629de4b05b184b572406/t/56a7c667ab28106eca63707b/1453835881454/supermarket"
        alt="">
      </img>
      <div className="ui item">
        <h3>
          <Link to="/" id="app-name">
            My Grocery App
          </Link>
        </h3>
      </div>
      <div className="ui item right">
        <Link to="/groceries" className="ui teal button right menu">
          View Items
        </Link>
      </div>
    </div>
  );
}

export default Header;
