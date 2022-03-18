import React from 'react';
import "./sliderauto.css"; 
import rpimg from '../images/Rupay.png'; 
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import img1 from '../images/movie8.jpeg'; 
import img2 from '../images/movie3.jpeg'; 
import img3 from '../images/movie4.jpeg'; 
import img4 from '../images/movie1.jpeg'; 
import img5 from '../images/movie5.jpeg'; 
import img6 from '../images/movie6.jpeg'; 
import img7 from '../images/movie7.jpeg'; 

const Sliderauto = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900,
        pauseOnHover: true
      };
  return (
    <div className='full_beg'>
         <div className='img_setr'> 
         <img src={rpimg} alt="image not found"  className='rupay_img'/>
         </div>
         <div className='quotsd'> 
 <h4 className='rec1'> Recomened Movies</h4>
 <p className='txtx_sub'> Brand New Release Everyday</p>
 </div>
  <div className='contener_pre'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
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
        <div className='ml-title'> 
        <h4> Radhey shyam </h4>
        <p> Drama/Action/Romantic</p>  {/*poster 7*/}
           </div>
          </div>
        </Slider>

  </div>
    </div>
  )
}

export default Sliderauto