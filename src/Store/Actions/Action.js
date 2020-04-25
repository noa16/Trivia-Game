
import axios from 'axios'
export const ADD_ANSWER='ADD_ANSWER'
export const ADD_SCORE='ADD_SCORE'
export const USERNAME='USERNAME'
export const GET_USER='GET_USER'
export const GET_SCORE='GET_SCORE'
export const TRIVIA_TYPE = 'TRIVIA_TYPE'

export const displayScore = (score)=>{

    return{
        type:GET_SCORE,
        value:score
    }

}

export const postScore = (score)=>{
    return{
        type:ADD_SCORE,
        score
    }
}
export const updateScore = (score,id)=>{

    console.log("update scoreeeeeeee"+id)
    return dispatch=>{
       axios.put('http://localhost:5000/users/StartGame'+id,{score}).then(res=>{
           dispatch(postScore(score))
       }).catch(e=>{

        console.log("Error"+e)
       })
    }

}

export const getScore = (id)=>{
    let users=[]
    var score=0
    return dispatch =>{

        axios.get('http://localhost:5000/users/getScore').then(res=>{
            users= JSON.parse(JSON.stringify(res.data))
            Object.entries(users).map(
             ([key,value])=>{
                if(value.username===id.username){
                    score=value.score
                }
            })
            
            dispatch(displayScore(score))
        }).catch(e=>{
            console.log("Error"+e)
        })

    }
}








