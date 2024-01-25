import React from "react";
import "./Payment.css"; 

export default function Login(){
        
    return(
        <div id="Paymain">
        <div className='containerpay'>
        <div className="card-details">
          <p id="Payhead">PAY USING CREDIT OR DEBIT CARD</p>
    
          <div className="card-number">
            <label> Card Number </label>
            <input
              type="text"
              className="card-number-field"
              placeholder="###-###-###"/>
          </div>
          
          <div className="date-number">
            <label> Expiry Date </label>
            <input type="text" className="date-number-field" 
                   placeholder="DD-MM-YY" />
          </div>
    
          <div className="cvv-number">
            <label> CVV number </label>
            <input type="text" className="cvv-number-field" 
                   placeholder="xxx" />
          </div>
          <div className="nameholder-number">
            <label id="hold1"> Card Holder name </label>
            <input
              type="text"
              className="card-name-field"
              placeholder="Enter your Name"/>
          </div>
          <button type="submit" 
                  className="submit-now-btn">
            Submit
          </button>
        </div>
        </div>
        </div>
    )

}