
import React from 'react';
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Scilkslider from './Scilkslider';
import Slider2 from './Slider2';
import Handpick from './Handpick';
import Sliderauto from './Sliderauto';
import Footer from './Footer';

 
 const Home = () => {
   return (
    <>
<Carousel/>
<br/>
<Scilkslider/>
<br/><br/>
<Handpick/>
<br/><br/>
<Slider2/>
<br/>
<br/>
<br/>
<Sliderauto/>

<Footer/>
    
    </>
   )
 }
 
 export default Home