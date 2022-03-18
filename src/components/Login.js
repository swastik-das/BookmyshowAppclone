import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import logobar from '../images/pngwing.png';
import './login.css'


function Login() {
   const history = useHistory(); 
   const [email,setEmail] = useState(''); 
   const [password,setPassword] = useState(''); 
  
   const loginUser  = async (e)=>{
   e.preventDefault();
     const res = await fetch("/signin",{
         method:"POST", 
         headers:{
            "Content-Type":"application/json"  
         }, 
            body:JSON.stringify({ 
                 email,
                 password
            })
     }); 
   const data =res.json(); 
   if(res.status === 400 || !data){
    window.alert("invelid credential")
   } else{
    window.alert("login successful");
   history.push("/")
   }   
   } 
    return (
       <> 

<div className="container"> 
         <div className="raw mid_back"> 
         <img src={logobar}   className="logo_seter"  alt="img not ava.." />
          <br/>
          <br/>
          <br/>
         <form method="POST"> 
           <div className="from-group"> 
         <div  className="col-md-12"> 
         <div className="icon_set_e"> 
           <span className="user_icon"><FaUserAlt/></span>
           </div>
     <input type="text" className="form-control email_01" placeholder="Enter your Email" id="txt_email"
      name="email"  value={email}  onChange={(e)=>setEmail(e.target.value)}     required />
           </div>
           </div>
           <br/>
           <div className="form-group"> 
           <div  className="col-md-12"> 
           <div className="icon_set_e"> 
           <span className="user_icon"><FaLock/></span>
           </div>
      <input type="password" className="form-control password_01" placeholder="Password" id="txt_password" name="password"
            onChange={(e)=>setPassword(e.target.value)}    required />
         </div>
         </div>
         <br/>
         <div  className="col-sm-12"> 
   <input className="form-control btn_01" onClick={loginUser}  type="submit" value="login" />
         </div>
         <div  className="col-sm-12"> 

          <NavLink to="/Registation" className="text_nv"> 
      <div className="btn_reg">  
         <p> Don't have Account</p>
         <p> Signup</p>
      </div>
         </NavLink>

         </div>
         </form>
      <br/>
  <p align="center"> </p>
         </div>
        </div>



       </> 
    )
}

export default Login; 