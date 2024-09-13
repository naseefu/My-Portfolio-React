import React from "react";
import { useRef,useEffect } from "react";
import './css/project.css'
import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'
import img4 from './images/image4.jpg'
function Projects(){
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-section');
        } else {
          entry.target.classList.remove('show-section');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      if (sectionsRef.current) {
        sectionsRef.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);
  return(
    <div className="projects">
      <div className="secion-1">
      <div className="title">
        <h4>My Projects</h4>
        <h1>Works that I've done</h1>
      </div>
      <section className="project1" ref={(el) => sectionsRef.current[0] = el}>
        <div className="project-1">
          <div className="project-1-img">
            <img src={img2}></img>
          </div>
          <div className="project-content">
            <h2>Product Anti-counter Feiting using Blockchain</h2>
            <p>Developed an anti-counterfeiting solution using React.js for the frontend, Node.js and Express.js for the backend, and Ethereum blockchain for product verification.</p>
          </div>
        </div>
      </section>
      <section className="project2" ref={(el) => sectionsRef.current[1] = el}>
        <div className="project-1">
          <div className="project-1-img">
            <img src={img3}></img>
          </div>
          <div className="project-content">
            <h2>Music recommendation based on facial emotion</h2>
            <p>Languages used: JavaScript, HTML/CSS, Python develop a user-friendly web application that detects facial
              expressions and suggests music tracks to match the user's emotions in real time.</p>
          </div>
        </div>
      </section >
      </div>
      <div className="section-2">
        <section className="project3" ref={(el) => sectionsRef.current[2] = el}>
        <div className="project-1">
          <div className="project-1-img">
            <img src={img1}></img>
          </div>
          <div className="project-content">
            <h2>E-commerce Website</h2>
            <p>Executed end-to-end development of an E-commerce project using HTML, CSS, JavaScript, and Django.
Demonstrated proficiency in front-end design and back-end functionality, showcasing a comprehensive skill
set in web development.</p></div>
        </div>
      </section>
      <section className="project4" ref={(el) => sectionsRef.current[3] = el}>
        <div className="project-1 prok">
          <div className="project-1-img">
            <img src={img4}></img>
          </div>
          <div className="project-content">
            <h2>Web based leaf disease detection system</h2>
            <p>Languages used: Python, HTML/CSS, JavaScript. Developed a web-based leaf disease detection system
using deep learning for accurate plant health assessment.</p>
          </div>
        </div>
      </section>
      <div>
      <a href="https://github.com/naseefu" style={{textDecoration:'none'}} ref={(el) => sectionsRef.current[4] = el}><button className="proj-btn" >Explore More Projects</button></a>
      </div>
      </div>
    </div>
  )
}

export default Projects