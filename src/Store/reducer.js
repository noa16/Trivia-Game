import React from 'react'
import * as actionType from './Actions/Action'

const initialState={
    myAnswer:[],
    totalScore:0,
    username:null,
    triviaType:null
}
const reducer =(state=initialState,action)=>{

    switch(action.type){

        case actionType.ADD_ANSWER:
            const newState = Object.assign({},state)
            newState.myAnswer=action.answer
            return{
               ...newState
                
            }
        case actionType.ADD_SCORE:
            return{
                ...state,
                totalScore:action.score
            }
        case actionType.USERNAME:
            
            return{
                ...state,
                username:action.username
            }
        case actionType.GET_SCORE:
            return{
                ...state,
                totalScore:action.value
            }
        case actionType.TRIVIA_TYPE:
            return{
                ...state,
                triviaType:action.value
            }
        default:
            
            return {...state}
    }


}

export default reducer