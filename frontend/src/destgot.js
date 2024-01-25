import React from "react";
import "./destgot.css";
import Footer from "./Footer";

const Destgot=({destdata})=>{
  return(
    <div>
      <h1 id="destresult">Destination Based On Your Choices!</h1>
      <ul>
        {destdata.map(c=><li key={c}>
             <div id="hedest">
               <div id="destim">
               <img src={c.DestImg} alt=" " id="findim"/>
               </div>
               <div id="descim">
               <h2 id="desc1">{c.Place}</h2>
              <p id="desc2">{c.ImgDesc}</p>
              </div>
              </div>
            </li>
        )}
      </ul>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Destgot;

