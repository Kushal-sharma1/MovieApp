import React, { Component } from 'react'
import { movies } from './getmovies'
export default class List extends Component {
   
  render() {
    let movie = movies.results ;
    return (
      <>
      {
        movie.length==0 ?(
            <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        ):
        (
        <div>
        <h1 className='text-center'><strong>Trending</strong></h1>
        <div className='movie-list'>
       
        { movie.map((movieObj)=> (
                    <div className="card movie-card" >
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title movie-title">{movieObj.title}</h5>
                    {/* <p className="card-text banner-text">{movie.overview}</p> */}
                    <div className='wrapper-button'><a href="#" className="btn btn-primary movie-button">Add to Favourite</a></div>
                    </div>
                  </div>

                )
              )

        }
        </div>
        </div>
     )

      
    }
    </>
    );
    
  }
}
