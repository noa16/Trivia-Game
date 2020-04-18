import React, { Component } from 'react'
import sourceQuestion from '../../../source/question.json'
import image from '../../../Icon/vi.png'
import imagex from '../../../Icon/x.png'
import classes from './question.module.css'
import Timer from '../Timer/Timer'

class Question extends Component{

    
    state={
        totalScore:0,
        counter:0,
        isCorrect:null,
        myAnswer:[]
        
        
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
        myAnswer:this.state.myAnswer.push(answer)
    })

    console.log(this.state.myAnswer+"gggggggggggggggggggggg")


}
    
    render(){


    
        return(
            <div>
              <Timer totalScore={this.state.totalScore}/>
              <h1>{this.state.totalScore}</h1>
  
            {sourceQuestion.map((q)=>{
            
            console.log(q.container)
           
            return(
            <ul>
              <div className={classes.question}>
                <li >
                  <div >                   
                    {this.totalScore}
                    <ul key={q} >{q.question }
                    <ul  onClick={()=>this.handleClick('a',q.correct)}> {q.a}</ul>
                    <ul onClick={()=>this.handleClick('b',q.correct)}>{q.b}</ul>
                    <ul onClick={()=>this.handleClick('c',q.correct)}>{q.c}</ul>
                    <ul onClick={()=>this.handleClick('d',q.correct)}>{q.d}</ul>
                   </ul>
                  </div>
                 
                    
                    
                   
                </li>
              </div>

            </ul>
                
            )
        })}
            </div>
        )
    }


}

export default Question