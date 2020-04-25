import React, { Component,useContext, useReducer } from 'react'
import sourceQuestion from '../../../source/question.json'
import image from '../../../Icon/vi.png'
import imagex from '../../../Icon/x.png'
import classes from './question.module.css'
import Timer from '../Timer/Timer'
import Toolbar from'../../../UI/NavigationBar/Toolbar'
import {connect} from 'react-redux'
import * as actionTypes from '../../../Store/Actions/Action'
import historyQuestion from  '../../../source/history.json'




var num
class Question extends Component{

    state={
        totalScore:0,
        counter:0,
        isCorrect:null,
        myAnswer:[],
     
        
        
    }
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
        //{this.state.isCorrect===1?<img src={image}></img>:null}
    }
    question=null

   



    shouldComponentUpdate(nextProps,nextState){

        console.log("update")
        if(this.state.totalScore!==nextState.totalScore){
            return true
        }
        if(this.state.isCorrect!==nextState.isCorrect){
            return true
        }
       return false
        

    }
    handleClick=async(answer,correctAnswer)=>{

      console.log("handle submit!")
      if(answer===correctAnswer){
        await this.setState(
            {totalScore:this.state.totalScore+5}
        )
        console.log("correct"+this.state.totalScore)
        await this.setState({
            isCorrect:this.state.isCorrect+1
        })
        console.log(this.state.isCorrect+"correct?")

      
       
      }
      else{

      if(this.state.isCorrect===1){
        await this.setState({
            isCorrect:this.state.isCorrect-1
        })
        await this.setState({
            totalScore:this.state.totalScore-5
        })
      

       
      }
    }

    await this.setState({
       myAnswer:this.state.myAnswer+=answer
      
       
    })
   // this.setState({index:this.state.index+1})

    await this.props.addAnswer(this.state.myAnswer)
    await this.props.getScore(this.props.username)
    await this.props.addScore(this.state.totalScore+this.props.score,this.props.username)
    


}
    
    render(){


    
        return(
            <div>
              <Toolbar/>
              <Timer myAnswer={this.state.myAnswer} totalScore={this.state.totalScore}/>
              <h1>{this.state.totalScore}</h1>
  
            {this.props.type==="general"?sourceQuestion.map((q)=>{
            
           
           
            return(
            <ul>
              <div className={classes.question}>
                <li >
                  <div >                   
                    {this.totalScore}
                    <ul key={q} >{q.question }
                    <ul  onClick={()=>this.handleClick("a",q.correct)}> {q.a}</ul>
                    <ul onClick={()=>this.handleClick("b",q.correct)}>{q.b}</ul>
                    <ul onClick={()=>this.handleClick("c",q.correct)}>{q.c}</ul>
                    <ul onClick={()=>this.handleClick("d",q.correct)}>{q.d}</ul>
                   </ul>
                  </div>
                 
                    
                    
                   
                </li>
              </div>

            </ul>
                
            )
        }):
        
        
        this.props.type==="history"?historyQuestion.map((q)=>{
            
          console.log(q.container)
         
          return(
          <ul>
            <div className={classes.question}>
              <li >
                <div >                   
                  {this.totalScore}
                  <ul key={q} >{q.question }
                  <ul  onClick={()=>this.handleClick("a",q.correct)}> {q.a}</ul>
                  <ul onClick={()=>this.handleClick("b",q.correct)}>{q.b}</ul>
                  <ul onClick={()=>this.handleClick("c",q.correct)}>{q.c}</ul>
                  <ul onClick={()=>this.handleClick("d",q.correct)}>{q.d}</ul>
                 </ul>
                </div>
               
                  
                  
                 
              </li>
            </div>

          </ul>
              
          )
      }):


      

      historyQuestion.map((q)=>{
            
        
       
        return(
        <ul>
          <div className={classes.question}>
            <li >
              <div >                   
                {this.totalScore}
                <ul key={q} >{q.question }
                <ul  onClick={()=>this.handleClick("a",q.correct)}> {q.a}</ul>
                <ul onClick={()=>this.handleClick("b",q.correct)}>{q.b}</ul>
                <ul onClick={()=>this.handleClick("c",q.correct)}>{q.c}</ul>
                <ul onClick={()=>this.handleClick("d",q.correct)}>{q.d}</ul>
               </ul>
              </div>
             
                
                
               
            </li>
          </div>

        </ul>
      
      )
    })
        
        
        }
            </div>
        )
    }


}
const mapDispatchToProps = dispatch=>{

  return{
  addAnswer:(myAnswer)=>dispatch({type:actionTypes.ADD_ANSWER,answer:myAnswer}),
  addScore:(score,username)=>dispatch(actionTypes.updateScore(score,username)),
  getScore:(username)=>dispatch(actionTypes.getScore({username}))

  }
}

const mapStateToProps = state=>{
  return{

      username:state.username,
      score:state.totalScore,
      
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Question)
