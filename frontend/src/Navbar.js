import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes,NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Trip from "./Trip";
import Login from "./test";
import Signup from "./test2";
import Destination from "./dest";
import Destgot from "./destgot";
import Tripsuggest from "./tripsuggest";
import Payment from "./Payment";

export default function Navbar() {
    const[tripdata,setTripdata]=useState([]);
    const[destdata,setdestdata]=useState([]);

  
    return(    
        <React.Fragment>
        <Router>
            <h1 id="one">TRIP PLANNER</h1>  
            <NavLink id="two" exact activeclassName="active" to="/" >Home</NavLink>
                <NavLink id="three" exact activeclassName="active" to="/About">About Us</NavLink>
                 <NavLink id="five" activeclassName="active" to="/Login" >Login|<button id="logout" onClick={()=>{
           localStorage.removeItem('token')
                 }}>Logout|</button></NavLink> 
                 <NavLink id="six" activeclassName="active" to="/Signup" >Signup</NavLink> 
             <hr/>
             <Routes>
                <Route exact path="/" element={<Home setTripdata={setTripdata}/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Trip" element={<Trip tripdata={tripdata}/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/dest" element={<Destination setdestdata={setdestdata}/>}/>
                <Route path="/destgot" element={<Destgot destdata={destdata}/>}/>
                <Route path="/tripsuggest" element={<Tripsuggest tripdata={tripdata}/>}/>
                <Route path="/Payment" element={<Payment/>}/>
             </Routes>
        </Router>
         </React.Fragment>
    )
}