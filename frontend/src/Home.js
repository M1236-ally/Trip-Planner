import React, { useEffect } from "react";
import "./App.css";
import "./dest";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./tripsuggest";
import "./test";

function Home({setTripdata}) {
   const navigate=useNavigate();
   const[Destination,setDest]=useState('')
   const[Days,setDays]=useState('')
   const[People,setPeople]=useState('')
   const[Budget,setBudget]=useState('')
   const[Date,setDate]=useState('')
   
   

   async function submit(e){

      e.preventDefault();
      const response=await axios.post("http://localhost:4000/home",{
             Destination,Days,People,Budget,Date
                        });
               //console.log(response)
               setTripdata(response.data.data)
              // setHoteldata(response.data1.data)
   
         }

         useEffect(()=>{
            if(!localStorage.getItem('token')){
                    navigate('/Login')
            }
        },)

   return (
     
      <div id="body">
      
         <div id="Pic">
         </div>

         <div id="Secondsection">
            <p id="firsttext">
               <p>Tired of planning a HOLIDAY?</p>
               <p>Get a full</p>
               <p>HOLIDAY PLAN!</p>

            </p>
            <form action="/home" method="post">
            <section id="planner">
               <h2 id="head1">TRIP PLANNER</h2>
               <p id="hl1">DESTINATION</p>
               <input onChange={(e)=>{setDest(e.target.value)}} id="pl1" type="text"  placeholder="Destination" autoComplete="off" />

               <p id="hl1">NUMBER OF DAYS</p>
               <input onChange={(e)=>{setDays(e.target.value)}} id="pl1" type="number"  placeholder="Days" autoComplete="off"/>

               <p id="hl1">NUMBER OF PEOPLE</p>
               <input onChange={(e)=>{setPeople(e.target.value)}} id="pl1" type="number"  placeholder="People" autoComplete="off"/>

               <p id="hl1">BUDGET</p>
               <input onChange={(e)=>{setBudget(e.target.value)}} id="pl1" type="number" placeholder="Budget" autoComplete="off"/>

               <p id="hl1">DATE</p>
               <input onChange={(e)=>{setDate(e.target.value)}} id="pl1" type="date" placeholder="Date" autoComplete="off"/>

               <div id="btnhead">
               <button onClick={submit} id="planbtn"><Link to="./tripsuggest" id="planLink">SUBMIT</Link></button>
               </div>
            </section>
            </form>
         </div>

         <div id="Destin">
            <div id="AlignedImg">

               <div id="Camping">
                  <img id="im1" src="https://img.freepik.com/free-photo/couple-tourists-enjoying-camping-by-lake_335224-1342.jpg?w=2000" alt="" />
               </div>
               <div id="Rafting">
                  <img id="im1" src="http://rishikeshdaytour.com/blog/wp-content/uploads/2022/02/River-Rafting-Price-in-Rishikesh-Starts-@-%E2%82%B9-600-Per-Person.jpg" alt="" />

               </div>

               <div id="Trekking">
                  <img id="im1" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190823125442/Young-woman-backpacker-trekking-at-the-himalaya-mountain.jpg" alt="" />
               </div>

            </div>
            <div id="AlText">
               <p>Want to spend your holiday<br />at a mountain or a beach</p>
               <p id="Al1"><br />STILL CONFUSED?
                  <br />Find a place here</p>
                 
                 <button>
                    <Link to="/dest" id="Destbtn">Search</Link>
                 </button>
                 

            </div>
         </div>

         <div id="Trending">
            <h2 id="TrendH">TRENDING DESTINATIONS</h2>
            <div className="image1">
               <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/shutterstock_2773329831.jpg" alt="" id="trimg" />
               <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" alt="" id="trimg" />
               <img src="https://www.tourism-of-india.com/blog/wp-content/uploads/2017/04/munnar.jpg" alt="" id="trimg" />
               <img src="http://im.rediff.com/getahead/2009/jul/07sld5.jpg" alt="" id="trimg" />
            </div>
         </div>
         <div className="foot">
            <Footer />
         </div>
      </div>


   );
}

export default Home;
    