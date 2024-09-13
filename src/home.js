import React from "react";
import home from './figures/home3.JPG'
import './css/home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Home(){

  const handleSubmit = (url)=>{
    window.open(url, '_blank');
  }

  return(
    <div className="home">
      <div className="image">
        <img src={home} alt="nah"></img>
      </div>
      <div className="content">
        <div className="names">
          <h2>I'm Naseefu Rahman</h2>
          <h2>A Full Stack Developer</h2>
          <h2 className="base">Based in India</h2>
          <p>As a full stack developer with unparalleled passion, I bring exceptional skills to your project. If you need a dedicated expert to elevate your tech solutions, I’m your guy.</p>
          <div className="social">
            <p onClick={()=>handleSubmit('https://www.linkedin.com/in/naseefu-rahman-karumannil/')}><FaLinkedin/></p>
            <p onClick={()=>handleSubmit('https://github.com/naseefu')}><FaGithub/></p>
            <p onClick={()=>handleSubmit('https://www.instagram.com/_naseef____?igsh=ZTVpaGVwbjVxenow&utm_source=qr')}><FaInstagram/></p>
            <p onClick={()=>handleSubmit('mailto:naseefrahman90@gmail.com')}><IoIosMail/></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home