import React from "react";
import { useLocation } from "react-router";
import Footer from "./Footer";
import "./Trip.css";
import jsPDF from "jspdf";
import "./Payment";
import {Link} from "react-router-dom";

export default function Trip({tripdata}){

    const location=useLocation();
    const state=location.state;
    console.log(state);
    
    const generatepdf=()=>{
      const report=new jsPDF('landscape','pt','a3');
      report.html(document.querySelector('#main')).then(()=>
      {
         report.save('trip.pdf');
      })
   }
 return(
   <div id="start">
    <div id="main">
         <div id="container">
            <h1 id="tit">Your Trip</h1>
            {tripdata.map(c => <li id="li1" key={c}>
            <h1 id="d1">Destination-</h1>
            <h1 id="pla">{c.Destination}</h1>
            <h1 id="d1">Date-</h1>
            <h1 id="pla">{c.Date}</h1>
            </li>)}
                <h1 id="pl">Places-</h1>
            <h2 id="pla">{state.place1}</h2>
            <h2 id="pla">{state.place2}</h2>
            <h2 id="pla">{state.place3}</h2>
            <h2 id="pla">{state.place4}</h2>
            <h2 id="pla">{state.place5}</h2>
            <h1 id="hl">Hotels-</h1>
            <h2 id="three1">{state.hotel1}</h2>
            <h2 id="three1">{state.hotel2}</h2>
            <h2 id="three1">{state.hotel3}</h2>
            </div>
    </div>
    <button onClick={generatepdf} type='button' id='submittrip1'>Get Your trip pdf</button>
    <button id="hoteltrip"><Link to="/Payment" id="destlink">Book Your Hotel Now</Link></button>
       
    <div id="ftlast">
      <Footer/>
      </div>
    </div>
 )
};