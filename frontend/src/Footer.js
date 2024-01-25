import React from "react";
import "./Footer.css";
const Footer=()=>{
    return(
        <footer className="footer">
  	 	<div className="outer">
  	 		<div className="footer-col" id="col1">
  	 			<h4>Trip Planner</h4>
  	 			<ul>
  	 		        <li><a href="/">our services</a></li>
  	 				<li><a href="/">privacy policy</a></li>
  	 			</ul>
  	 		</div>
			   <div className="footer-col">
  	 			<h4>Browse</h4>
  	 			<ul>
  	 		        <li><a href="/">Trip</a></li>
  	 				<li><a href="/">Destinations</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">More Options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col" id="col4">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 	   </div>
  	 </div>
  </footer>
    )
};

export default Footer;