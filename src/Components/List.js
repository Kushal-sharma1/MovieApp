import React, { Component } from 'react'
import axios from 'axios'
import {API_KEY} from '../secrets'
export default class List extends Component {
   constructor(){
    super();
    this.state ={
      hover:"",
      parr:[1],
      currpage:1,
      movies:[],
      fm:[]

    }
   }
   handleEnter(id){
    this.setState(
      {
        hover:id,
      }
    )
   }
   handleRemove(){
    this.setState(
      {
        hover:"",
      }
    )
   }
   changeNext= async ()=>{
        
    let res  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currpage}`);
    console.log(res.data);
    this.setState(
      {
        movies: [...res.data.results],
      }
    )

   }
   handleNext =()=>{
    let len =this.state.parr.length;
    let last =this.state.parr[len-1]+1;
    // manage increasing arr size if we do previous
    this.setState(
      {
        parr:[...this.state.parr ,last],
        currpage:this.state.currpage+1
      }
       ,this.changeNext);
   
   }
   handlePrevious =()=>{
    if(this.state.currpage <=1)return;
      this.setState(
          {
            currpage:this.state.currpage-1,

          }
        ,this.changeNext);
   }

   handleFavourite =(movieObj)=>{
    let oldlocalStorage = JSON.parse(localStorage.getItem("movies")) || [];
    if(this.state.fm.includes(movieObj.id)){
     oldlocalStorage= oldlocalStorage.filter((movie)=>{
        return movieObj.id !=movie.id;
      });

    }else{
     oldlocalStorage.push(movieObj);
    }
    //update ids
    let fmdata = oldlocalStorage.map((movie)=>{
       return movie.id;
    })
    //set local storage
    localStorage.setItem("movies",JSON.stringify(oldlocalStorage));
    //update state
    this.setState({
      fm:fmdata
    })


   }
  async  componentDidMount(){
     
    let res  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currpage}`);
   
    let oldlocalStorage = JSON.parse(localStorage.getItem("movies")) || [];
    let fmdata = oldlocalStorage.map((movie)=>{
      return movie.id;
   })
    this.setState(
      {
        movies: [...res.data.results],
        fm:[...fmdata]
      }
    )

   }
  render() {

    return (
      <>
      {
        this.state.movies.length==0 ?(
            <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        ):
        (
        <div>
        <h1 className='text-center' ><strong>Trending</strong></h1>
        <div className='movie-list'>
       
        { this.state.movies.map((movieObj)=> (
                    <div className="card movie-card" 
                    onMouseEnter={()=>{this.handleEnter(movieObj.id)}} onMouseLeave ={()=>{this.handleRemove()}}>
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movie-img" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title movie-title">{movieObj.title}</h5>
                   {
                    this.state.hover==movieObj.id &&
                    <div className='wrapper-button'>
                      <a className="btn btn-danger movie-button" onClick={()=>{this.handleFavourite(movieObj)}}>
                         { this.state.fm.includes(movieObj.id) ?"Remove From Favourite ": "Add to Favourite"}
                      </a>
                    </div>
                   }
                    
                    </div>
                  </div>

                )
              )

        }
        </div>
        </div>
     )

      
    }
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
     <li class="page-item disabled" onClick={()=>{this.handlePrevious()}}>
      <a class="page-link">Previous</a>
    </li>
    {
      this.state.parr.map((pagenum)=>(

         <li class="page-item"><a class="page-link" href="#">{pagenum}</a></li>


      ))
       
    }
    
    <li class="page-item" onClick={()=>{this.handleNext()}}>
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </>
    );
    
  }
}
