import React from 'react'; 
import './card.css';
const  Card=({list})=>{
    return (
        <div>
    <div className="movie-box">
            <div className="overlay">
              <div className="rating"> 
               <p  style={{color:"white"}}>{list && list.vote_average} </p> 
              </div> 
             <div className="info">
              <p style={{color:" #f84464",lineHeight:"3px"}}> Relese date</p> 
              <p  style={{color:"white"}}>{list && list.release_date} </p> 
               <p style={{color:" #f84464",lineHeight:"2px"}}> overview</p>
               <hr/> 
              <p  style={{color:"white",fontSize:"8px"}}>{list && list.overview} </p>
              </div> 
            <a href='/maint'> 
             <img src={`https://image.tmdb.org/t/p/w200/${ list && list.poster_path}`} alt={`${list && list.title} Poster`}
              height="250" width="170" className="img_props"  />
                   </a>
              <p  className="title_mv">{list && list.title} </p> 

            </div>
            </div>         
            </div>
    )
}

export default Card;