import React from 'react';
import './navbar2.css';
const Navbar2 = () => {
  return (
   <>
<div className='nav-2'> 
<ul className='list-item2'> 
<a href='/Movies'><li>  Movie </li> </a>
<a href='/maint'> <li> Strem <sup className='sup_p'> New</sup> </li></a>
 <a href='/maint'> <li> Events </li></a>
<a href='/maint'> <li> Plays  </li> </a>
<a href='/maint'><li> Sports </li> </a>
<a href='/maint'> <li>Activity </li></a>
<a href='/maint'> <li>Buzz </li> </a>
</ul>
<ul className='list-item3'> 
<li>   Listyourshow <sup className='sup_p'> New</sup> </li>
<li> Corporate </li>
<li> Offer  </li>
<li>Gift Card </li>
</ul>
</div>
   </>
  )
}

export default Navbar2