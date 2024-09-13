import React, { useEffect, useRef } from "react";
import './css/skills.css';

function Skill() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-sec');
        } else {
          entry.target.classList.remove('show-sec');
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

  return (
    <div className="skills">
      <div className="title-skill">
        <h4>Tech Stack</h4>
        <h2>Skill Set Snapshot</h2>
      </div>
      <div className="skill-number">
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[0] = el}
          >
            <h1>01</h1>
            <h4><span className="react">React</span>, Front-end Library</h4>
            <p>React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[1] = el}
          >
            <h1>02</h1>
            <h4><span className="django">Django</span>, Full-Stack Web Framework</h4>
            <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[2] = el}
          >
            <h1>03</h1>
            <h4><span className="python">Flask</span>, Micro Web Framework</h4>
            <p>Flask is a lightweight WSGI web application framework in Python.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[3] = el}
          >
            <h1>04</h1>
            <h4><span className="react">Python</span>, General-Purpose Programming Language</h4>
            <p>Python is a high-level, interpreted programming language known for its readability and broad usage in web development, data science, automation, and more.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[4] = el}
          >
            <h1>05</h1>
            <h4><span className="django">JavaScript</span>, Scripting Language</h4>
            <p>JavaScript is a versatile programming language that is primarily used to create interactive effects within web browsers.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[5] = el}
          >
            <h1>06</h1>
            <h4><span className="python">HTML</span>, Markup Language</h4>
            <p>HTML (HyperText Markup Language) is the standard language for creating and structuring content on the web.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[6] = el}
          >
            <h1>07</h1>
            <h4><span className="react">CSS</span>, Stylesheet Language</h4>
            <p>CSS (Cascading Style Sheets) is used to style and layout web pages.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[7] = el}
          >
            <h1>08</h1>
            <h4><span className="django">PostgreSQL</span>, Relational Database Management System</h4>
            <p>PostgreSQL is an advanced, open-source RDBMS used to store, retrieve, and manage data in relational databases.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[8] = el}
          >
            <h1>09</h1>
            <h4><span className="python">Java</span>, General-Purpose Programming Language</h4>
            <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
          </section>
        </div>
        <div className="skill-n">
          <section
            className="section"
            ref={(el) => sectionsRef.current[9] = el}
          >
            <h1>10</h1>
            <h4><span className="react">Spring</span>, Application Framework</h4>
            <p>The Spring Framework is a powerful, feature-rich, and comprehensive programming and configuration model for modern Java-based enterprise applications.</p>
          </section>
        </div>
        <div className="skill-n">
  <section
    className="section"
    ref={(el) => sectionsRef.current[10] = el}
  >
    <h1>11</h1>
    <h4><span className="django">Node.js</span>, JavaScript Runtime</h4>
    <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.</p>
  </section>
</div>

      </div>
    </div>
  );
}

export default Skill;

