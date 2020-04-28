import React , {useContext, useEffect,useState} from 'react'
import image from '../../Icon/Capture2.PNG'
import Toolbar from '../../UI/NavigationBar/Toolbar'
import classes from './Trivia.module.css'
import ShowPlayer from './ShowPlayer'
import axios from 'axios'
import soccer from '../../Icon/soccer.png'
import quiz from '../../Icon/quiz.png'

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
        
            
    <React.Fragment>   
        <Toolbar/>
        <h1>Welcome back {id} </h1>
        
<div className={classes.frame}>
    <div className="container">
      <div className="row">
        <div className="col-sm">
           <img className={classes.quiz} src={quiz}/>
      </div>
      <div className="col-sm">
           <img className={classes.soccer} src={soccer}/>
      </div>
      </div>
      <div className="row">
        <div className="col-sm">
          Here you can play trivia on various topics like science history etc.
          The more points you earn, the more games you can open on different subjects
          So go ahead and start playing and earn points!
        </div>
        <div className=".comesoom col-sm" > 
                Coming soon!! A trivia game about 
                soccer, basketball and more Score points !!
        </div>
     </div>
    </div>
        <div className="container">
            <div className="row">
               <div className="col-sm p-5">
                   <ShowPlayer usersDatabase={usersDatabase}/>
               </div>
            </div> 
            
        </div>
</div>
    </React.Fragment> 


              

              


            
      
    )
}




export default (Trivia)