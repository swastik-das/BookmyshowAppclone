import React from 'react';
import "./footer.css";
import logo from '../images/logo.png';
import {BsFacebook } from "react-icons/bs"; 
import {BsInstagram } from "react-icons/bs"; 
import {BsPinterest } from "react-icons/bs"; 
import {BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
<footer> 
 <div className='txt-pane'> 
 <p className='P_foot'> COUNTRIES</p>
 <p className='P_foot'> Indonesia | Singapore | UAE | Sri Lanka | West India</p>
 <br/>
 <p className='P_foot'> HELP</p>
 <p className='P_foot'> About As | Contact us | Current Opening | Press | Press covrage | Site Map | FAQ | Others</p>
 <br/>
 <p className='P_foot'> BOOKMYSHOW EXCLUSIVE</p>
 <p className='P_foot' > About As | Contact us | Current Opening | Press | Press covrage | Site Map | FAQ | Others</p>
  </div>
   <div> 
 <br/>
 <span> <hr className='hr1'/>    </span>
 <span> <hr className='hr2'/>    </span>
 <div className='img_foot'> 
  <img   src={logo}  className='logo_foot' />
  </div>
 </div>
  <div className='logo_list'> 
 <ul className='list_hopper'> 
    <li> <BsFacebook/></li> 
    <li> <BsInstagram/></li> 
    <li> <BsPinterest/></li> 
    <li> <BsTwitter/></li> 
 </ul>
  </div>
  <br/>
  <br/>
   <p align="center" className='p_port1'> Copyright 2022 &copy; Bigtree Entertainment Pvt. Ltd. All Right Resverved</p>
   <p align="center" className='p_port2'> 23 years ago in South Africa a seed of an idea was planted, a dream was shared. Inception happened. 22 years on, we look back at what we've built. Leave it up to</p>
   <p align="center" className='p_port3'> us, and we'd love to do it all over again. Here's our story</p>
  </footer>
  </div>
  )
}

export default Footer