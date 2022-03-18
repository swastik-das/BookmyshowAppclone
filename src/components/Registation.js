import React ,{useState} from 'react'

 import "bootstrap/dist/css/bootstrap.min.css";
 import "./registation.css"; 


 function Registation() {
  
     return (
          <> 
           <div className="raw lbl_class">
          <h3 className="logo_s"> SIGN UP</h3> 
          
                   <div className="cover_set"> 
                
 <form >
  <div className="form-group col-md-12 hider">
    <label for="exampleInputEmail1">Name</label>
    <input type="text"  id="name" name="name" className="form-control" autoComplete="off"
            
            required  />
  </div>

  <div className="form-group col-md-12 hider">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text"  name="email" className="form-control" id="email" autoComplete="off"
              
    />
    <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
   
  <div className="form-group col-md-12">
    <label for="exampleInputPassword1">PhoneNumber</label>
    <input type="text" minLength="10" maxLength="10" name="phone" className="form-control" id="phone" autoComplete="off"
               
    required/>
  </div>

  <div className="form-group col-md-12">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  name="password"  className="form-control" id="password" autoComplete="off"
                
   required />
  </div>

  <div className="form-group col-md-12">
    <label for="exampleInputPassword1">ConforimPassword</label>
    <input type="password"  name="cpassword" className="form-control" id="cpassword" autoComplete="off"
                           required />
       
  </div>
    <input type="submit" name="signup"  className="btn btn-primary sub_btm" id="signup" value="Register"/>
  </form>
  </div>
  </div> 
          </> 
     )
 }
 
 export default Registation