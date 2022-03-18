import React from 'react';
import Slider from "react-slick";
import "./slider2.css"
import imgEnt1 from '../images/Workshop.png'; 
import imgEnt2 from '../images/Stayfit.png'; 
import imgEnt3 from '../images/Kidzone.png'; 
import imgEnt4 from '../images/ComedyShow.png'; 
import imgEnt5 from '../images/MusiceZone.png'; 
import imgEnt6 from '../images/Games.png'; 
import imgEnt7 from '../images/Upskill.png'; 
import imgEnt8 from '../images/Cooking.png'; 

const Slider2 = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
     <div className='contener_ent'>
         <div className='quots'> 
 <h3 className='rec'> The Best Entertainment</h3>
 <h6 className='view_all' style={{color:"#F2F3F4"}}> View all </h6>
 </div>
           <Slider {...settings}>
          <div>
          <img src={imgEnt1}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt2}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt3}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt4}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt5}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt6}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt7}  alt="image not found" className='img_EntPoster'/>
          </div>
          <div>
          <img src={imgEnt8}  alt="image not found" className='img_EntPoster'/>
          </div>
        </Slider>
    </div>
  )
}

export default Slider2;


