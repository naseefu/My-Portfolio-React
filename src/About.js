import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import './css/about.css'
import about1 from './figures/about1.jpg'
function About(){
  return(
    <div className="about-main">
      <div className="about-1">
        <div className="title">
          <h2>Code and Coffee</h2>
          <p><span className="arrow"><MdDoubleArrow/></span> Dynamic and motivated Computer Engineering student with a passion for software development and a
strong foundation in Python, JavaScript, HTML, CSS, MySQL, React, Django, and Flask.</p>
          <p><span className="arrow"><MdDoubleArrow/></span> Eager to leverage academic
training and practical experience to contribute to innovative projects in a collaborative team environment.</p>
        </div>
      </div>
      <div className="about-2">
        <img src={about1}></img>
      </div>
    </div>
  )
}
export default About