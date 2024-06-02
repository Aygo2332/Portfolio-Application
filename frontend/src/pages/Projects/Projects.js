import React from "react";
import "./Projects.scss";
import Spin from "react-reveal/Spin";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.PNG";
import Project3 from "../../assets/Project3.PNG";
import Project4 from "../../assets/Project4.PNG";
import Project5 from "../../assets/Project5.PNG";
import Project6 from "../../assets/Project6.PNG";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">TOP RECENT PROJECTS</h2>
        <hr />
        <div className="row" id="ads">
          <Spin>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img src={Project1} alt="project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">REST API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">SharedWheelz - ECommerce Website</h6>
                    <p>This project is a full-stack e-commerce website developed using Node.js, Express.js, React.js, and MongoDB. It allows users to browse, search, and purchase various products online.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/sharedwheelz">View</a>
                  <a className="ad-btn" href="https://sharedwheelz.onrender.com/">Live</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img src={Project2} alt="project2"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">REST API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Meezon - Inventory Management Website</h6>
                    <p>This project is a full-stack e-commerce website developed using Node.js, Express.js, React.js, and MongoDB. It allows sellers to maintain, search and customise products online.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/meezon">View</a>
                  <a className="ad-btn" href="https://github.com/aygo2332/meezon">Live</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={Project3} alt="project3"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">TMDB API</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Firebase</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Netzon5 - Netflix Clone</h6>
                    <p>This project is a frontend streaming website developed using React.js. It is a neflix clone that allows to watch trailers directly within the application.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/netzon5">View</a>
                  <a className="ad-btn" href="https://aygo2332.github.io/netzon5">Live</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img src={Project4} alt="project4"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Handlebars</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">OpenWeather API</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Weathr - Weather App</h6>
                    <p>It is weather application developed using Node.js, Express.js and Open Weather API. It fetches and displays weather of a particular city specified by the user.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/weathr">View</a>
                  <a className="ad-btn" href="https://weathr-1.onrender.com/">Live</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img src={Project5} alt="project5"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Todoify 2.0</h6>
                    <p>This project is a full-stack to-do-list developed using Node.js, Express.js, React.js, and MongoDB. It allows users to create, read, update and delete a task. It also allows users to mark it complete if completed.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/todoify-2.0">View</a>
                  <a className="ad-btn" href="https://todoify-2-0.onrender.com/">Live</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={Project6} alt="project6"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Todoify</h6>
                    <p>This project is a full-stack to-do-list developed using React.js. It allows users to create, read, update and delete a task. This has been further enhanced in Todoify 2.0.</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/aygo2332/todoify">View</a>
                  <a className="ad-btn" href="https://aygo2332.github.io/Todoify/">Live</a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;