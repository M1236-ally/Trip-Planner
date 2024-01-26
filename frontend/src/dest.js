import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dest.css";
import "./destgot";
import Footer from "./Footer";
const Destination=({setdestdata})=>{
 
  const [selectedOption1, setselectedOption1] = useState(" ");
  const [selectedOption2, setselectedOption2] = useState(" ");
  const [selectedOption3, setselectedOption3] = useState(" ");
  
   async function handleSubmit(e){
    e.preventDefault();
   const response=await axios.post("http://trip-planner-self.vercel.app/dest",{
       selectedOption1,selectedOption2,selectedOption3

     });
            
            setdestdata(response.data.data);
  }

   return(
        <div>
            <div id='hmain'>
            <h1 className="main1">FIND A DESTINATION</h1>
            </div>

           
            <div method='POST'>
						<p class="search-label">Region</p>
						<button class="allbtn" autocomplete="off">All</button>
                 
                       <input type="radio" class="btn1" name="selectedOption1" value="North India" id="north-button" onChange={(e)=>{setselectedOption1(e.target.value)}}/> <label for="north-button" class="l1" >North India</label>
                        <input type="radio" name="selectedOption1" value="South India" id="south-button" class="btn1" onChange={(e)=>{setselectedOption1(e.target.value)}}/><label for="south-button" class="l1" >South India</label>
                        <input type="radio"name="selectedOption1" value="West India" id="west-button" class="btn1"  onChange={(e)=>{setselectedOption1(e.target.value)}}/><label for="west-button" class="l1" >West India</label>
                        <input type="radio" name="selectedOption1" value="East India" id="east-button" class="btn1"  onChange={(e)=>{setselectedOption1(e.target.value)}}/><label for="east-button" class="l1" >East India</label>
						
                       
                        <p class="search-label1">Mood</p>
                        
                        <button class="allbtn" autocomplete="off">All</button>
                        <input type="radio" name="selectedOption2" value="Mountain" id="mountain" class="btn1" onChange={(e)=>{setselectedOption2(e.target.value)}}/> <label for="mountain" class="l1" >Mountain</label>
                        <input type="radio" name="selectedOption2" value="Beaches" id="beaches" class="btn1"  onChange={(e)=>{setselectedOption2(e.target.value)}}/> <label for="beaches" class="l1" >Beaches</label>
                        <input type="radio" name="selectedOption2" value="Religious Places " id="religious" class="btn1"  onChange={(e)=>{setselectedOption2(e.target.value)}}/> <label for="religious" class="l1" >Religious Places</label>
                        <input type="radio" name="selectedOption2" value="Monuments" id="monuments" class="btn1"  onChange={(e)=>{setselectedOption2(e.target.value)}}/> <label for="monuments" class="l1" >Monuments</label>
                        <input type="radio" name="selectedOption2" value="Family Friendly" id="family" class="btn1"  onChange={(e)=>{setselectedOption2(e.target.value)}}/> <label for="family" class="l1" >Family Friendly</label>
                         <div class="last">
                        <p class="search-label1">Airport</p>
                      
                        <button class="allbtn" autocomplete="off">All</button>
                        <input type="radio" name="selectedOption3" value="With Airport" id="with" class="btn1"  onChange={(e)=>{setselectedOption3(e.target.value)}}/><label for="with" class="l1" >With Airport</label>
                        <input type="radio" name="selectedOption3" value="Without Airport" id="without" class="btn1" onChange={(e)=>{setselectedOption3(e.target.value)}}/><label for="without" class="l1" >Without Airport</label>
                         </div>
                       
                         <button id="submit" onClick={handleSubmit}><Link to="/destgot" id="destlink">Submit</Link></button>
                     
                         </div>
                       <p id="para1"> Your top destination is the right choice<br/>
                         for anybody who loves traveling and wants new ideas <br/>
                         for the next trip. Multiple search categories allow<br/>
                          you to filter destinations and find the places<br/>
                           that match your exact requirements.<br/>
                            Suggested cities are rated and ordered <br/>
                            according to the criteria that you picked, <br/>
                            allowing you to see how well <br/>each city matches your preferences.</p>
                       <div>
                        <Footer/>
                       </div>
                         </div>
						

                       
			
    
    )
};

export default Destination;