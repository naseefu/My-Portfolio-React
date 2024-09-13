import React from "react";
import './css/talk.css'
import './css/loading.min.css'
import { useState } from "react";
import axios from 'axios'

function Talk(){

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [result,setResult] = useState('');
  const [success,setSuccess] = useState("Let's Get Started");
  const [buttonClass,setButtonClass] = useState('talk-btn');

  const handleSubmit=(e)=>{
    setSuccess('');
    e.preventDefault();
    axios.post('https://portfolio-server-production-ca09.up.railway.app/api/email', {name,email,result})
    .then(response=>{
      setSuccess(response.data);

      setTimeout(()=>{
        setSuccess("Let's Get Started");
      },3000);

    }).catch(error=>{
      setSuccess("Failed to send mail");
      setTimeout(()=>{
        setSuccess("Let's Get Started");
      },3000);
    })
    

  }


  return(
    <div className="talk-main">
      <div className="talk-title">
        <h2 style={{color:"#27C393"}}>Let's talk</h2>
        <p>Whether you have a question, a project idea, or just want to say hi, feel free to reachout. You can contact me through the form or connect with me on linkedin. </p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="talk-forms">
        <div className="talk-name">
          <h4>Name</h4>
          <input type="text" className="name-talk" value={name} onChange={(e)=>setName(e.target.value)} required></input>
        </div>
        <div className="talk-email">
          <h4>Email Address</h4>
          <input type="text" className="name-email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
        </div>
        <div className="talk-message">
          <h4>Message</h4>
          <input type="text" className="name-message" value={result} onChange={(e)=>setResult(e.target.value)} required></input>
        </div>
        <div className="bttn">
          {success===''?<button className="buttonload load"><i className="fa fa-spinner fa-spin"></i> {success}</button>:<button className={buttonClass}>{success}</button>}
        </div>
      </div>
      </form>
    </div>
  )
}
export default Talk