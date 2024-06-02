import React from "react";
import { useTheme } from "../../components/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Ayush_Goyal_CV.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.scss";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1><Typewriter options={{ strings: [ "NodeJs Developer!", "MERN Stack Developer!", "React Developer!","Backend Developer!","Frontend Developer!","Python Developer!"], autoStart: true, loop: true,}}/></h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=8595480614" rel="noreferrer" target="_blank">Hire Me</a>
              <a className="btn btn-cv" href={Resume} download="Ayush_Goyal_CV.pdf">My Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;