import React from 'react';
import logo from '../planet.png';
import Nav from './Nav';

function Header() {
  return (
    <div className="header">
      <div className="icon-logo">
        <img src={logo} alt="Logo" className="logo" />

        <h1>Sapce Travelers&apos; Hub</h1>
      </div>

      <div className="nav-links">
        <Nav title="Products" />
        <Nav title="Missions" />
        <span>|</span>
        <Nav title="My Profile" />
      </div>
    </div>
  );
}

export default Header;
