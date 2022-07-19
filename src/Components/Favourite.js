import React, { Component } from 'react'
import axios from 'axios'
import {API_KEY} from '../secrets'
export default class Favourite extends Component {

constructor(){
  super();
  this.state ={
    movies :[],
    genere:[],
    currGen:"All genere"
  }
}

 async componentDidMount(){
  let genereId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'}
 
 
   let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  
  let genArr =[];
 
res.data.results.map((movieobj)=>{
    if(!genArr.includes(genereId[movieobj.genre_ids[0]])){
       genArr.push(genereId[movieobj.genre_ids[0]]);
    }
  }
)
  genArr.unshift("All genere");
  
  console.log(genArr);
   this.setState(
    {
      movies:[...res.data.results],
      genere:[...genArr]
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
  render() {
    let genreId={28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
    27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'}
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
                     <input type={'text'} placeholder='Search' className='col-8'></input>
                     <input type ={'number'} placeholder='5' className='col-4'></input>
                </div>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Rating</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                           
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>

                            </tr>
                      
                        </tbody>
                        </table>
            </div>
            </div>
        </div>
      
      </>
    )
  }
}
