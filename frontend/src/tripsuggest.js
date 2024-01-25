import React from "react";
import "./tripsuggest.css";
import Footer from "./Footer";
import { useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import "./Trip";


const Tripsuggest=({tripdata})=>{
  const [place1, setplace1] = useState(" ");
  const [place2, setplace2] = useState(" ");
  const [place3, setplace3] = useState(" ");
  const [place4, setplace4] = useState(" ");
  const [place5, setplace5] = useState(" ");
  const [hotel1, sethotel1] = useState(" ");
  const [hotel2, sethotel2] = useState(" ");
  const [hotel3, sethotel3] = useState(" ");
//   const [dest, setdest] = useState(" ");

const dest=tripdata.Destination;

  const setfinaldata= {
    dest,place1,place2,place3,place4,place5,hotel1,hotel2,hotel3};


  return(
    <div>
        <h1 id="head">GET YOUR TRIP READY NOW!</h1>
        <ul>
        {tripdata.map(c => <li key={c}>
          <h1 className="title1">{c.Destination}</h1>
          <h2 id="tour">FAMOUS TOURIST PLACES</h2>
          <div className="row">
            <div className="column">
               <div className="card">
            

          <img src={c.PlaceImag[0]} alt=" " id="p1"/>
           <figcaption id="h1">{c.PlaceName[0]}</figcaption> 
           <input type="radio" name="place1" id="place1" value={c.PlaceName[0]} onChange={(e)=>{setplace1(e.target.value)}}/><label for="place1" id="place1">ADD PLACE</label>
           
            </div>
            </div>
            <div className="column">
               <div className="card">
            <img src={c.PlaceImag[1]} alt=" " id="p1"/>
            <figcaption id="h1">{c.PlaceName[1]}</figcaption>
            <input type="radio" name="place2" id="place2" value={c.PlaceName[1]} onChange={(e)=>{setplace2(e.target.value)}}/><label for="place2" id="place2">ADD PLACE</label>

            </div>
            </div>
            <div className="column">
               <div className="card">
            <img src={c.PlaceImag[2]} alt=" " id="p1"/>
            <figcaption id="h1">{c.PlaceName[2]}</figcaption>
            <input type="radio" name="place3" id="place3" value={c.PlaceName[2]} onChange={(e)=>{setplace3(e.target.value)}}/><label for="place3" id="place3">ADD PLACE</label>
            </div>
            </div>
            </div>
            <div className="row1">
            <div className="column1">
               <div className="card">
            <img src={c.PlaceImag[3]} alt=" " id="p1"/>
            <figcaption id="h1">{c.PlaceName[3]}</figcaption>
            <input type="radio" name="place4" id="place4" value={c.PlaceName[3]} onChange={(e)=>{setplace4(e.target.value)}}/><label for="place4" id="place4">ADD PLACE</label>
            </div>
            </div>
            <div className="column1">
               <div className="card">
            <img src={c.PlaceImag[4]} alt=" " id="p1"/>
            <figcaption id="h1">{c.PlaceName[4]}</figcaption>
            <input type="radio" name="place5" id="place5" value={c.PlaceName[4]} onChange={(e)=>{setplace5(e.target.value)}}/><label for="place5" id="place5">ADD PLACE</label>
            </div>
            </div>
            </div>
            <h2 id="tour">FAMOUS HOTELS</h2>
           <div id="ht">
            <div id="hotel">
          <img src={c.HotelImag[0]} alt=" " id="p2"/>
             </div>
             <div id="hname">
            <h2 id="h2">{c.HotelName[0]}</h2>
            <input type="radio" name="hotel1" id="hotel1" value={c.HotelName[0]} onChange={(e)=>{sethotel1(e.target.value)}}/><label for="hotel1" id="hotel1">ADD HOTEL</label>
               </div>
               </div> 
               <div id="ht">
            <div id="hotel">
            <img src={c.HotelImag[1]} alt=" " id="p2"/>
            </div>
             <div id="hname">
            <h2 id="h2">{c.HotelName[1]}</h2>
            <input type="radio" name="hotel2" id="hotel2" value={c.HotelName[1]} onChange={(e)=>{sethotel2(e.target.value)}}/><label for="hotel2" id="hotel2">ADD HOTEL</label>
            </div>
               </div> 
               <div id="ht">
            <div id="hotel">
            <img src={c.HotelImag[2]} alt=" " id="p2"/>
            </div>
             <div id="hname">
            <h2 id="h2">{c.HotelName[2]}</h2>
            <input type="radio" name="hotel3" id="hotel3" value={c.HotelName[2]} onChange={(e)=>{sethotel3(e.target.value)}}/><label for="hotel3" id="hotel3">ADD HOTEL</label>
            </div>
            </div>
            
          </li>)}
      </ul>
      <button id="submittrip"><Link to="/Trip" state={setfinaldata} id="destlink">Submit</Link></button>
                     
      <div>
        <Footer/>
      </div>
        
    </div>
  )

}
  
export default Tripsuggest;
  
  