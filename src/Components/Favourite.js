import React, { Component } from 'react'
import axios from 'axios'
import {API_KEY} from '../secrets'
export default class Favourite extends Component {

constructor(){
  super();
  this.state ={
    movies :[],
    genere:[],
    currGen:"All genere",
    currText:"",
    limit:5,
    currpage:1,
  }
}
handleText =(e)=>{

  this.setState(
    {
      currText: e.target.value
    }
  )
}
handleclick=(ele)=>{
  this.setState(
   {
     currGen: 
     ele
   }
  )
 
  }

  sortPopularityAsc=()=>{
      let allMovies = this.state.movies;
      allMovies.sort((objA,objB)=>{
        return objA.popularity-objB.popularity;
      })
      
    this.setState({
      movies:[...allMovies]
    })

  }
  sortPopularityDsec=()=>{
    let allMovies = this.state.movies;
    allMovies.sort((objA,objB)=>{
      return objB.popularity-objA.popularity;
    })
    
  this.setState({
    movies:[...allMovies]
  })

}
sortRatingAsc=()=>{
  let allMovies = this.state.movies;
  allMovies.sort((objA,objB)=>{
    return objA.vote_average-objB.vote_average;
  })
  
this.setState({
  movies:[...allMovies]
})

}
sortRatingDsec=()=>{
  let allMovies = this.state.movies;
  allMovies.sort((objA,objB)=>{
    return objB.vote_average-objA.vote_average;
  })
  
this.setState({
  movies:[...allMovies]
})

}

 async componentDidMount(){
  let genereId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'}
 
 
  //  let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  let results= JSON.parse(localStorage.getItem("movies"));
  let genArr =[];
 
results.map((movieobj)=>{
    if(!genArr.includes(genereId[movieobj.genre_ids[0]])){
       genArr.push(genereId[movieobj.genre_ids[0]]);
    }
  }
)
  genArr.unshift("All genere");
  
  console.log(genArr);
   this.setState(
    {
      movies:[...results],
      genere:[...genArr]
    }
  )
 
}

  render() {
    let genreId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
    let FavouriteFilter =[];


    if(this.state.currGen !="All genere"){

      FavouriteFilter = this.state.movies.filter((obj)=>
         genreId[obj. genre_ids[0]]==this.state.currGen
      )
      //on the basis of search text
      if(this.state.currText!=''){
       FavouriteFilter = FavouriteFilter.filter((obj)=>{
       
        let moviename = obj.original_title.toLowerCase();
         return moviename.includes(this.state.currText);

       })
      }
    }else{
      FavouriteFilter =this.state.movies;
      //on the basis of search text
      if(this.state.currText!=''){
        FavouriteFilter = FavouriteFilter.filter((obj)=>{
        
         let moviename = obj.original_title.toLowerCase();
          return moviename.includes(this.state.currText);
 
        })
       }
    }
   
    return (
      <>
        <div class="container">
            <div class="row">
            <div class="col-3">
                <ul class="list-group">
                  {
                    this.state.genere.map(( generele)=>(
                      this.state.currGen==generele?
                      <li class="list-group-item active" aria-current="true" onClick={()=>{this.handleclick(generele)}}>{generele}</li>
                       :<li class="list-group-item " aria-current="true" onClick={()=>{this.handleclick(generele)}}>{generele}</li>
                    ))
                     

                  }
                    
                    
                    
                </ul>
            </div>
            <div class="col">
                <div class="row"> 
                     <input type={'text'} placeholder='Search' className='col-8' value={this.state.currText} onChange={this.handleText}></input>
                     <input type ={'number'} placeholder='5' className='col-4'></input>
                </div>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col"><i class="fa-solid fa-angle-up" onClick={this.sortPopularityAsc}></i>Popularity<i class="fa-solid fa-angle-down" onClick={this.sortPopularityDsec}></i></th>
                            <th scope="col"><i class="fa-solid fa-angle-up" onClick={this.sortRatingAsc}></i>Rating<i class="fa-solid fa-angle-down"onClick={this.sortRatingDsec}></i></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                      {
                            FavouriteFilter.map((movieobj)=>(
                              <tr>
                                                                
                              <td>
                              <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} style ={{ width:'8rem'}}alt="..."/>
                              {movieobj.title}
                              </td>
                              <td>{genreId[movieobj.genre_ids[0]]}</td>
                              <td>{movieobj.popularity}</td>
                              <td>{movieobj.vote_average}</td>
                              <td><button type="button" class="btn btn-outline-danger">Delete</button></td>

                              </tr>


                            ))   
     


                      }

                      
                        </tbody>
                        </table>
            </div>
            </div>
        </div>

              <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
      
      </>
    )
  }
}
