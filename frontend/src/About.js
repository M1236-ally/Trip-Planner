import React from "react";
import "./About.css";
import Footer from "./Footer";
const About=()=>{

    return(
      <div className="main">
        <div className="head">
        <h1 id="abthead"> About Us</h1>
        </div>
        <div className="container">
          <h2 id="subhead">WHO WE ARE?</h2>
          <p id="content">We provide a free trip planner for 
          users to get a perfect trip plan for <br/>their vacation
          A full plan based on user's preferences.
          A user can customize and refine his/her trip.
          We find the best places,routes and schedules for the trip. <br/>
          </p>
        </div>
        <div>
          <Footer/>
        </div>
        </div>
    )
};

export default About;