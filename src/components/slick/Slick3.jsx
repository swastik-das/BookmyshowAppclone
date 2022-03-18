import React from 'react';
import img3 from '../../images/movie4.jpeg'
import Footer from '../Footer';

const Slick3 = () => {
  return (
    <div>
        <div className='poster_seter'> 
<img   src={img3}  alt="Image not found"  className='slick_poster' /> 
<div className='poster_details'> 
<h2> No Time To Die</h2>
<span>  <p> 61.5k are intrested</p></span>
 <div className='int_or'> 
 <h4> 
    in Cinemas
 </h4>
 <p> Mark instreted to know booking open</p>
 </div>
 <span > <button className='visual'>2d</button> <button className='visual'>3d</button></span>
  <br/>
  <br/>
 <span> 2h 29m•Action,Comedy,Crime•UA•18 Mar, 2022</span>
 <br/>
 <br/>
 
 <a href='/maint'> 
 <button className='tik_book'>Book Tickets</button>
 </a> 
</div>



</div>
  <div className='poster_sub'> 
  <h3> About Movie</h3>
  <p>Myra Devekar is an aspiring director who has a fallout with her director. She gets the support of her producer and is given a task by him to come up with a gripping gangster biopic flick infested with heavy dosage of violence.
   Myra gets an idea that will `kill two birds with one stone` by making a biopic on a real life gangster! Satisfying the producers need for commercialism and her hunger for making a realistic film. Her extensive research only leads to one name, the most menacing, one eyed `Bachchan Pandey` of Baagwa, a ruthless gangster surrounded by quirky yet scary henchmen. Myra discreetly tries her best to find out about Bachchan Pandey, with the help of an old friend who resides in Baagwa, so that he can help gather more information to develop a film script, but fails miserably in all her attempts. However when she finally gets the chance to gain an insight into Bachchan`s life and ends up getting caught by Bachchan Pandey. What happens next in this twist of tales takes us on a roller coaster ride.</p>
  </div>
  <Footer/>
    </div>
  )
}

export default Slick3;