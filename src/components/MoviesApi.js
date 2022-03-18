import React from 'react';
import Card from './Card';
import axios from "axios";
import { useEffect, useState } from "react";
import "./Moviesapi.css"; 
import Footer from './Footer';


     function MoviesApi() {
     const [list, setList] = useState();
     let [page, setPage] = useState(1); 
     useEffect(() => {
     axios
     .get(
     `https://api.themoviedb.org/3/movie/popular?api_key=e9199093e93dc731e4165db971f9327b&language=en-US&page=${page}`
      )
     .then(({ data }) => setList(data.results))
     .catch((err) => console.log(err));
      }, [page]);

      return (
        <> 
   <div className='box-filter'>  
   <h4 className='filter_txt_head'> Filter</h4>
  <div className='filter_option '> 
  
  <p>Drama </p>  &nbsp;   &nbsp;  <p> Action</p>  &nbsp;   &nbsp;<p>Comedy</p> <br/>

  </div>
  <div className='filter_option '> 
   <p> Thriler</p>  &nbsp;   &nbsp;  <p> Adventure</p>  &nbsp;   &nbsp;<p> Crime</p> <br/>
  </div>
  <div className='filter_option '> 
   <p> Thriler</p>  &nbsp;   &nbsp;  <p> Adventure</p>  &nbsp;   &nbsp;<p> Crime</p> <br/>
  </div>
   </div>
   <div className='roner_hond'> 
 <h4 className='title_b'> Buy/Rent Holi Specail Offer Movies Online </h4>
 <br/>
   <div> 
 <ul className='list_lang'> 
     <li> English</li>
     <li> Hindi</li>
     <li> Bangali </li>
     <li> Tamil </li>
     <li> Malayalam </li>
     <li> English</li>
     <li> Hindi</li>
     <li> Bangali </li>
     <li> Tamil </li>
     <li> Malayalam </li>
 </ul>
   </div>
    </div>
      <div className="movies_box"> 
       <a href='/maint'> 
      <div className="grid-container">
      {list && list.map((movie) => <Card list={movie} />)}
       </div>
       </a>
      </div> 
   
        </> 
    )
}

export default MoviesApi; 
