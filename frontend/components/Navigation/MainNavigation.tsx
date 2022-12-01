import React from 'react'
import classes from './MainNavigation.module.scss';
import {BsPersonFill} from "react-icons/bs";



const MainNavigation = () => {
  return (
    <div className={classes.box}>
      <div className={classes.navList}>
        <div className={classes.navBox}>
          Add a Task
        </div>
        <div className={classes.navBox}>
          To-Do Task
        </div>
        <div className={classes.navBox}>
          Completed 
        </div>
      </div>
        <div className={classes.button}>
          <BsPersonFill className={classes.icon}/>
          <span>SignIn</span>
        </div>
        
    </div>
  )
}

export default MainNavigation