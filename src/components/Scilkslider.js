import React from 'react';
import Slider from "react-slick";
import img1 from '../images/movie8.jpeg'; 
import img2 from '../images/movie3.jpeg'; 
import img3 from '../images/movie4.jpeg'; 
import img4 from '../images/movie1.jpeg'; 
import img5 from '../images/movie5.jpeg'; 
import img6 from '../images/movie6.jpeg'; 
import img7 from '../images/movie7.jpeg'; 
import './slider.css'; 
import { FaHeart } from "react-icons/fa";

const Scilkslider = () => {
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
    <div className='contener'>     
  <div className='quots'> 
 <h3 className='rec'> Recomened Movies</h3>
 <a href='/Movies'> 
 <h6 className='view_all'> View all </h6>
 </a>
 </div>
  <Slider {...settings}>

          <div className='box-tap'>
            <a href='/pandey'> 
            <img src={img1}  alt="image not found" className='img_poster'/>
            </a>
     
     <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> Bachchan pandey </h4>     
        <p> Drama/Action/Romantic</p> {/*poster 1*/}
           </div>
          </div>

          <div className='img_poster'>
            <a href='/gangu'> 
            <img src={img2}  alt="image not found" className='img_poster'/>
            </a>
       
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> Gangubai </h4>
        <p> Drama/Crime/sex</p>  {/*poster 2*/}
           </div>
          </div>
          
          <div className='img_poster'>
          <a href='/time'> 
          <img src={img3}  alt="image not found" className='img_poster'/>
          </a>
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> No Time To Die</h4>
        <p> Drama/Action/Romantic</p>  {/*poster 3*/}
           </div>
          </div>
          <div className='img_poster'>
          <a href='/conj'> 
            <img src={img4}  alt="image not found" className='img_poster'/>
          
          </a>
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> The Conjuring </h4>
        <p> Horror/Drama</p>  {/*poster 4*/}
           </div>
          </div>
          <div className='img_poster'>
            <a href='/uan'> 

     
          <img src={img5}  alt="image not found" className='img_poster'/>
          </a>
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> Uncharted </h4>
        <p> Drama/Action/Fantacy</p> {/*poster 5*/}
           </div>
          </div>
          <div className='img_poster'>
          <a href='/anb'>
          <img src={img6}  alt="image not found" className='img_poster'/>
          </a>
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4>Anbulance </h4>
        <p> Drama/Action</p> {/*poster 6*/}
           </div>
          </div>
          <div className='img_poster'>
           <a href='/bat'> 
          <img src={img7}  alt="image not found" className='img_poster'/>
          </a>
          <div className='titel-repo'> 
       <span className='fa-icon'>  <FaHeart/>  </span>   
       <p 
        style={{color:"white",position:"relative",top:"10px",left:"-40px" }}
       > 78% 190 vote</p>
         </div>
        <div className='mv_title'> 
        <h4> The Batman </h4>
        <p> Drama/Action/Romantic</p>  {/*poster 7*/}
           </div>
          </div>
        </Slider>
    </div>
  )
}

export default Scilkslider