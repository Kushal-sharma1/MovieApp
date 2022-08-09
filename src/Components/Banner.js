import React, { Component } from 'react'
import {movies} from './getmovies'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'
import {API_KEY} from '../secrets'
import { Carousel } from 'react-responsive-carousel';
export default class Banner extends Component {

  constructor(){
   super();
   this.state ={
    movies:[],
    currpage:1
   }

  }



  async  componentDidMount(){
     
    let res  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currpage}`);
     
  
    let newarr = res.data.results;
      newarr = newarr.slice(0,10);
    //  console.log(typeof res);
    this.setState(
      {
        movies: [...newarr],
        currpage:1
      }
    )

   }
  render() {
   
    return (
        <>
        {  this.state.movies.length == "" ?(
            <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>

        ):(
          <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
         {
          this.state.movies.map((movie)=>(

            <div className="card banner-card" >
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt="..."/>
            <div className="card-body">
              <h5 className="card-title banner-title">{movie.title}</h5>
              <p className="card-text banner-text">{movie.overview}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
             </div>
           </div>



          ))

         }

       </Carousel>
        )
        

        }
     </>
    );
  }
}
