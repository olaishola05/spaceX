import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';
// import Nav from './Nav';

function Header() {
  const links = [
    { id: 1, path: '/', text: 'Rockets' },
    { id: 2, path: '/missions', text: 'Missions' },
    { id: 3, path: '/profile', text: 'Profile' },
  ];
  return (
    <div className="header">
      <div className="icon-logo">
        <img src={logo} alt="Logo" className="logo" />

        <h1>Sapce Travelers&apos; Hub</h1>
      </div>

      <div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  margin: '0 10px',
                  borderBottom: isActive ? 'solid 1px rgb(13, 114, 230)' : '',
                  color: isActive ? 'red' : 'rgb(13, 114, 230)',
                })}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
