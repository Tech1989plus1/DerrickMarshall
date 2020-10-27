import React from 'react';

import NavBrand from './nav/NavBrand.jsx';
import NavList from './nav/NavList.jsx';

const Nav = () => {

  const onMenuClicked = () => {
    document.querySelector('.nav-list').classList.add('active');
  }

  return (
    <header>
      <div className="container">
        <nav>
          <NavBrand/>
          <div className="menu-icons open">
            <i className="icon ion-md-menu" onClick={onMenuClicked}></i>
          </div>
          <NavList/>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
