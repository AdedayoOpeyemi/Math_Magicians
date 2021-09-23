import React from 'react';
import { NavLink } from 'react-router-dom';
import PageLogo from './PageLogo';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 2,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <PageLogo />
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
