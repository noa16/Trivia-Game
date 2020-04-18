import React , {useState,useEffect} from 'react'
import classes from './LogIn.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Popup from '../../UI/PopUp'
import image from '../../Icon/Capture2.PNG'




const LogIn = ()=>{

  

   const [username,setUsername] = useState(0)
   const [password,setPassword] = useState(0)
   const [usersDatabase,setUser]=useState([])
   const [turnPage,setPage]=useState(0)
   const [Error,setError]=useState(null)
   const [showPopup,setPopup]=useState(0)
   const [findUser,setFindUser]=useState(0)

   

   useEffect(()=>{

    axios.get('http://localhost:5000/users').then((response)=>{


    setUser(JSON.parse(JSON.stringify(response.data)))
    }).catch((e)=>{
        console.log(e)
    })
    
   },[])


   useEffect(()=>{

    console.log("effecttttt"+findUser)
   },[findUser])

    
    const handleSubmit = (e)=>{
     
        e.preventDefault()
        console.log("handle submit")
           
        
        Object.entries(usersDatabase).map(
         ([key, value]) =>{ 
                console.log(username+"fgf"+value.username)
                 if( value.username===username){
                    console.log("inside if")
                    
                    setPage(1)
                    setFindUser(1)  
                  
                }
                else{
                  
                    setError("user dont exisit please check your email or password")
                    setPopup(1)
                 
                    
                   
                }
            })
            
      

    }


   const togglePopup=()=> {
       setPopup(0)
      }

    return(
     <div>
        <img src={image}/>
        <div  className={classes.container}>
           <div className={classes.username}>
            <label>Username</label>
            <input type="text"
             placeholder="Enter Your Name"
             onChange={(e)=>setUsername(e.target.value)}/>
           </div>
           <div className={classes.password}>
            <label>Password</label>
            <input  type="password"
             placeholder="Enter Your Password"
             onChange={(e)=>setPassword(e.target.value)}/> 
           </div>
           {turnPage===1?
            <div >
            <Link to={'/Trivia:'+username}>
            <button
            
            type="submit"
            className={classes.button}>
            Submit    
           </button>
           </Link>
            </div>
            : <button className={classes.button} onClick={(e)=>handleSubmit(e)}>
            Submit
           </button>
            }
           <Link 
            to={'/SignUp'}
            className={classes.signUp}
            >
             <p >you dont have a couunt ?? please sign in and play!!</p>
           </Link>

           {showPopup===1 &&findUser===0?
           <div> 
               < Popup text={Error} closePopup={()=>togglePopup()}/>
           </div>
           :null}
           
        </div>
    </div>
       
        
    )
}


export default LogIn