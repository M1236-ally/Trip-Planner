import React, {useState} from "react";
import axios from "axios";
import "./Signup.css";
import {useNavigate} from "react-router";


function Signup(){
   const history=useNavigate();
   const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    async function submit(e){
          e.preventDefault();

          try{

            await axios.post("http://localhost:4000/test2",{
                name,email,password
            })
            .then(res=>{
                if(res.data==="exist")
                { 
                    alert('user already exists');
                     
                }
                else if(res.data==="not exist")
                {
                    alert("User Registered successfully");
                    history('/Login')
                }
            })
            .catch(e=>{
                alert("wrong details")
            })
          }
          catch(e){
            console.log(e);
          }

    }

    return(
        <div className="signup">
        <div className="signup-container">
             <div>
         <h1 id="register">SIGN UP</h1>
             </div>
       
             <form method="post">
             <label className="label" >Username</label>
            <input onChange={(e)=>{setName(e.target.value)}} className="input"
               placeholder="name" type="text" />
            <label className="label" >Email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="input"
             placeholder="email" type="email" />
    
         <label className="label">Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} className="input"
          placeholder="password" type="password" />
          <div>
         <input type="submit" onClick={submit} className="btn"/>
         </div>
        </form> 
        </div>
        </div>
    )
};

export default Signup;