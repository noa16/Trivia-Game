import React from 'react'
import { Link } from 'react-router-dom';
import StartGame from '../../Component/startGame/StartGame'
import {AppProvider} from '../../Component/startGame/Timer/Timer'


const Toolbar = ()=>{


    return(
      
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/Trivia" className="navbar-brand">Trivia</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/Answer" className="nav-link">See answer</Link>
          </li>
          <li className="navbar-item">
          <Link to="/StartGame" className="nav-link">Start Game</Link>
          </li>
         
          <li className="navbar-item">
          <Link to="/Profile" className="nav-link">My Profile</Link>
          </li>
          
        </ul>
         </div>
        </nav>
        </div>
     
      

    )
}

export default Toolbar