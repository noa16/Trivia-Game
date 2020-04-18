import React, { useState, useEffect } from 'react'
import popup from '../../../UI/PopUp'
import PopUp from '../../../UI/PopUp'
import axios from 'axios'
const Timer = (props)=>{

 const [counter,setCounter]=useState(0)   
 const [showPopup,setPopup]=useState(0)
 var score  = props.totalScore

const handleTimeout=()=>{

    setPopup(0)


}


 useEffect(()=>{
     setTimeout(()=>{
        if(counter<=5){
         setCounter(counter+1)
        }
        else{
            setPopup(1)
        }
     },1000)

     console.log("use effect")
 },[counter])
 
 return(

    <div>
        {counter<=5?<div>{counter}</div>:showPopup===1?<PopUp text={"Timeot!!!  your total score:"+props.totalScore} closePopup={()=>handleTimeout()}/>:null}
      
    </div>
)

}

export default Timer