import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class navbar extends Component {
  render() {
    return (
      <>
      <div style ={{display :'flex',justifyContent:'center', backgroundColor:'white ' ,alignItems:'center',color:'blueviolet'}}>
      
        <Link to='/' style={{textDecoration:"none"}}><h2 style={{margin:'10px' ,color:'red' , fontFamily:'fantasy'}}>Watch Here</h2></Link>
        <Link to='/fav'style={{textDecoration:"none"}}><h2 style={{margin:'10px' , fontFamily:'fantasy'}}>Favourite</h2></Link>
       
        
      </div>
      
      </>
    )
  }
}
