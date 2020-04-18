import React from 'react'
import { Link } from 'react-router-dom';
import StartGame from '../../Component/startGame/StartGame'

const Toolbar = ()=>{


    return(
        <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Trivia</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/Answer" className="nav-link">See answer</Link>
          </li>
          <li className="navbar-item">
          <Link to="/StartGame" className="nav-link">Start Game</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Trivia" className="nav-link">Level</Link>
          </li>
        </ul>
        </div>
      </nav>
        </div>

    )
}

export default Toolbar