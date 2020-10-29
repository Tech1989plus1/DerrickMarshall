import React from 'react';

const Home = () => {
  return(
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__data">
          <div className="home__img">
            <img src="./assets/images/headShotSmall.png" alt=""/>
          </div>

          <h1 className="home__title">Derrick Marshall</h1>
          <span className="home__profession">Frontend Developer</span>

          <div className="home__social">
            <a href="" className="home__social-link"><i className='bx bxl-linkedin-square'></i></a>
            <a href="" className="home__social-link"><i className='bx bxl-github' ></i></a>
          </div>

          <a download="./assets/docs/DerrickMarshallResume.pdf" href="#" className="button home__button">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
