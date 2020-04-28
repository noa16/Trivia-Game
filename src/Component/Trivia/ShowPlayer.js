import React from 'react'
import classes from './ShowPlayer.module.css'


const ShowPlayer=({usersDatabase})=>{
                 return(
                       
                       <table  class="table table-striped">
                           <thead>
                               <tr>
                                   <th scope="col">username</th>
                                   <th scope="col">score</th>
                               </tr>
                           </thead>
                       
                       <tbody>
                           {Object.entries(usersDatabase).map(
                              ([key, value]) =>{ 
                                return(
                                  <tr>
                                      <td>{value.username}</td>
                                      <td>{value.score}</td>

                                  </tr>
                                )
                           })
                        }
                       </tbody>
                    </table>
                  )

         
    
}

export default ShowPlayer