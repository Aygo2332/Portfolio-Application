import React from "react";
import { MdSchool } from "react-icons/md";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.scss";

const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education Details</h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white" }} date="December 2020 - July 2024" iconStyle={{ background: "#138781", color: "#fff" }} icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">Bachelors of Technology (Information Technology)</h3>
            <h4 className="vertical-timeline-element-subtitle">University School of Information, Communication and Technology (GGSIPU)</h4>
            <h5 className="vertical-timeline-element-subtitle"><i>CGPA: 8.298</i></h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white" }} date="March 2019 - March 2020" iconStyle={{ background: "#138781", color: "#fff" }} icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">Senior Secondary Education (12th)</h3>
            <h4 className="vertical-timeline-element-subtitle">Holy Convent Sr. Sec. School, Delhi</h4>
            <h5 className="vertical-timeline-element-subtitle"><i>Percentage: 85.4%</i></h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  white" }} date="April 2017 - April 2018" iconStyle={{ background: "#138781", color: "#fff" }} icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">Secondary Education (10th)</h3>
            <h4 className="vertical-timeline-element-subtitle">The Indian Heights School, Delhi</h4>
            <h5 className="vertical-timeline-element-subtitle"><i>Percentage: 87.4%</i></h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;