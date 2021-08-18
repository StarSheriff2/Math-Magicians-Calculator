import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.id} className="navbar-link-li">
            <NavLink to={link.path} activeClassName="active-link" className="navbar-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
