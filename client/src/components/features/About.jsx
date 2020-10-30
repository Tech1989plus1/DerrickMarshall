import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const postAboutMe = useSelector(state => state.aboutMeData);

  return (
    <section className="about section">
      <div className="about__container bd-grid">
        <h2 className="section-title" id="about">About Me</h2>
        <div className="about__data">
          <p className="about__description">{postAboutMe.about}</p>
          <p className="about__description">{postAboutMe.about}</p>
        </div>
      </div>
    </section>
  );
}

export default About;