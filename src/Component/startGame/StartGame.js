import React, { useEffect, useState } from 'react'
import Toolbar from '../../UI/NavigationBar/Toolbar'
import axios from 'axios'
import Question from './Question/Question'
import QuestionHistory from './Question/QuestionHistory'
import {connect} from 'react-redux'

const StartGame = (props)=>{


    switch(props.triviaType){
        case "history":
            return(
                <div>
                    <Question type={"history"}/>
                </div>
            )
            
        case "general":
            return(
                <div>
                    <Question type={"general"}/>
                </div>
            )
        case "scients":
            return(
                <div>
                    <Question type={"scients"}/>
                </div>

            )
            

        default:
            return(
                <div>
                    <Question/>
                </div>
            )

            
        
    }
 

}

const mapStateToProps=(state)=>{
    return {
        triviaType:state.triviaType
    }
}


export default  connect(mapStateToProps)(StartGame)