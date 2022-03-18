import React from 'react';
import './navbar.css';
import logo from '../images/logo.png';
//import { BiSearch} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  return (
 <>
   <nav> 
<div> 
  <a href='/'> 
 <img src={logo}  className='logo-png'/>
 </a>
</div>
  <ul className='list-item'> 
<li>   
   <input type="text"  className='searchBar' placeholder='Search for Movies, Events, Plays, Sports and Activities'/> 
   <span className='b_icon'> <BiSearch/></span>
    </li>
<li> Orissa  </li>
<a href='/login'>
<li> <button className='sign-in'> Login / Register</button></li>
</a> 

  </ul>
   </nav>
 </>
  )
}

export default Navbar; 