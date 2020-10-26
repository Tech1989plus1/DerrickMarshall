import React from 'react';

const NavList = () => {
  return (
    <ul className="nav-list">
      <div className="menu-icons close">
        <i className="icon ion-md-close"></i>
      </div>
      <li className="nav-item">
        <a href="" className="nav-link">About Me</a>
      </li>
      <li className="nav-item">
        <a href="" className="nav-link">Projects</a>
      </li>
      <li className="nav-item">
        <a href="" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

export default NavList;
