import React ,{Component, useState} from 'react'
import LogIn from '../Component/LogIn/LogIn'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Trivia from '../Component/Trivia/Trivia'
import SignUp from '../Component/SignUp/SignUp'
import image from '../Icon/Capture2.PNG' 
import StartGame from '../Component/startGame/StartGame'
import Answer from '../Component/startGame/Answer'
import Profile from'../Component/Profile/Profile'

const Container =()=>{

      
        
        return(
        <Router>
             
              <Route path="/" exact component={LogIn}></Route>
              <Route path="/Trivia:id" exact component={Trivia}></Route>
              <Route path="/Trivia" exact component={Trivia}></Route>
              <Route path="/SignUp" exact component={SignUp}></Route>
              <Route path="/StartGame" exact component={StartGame}></Route>
              <Route path="/Answer" exact component={Answer}></Route>
              <Route path = "/Profile" exact component={Profile}></Route>
        </Router>

           
        )
    

}

export default Container