import React from 'react';

const Header = () => {

  const navToggle = (e) => {
    document.getElementById('nav-menu').classList.toggle('show');
    e.preventDefault();
  }

  const navClose = (e) => {
    document.getElementById('nav-menu').classList.remove('show');
    e.preventDefault();
  }
  
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu" onClick={navToggle}></i>
        </div>

        <div>
          <a href="#" className="nav__logo">Derrick</a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <div className="nav__close" id="nav-close">
              <i className="bx bx-x" onClick={navClose}> </i>
          </div>

          <ul className="nav__list" onClick={navClose}>
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
            <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact </a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
