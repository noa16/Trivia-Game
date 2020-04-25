import React , {useContext, useEffect,useState} from 'react'
import image from '../../Icon/Capture2.PNG'
import Toolbar from '../../UI/NavigationBar/Toolbar'
import classes from './Trivia.module.css'


import axios from 'axios'

const Trivia =(props)=>{
    
    const [usersDatabase,setUser]=useState([])
    const {id} = props.match.params
    
    useEffect(()=>{


        axios.get('http://localhost:5000/users').then((res)=>{

            setUser(JSON.parse(JSON.stringify(res.data)))

        }).catch((e)=>{

        })


    },[])
    
    
    return(
        <div className={classes.frame}>
            
            
              <Toolbar/>
            <h1>Welcome back {id} </h1>
            <div className={classes.container}>
              <h5>players</h5>
               <p>see who is playing and his score</p>
              {Object.entries(usersDatabase).map(
               ([key, value]) =>{ 
               
                 return(
                       
                       <ul className={classes.ul}>
                           <li className={classes.first}>{value.username} {value.score}</li>
                       </ul>
                   )

              })}
            </div>


            <div className={classes.container2}>
                <p>Here you can play trivia on various topics like science history etc.
                  The more points you earn, the more games you can open on different subjects
                   So go ahead and start playing and earn points! </p>
            </div>


            <div className={classes.container3}>
                <p>Coming soon!! A trivia game about 
                soccer, basketball and more Score points !!
                </p>
            </div>
          


              

              


            
        </div>
    )
}




export default (Trivia)