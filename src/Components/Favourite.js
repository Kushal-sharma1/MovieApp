import React, { Component } from 'react'

export default class Favourite extends Component {
  render() {
    return (
      <>
        <div class="container">
            <div class="row">
            <div class="col-3">
                <ul class="list-group">
                    <li class="list-group-item active" aria-current="true">An active item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
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
