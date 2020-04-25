import React ,{useEffect,useState,useRef}from 'react'
import axios from 'axios'
import classes from './SignUp.module.css'
import image from '../../Icon/Capture2.PNG'


const SignUp = ()=>{

   const [username,setUsername]= useState(null)
   const [age,setAge] = useState(null)
   const [password,setPassword]= useState(null)
   const[postUser,setPost] = useState(0)

   useEffect(()=>{

       console.log("use effect")
       axios.post('http://localhost:5000/users/add',{username,password,age}).then(res=>
         
         console.log(res.data)
       )
   },[postUser])
  

    return(
      <div>
        <img src={image}/>
        <div className={classes.container}>    
            <h1>SignUp!!</h1>
        <form >
          <div>
            <label>
               userame:
              <input className={classes.input1} type="text" onChange={(e)=>setUsername(e.target.value)} />
            </label>
          </div>
          <div>
        
            <label>
                Age:
                 <input  className={classes.input2} type="text" onChange={(e)=>setAge(e.target.value)}/>
            </label>
          </div>
          <div>
            <label>
                Password:
                 <input  className={classes.input3} type="password" onChange={(e)=>setPassword(e.target.value)}/>
            </label>
          </div> 
          <button className={classes.button} onClick={setPost} >SignUp</button>
        </form>
          
             
        </div>
      </div>
    )
}

export default SignUp