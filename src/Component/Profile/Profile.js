import React, { useContext, useEffect, useState } from 'react'
import ToolBar from '../../UI/NavigationBar/Toolbar'
import {AppContext} from'../startGame/Timer/Timer'
import {connect} from 'react-redux'
import * as actionType from '../../Store/Actions/Action'
import general from '../../Icon/worldwide.png'
import atom from '../../Icon/atom.png'
import history from '../../Icon/history.png'
import classes from './Profile.module.css'
import noa from '../../Icon/cat.jpeg'
import { Link } from 'react-router-dom';
import person from '../../Icon/person.png'







const LEVEL2=100;
const LEVEL3=150;

const Profile=(props)=>{
    const handleClick=(triviaType)=>{
    props.triviaQuestionType(triviaType)

}

props.getScore(props.username)
    return(

  <div>
      <ToolBar/>
      <h1>You'r Total score for the current game {props.score} </h1>
      {props.answer}
      {LEVEL2-props.score>0?<div>you need to get more {LEVEL2-props.score} to reach level 2!!</div>:<div>you need to get more {LEVEL3-props.score}to reach level 3!!</div>}
      <div className={classes.profilecard}>
            <div className="classes.card">
             <h5 className="classes.cardItem" >Profile</h5>
             <img className={classes.noa}src={person}/>
             <p className="classes.cardItem">this is yor profile.</p>
             <a className="classes.cardItem" href="#" class="btn btn-primary">Go to facebook</a>
            </div>
      
      </div> 
      <div className={classes.info}>
        hi!
        here you can play trivia
        in the footer you can click on the icon and start play
        trivia game in various of topics 
        you have to get more point to open more trivia game

      </div> 
      <div className={classes.footer}>
          <Link to="/StartGame">
            <img className={classes.footerItem} src={general} 
            onClick={()=>handleClick("general")} alt=""/>
            <h3 className={classes.footerItem}>General</h3>
          </Link>
		      <Link to="/StartGame">
            <img className={classes.footerItem} src={atom}
             onClick={()=>handleClick("scients")} alt=""/>
            <h3 className={classes.containerItem}>scients</h3>
          </Link>
          <Link to="/StartGame">
            <img className={classes.footerItem} src={history} 
            onClick={()=>handleClick("history")} alt=""/>
            <h3 className={classes.footerItem}>History</h3>
          </Link> 
      </div>
	</div>         
    )
}

const mapStateToProps=(state)=>{
    return {
       answer:state. myAnswer,
       score:state.totalScore,
       username:state.username
    }
}

const mapDispatchToProps = dispatch=>{

    return{
  
        getScore:(username)=>dispatch(actionType.getScore({username})),
        triviaQuestionType:(typeTriva)=>dispatch({type:actionType.TRIVIA_TYPE,value:typeTriva})

    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(Profile)