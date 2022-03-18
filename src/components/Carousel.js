import React from 'react';
import './caro.css'; 
import poster1 from '../images/poster_spidy_bookmyshow.png';
import poster2 from '../images/Happy_holi_bookmyshow.png';

const Carousel = () => {
  return (
   <>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href="/movies"> 
      <img  src={poster1} className="img_set" alt="..."/>
      </a>
    </div>
    <div className="carousel-item">
      <a href="/movies">
      <img src={poster2} className="img_set" alt="..."/>
      </a>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
       <div className='roter1'>
       <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
       </div>
  
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
     <div className='roter2'> 
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     </div>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
   </>
  )
}

export default Carousel; 