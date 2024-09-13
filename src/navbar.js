import React, { useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import './css/navbar.css';
function Navbar() {
  const scrollTOSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const getElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw Error(`Please double check your class names, there is no ${selector} class`);
  };
  // - -----------------------------------------------------

  const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-name');
    } else {
      entry.target.classList.remove('show-name');
    }
  });
}, options);

const sections = document.querySelectorAll('.name');
sections.forEach((section) => {
  observer.observe(section);
});

//----------------------------------------------------------------
  

  useEffect(() => {
    const links = getElement('.items');
    const navBtnDOM = getElement('.icon');

    const toggleLinks = () => {
      links.classList.toggle('active');
    };

    navBtnDOM.addEventListener('click', toggleLinks);

    // Cleanup event listener on component unmount
    return () => {
      navBtnDOM.removeEventListener('click', toggleLinks);
    };
  }, []);

//------------------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

//-----------------------------------------------------------------------------------

  return (
    <div>
    <div class="progress-container">
        <div class="progress-bar" id="progressBar"></div>
    </div>
    <div className='main-nav'>
      <div className='small-nav'>
        <div className='name'>
          <h2>Naseefu</h2>
        </div>
        <div className='icon'>
          <p><HiMenuAlt3 /></p>
        </div>
      </div>
      <div className='items'>
        <h4 onClick={() => scrollTOSection('home')}>Home</h4>
        <div className='underline'></div>
        <h4 onClick={() => scrollTOSection('skill')}>Skills</h4>
        <div className='underline'></div>
        <h4 onClick={() => scrollTOSection('projects')}>Projects</h4>
        <div className='underline'></div>
        <h4 onClick={() => scrollTOSection('talk')} className='about'>Contact</h4>
        <div className='underline'></div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
