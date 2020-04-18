import React from 'react'
import image from '../../Icon/Capture2.PNG'
import Toolbar from '../../UI/NavigationBar/Toolbar'


///context

const Trivia =(props)=>{
    const {id} = props.match.params
    return(
        <div >
            
            <Toolbar/>
            <h1>Welcome back {id} </h1>


            
        </div>
    )
}


export default Trivia