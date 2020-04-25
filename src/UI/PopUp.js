import React from 'react'
import { Alert } from 'reactstrap'
import classes from './Popup.module.css'

const PopUp = (props)=>{


    return (
        <div className={classes.popup}>
          <div className={classes.popup_inner}>
            <h5>{props.text}</h5>
          <button className={classes.button} onClick={props.closePopup}>close me</button>
          </div>
        </div>
      );
    

}

export default PopUp