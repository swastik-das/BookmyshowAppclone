import React from 'react';
import main_t from '../images/codingNow.png'; 
import"./maint.css"; 

const Maint = () => {
  return (
    <>
  <div className='box_maint'> 
  <img src={main_t} alt="iamge not find"  className='img_mn' />
  </div>
  <h5 align="center"> 
  Sorry this page is on maintenance we'll be back soon 
  </h5>
   <div className='holder'>  
    <a href='/'> 
  <button className='btn_h'> go to home page</button>
  </a>
   </div>

    </>
  )
}

export default Maint