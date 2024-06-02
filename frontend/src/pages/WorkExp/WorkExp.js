import React from "react";
import { SiReact } from "react-icons/si";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.scss";
import Empliance from "../../assets/Certificate3.pdf";
import S2 from "../../assets/Certificate2.pdf";
import GGSIPU from "../../assets/Certificate1.pdf";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experience</h2>
          <hr/>
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white",}} date="December 2023 - Present" iconStyle={{ background: "#1e1e2c", color: "#fff" }} icon={<SiReact />}>
              <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Empliance Technologies Pvt. Ltd.</h4>
              <h5 className="vertical-timeline-element-subtitle">Remote</h5>
              <p>
                <ul>
                  <li>Led the initiative to implement NodeJs functionalities for the efficient management of Politically Exposed Persons (PEP) details, leading to a remarkable 20% decrease in data retrieval time.</li>
                  <li>Executed the seamless migration of the web application to Render, enhancing performance and scalability; increased server response time by 20% and reduced downtime by 30%.</li>
                  <li>Enhanced efficiency of documentation process by implementing MongoDB for seamless storage, streamlining collaboration among cross-functional teams, resulting in a 30% increase in productivity.</li>
                  <li><a href={Empliance}><i>View Offer Letter</i></a></li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white",}} date="August 2023 - September 2023" iconStyle={{ background: "#1e1e2c", color: "#fff" }} icon={<SiReact />}>
              <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">USS ACM GGSIPU Student Chapter</h4>
              <h5 className="vertical-timeline-element-subtitle">Remote</h5>
              <p>
                <ul>
                  <li>Implemented PHP and MySQL to enhance information storage and retrieval capabilities for a Car Sharing application, resulting in a 50% increase in system performance and seamless user experience.</li>
                  <li>Implemented a visually stunning design for the application, optimizing user experience and streamlining navigation, leading to a 25% increase in user satisfaction and a 10% boost in conversion rates.</li>
                  <li> <a href={GGSIPU}><i>View Certificate</i></a></li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white",}} date="July 2022 - September 2022" iconStyle={{ background: "#1e1e2c", color: "#fff" }} icon={<SiReact />}>
              <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">S2 Code Technologies Ltd.</h4>
              <h5 className="vertical-timeline-element-subtitle">Noida, India</h5>
              <p>
                <ul>
                  <li>Enhanced website functionality by developing PHP and MySQL tools to streamline the presentation of crucial data, resulting in a 50% increase in user interaction and a 25% boost in lead generation.</li>
                  <li>Oversaw the smooth hosting of the web application on Flesh, guaranteeing optimal performance and scalability, leading to a 35% decrease in server response time.</li>
                  <li><a href={S2}><i>View Certificate</i></a></  li>
                </ul>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;