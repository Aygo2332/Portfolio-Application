import React from "react";
import "./About.scss";
import Jump from "react-reveal/Jump";
import Photo from "../../assets/photo.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Photo} alt="profile_pic"/>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>Hi, I am Ayush Goyal and I am an aspiring Software Development Engineer. I am pursuing Bachelors of Technology in Information Technology from Guru Govind Singh Indraprastha University. I have a year experience in various internships as Software Development Intern as a Full Stack Developer and have worked on various projects based on JavaScript and its frameworks and Python.  I am a person who likes to and works on data, information and coding. A passionate person, I believe in skills and continuous persistence.</p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;