import React from "react";
import ph from './figures/ph.png'
import './css/Phy.css'
function Phylosophy(){
  return(
    <div className="ph-content">
      <div className="ph-para">
        <div className="ph-title">
          <h1>Philosophy & Values</h1>
          <p>I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
        </div>
        <div className="ph-btn">
          <button className="phbtn">More about me</button>
        </div>
      </div>
      <div className="ph-img">
        <img src={ph} alt="nah"></img>
      </div>
    </div>
  )
}
export default Phylosophy