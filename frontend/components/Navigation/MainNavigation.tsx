import React from 'react'
import classes from './MainNavigation.module.scss';
import {BsPersonFill} from "react-icons/bs";
import Link from 'next/link';



const MainNavigation = () => {
  return (
    <div className={classes.box}>
      <div className={classes.navList}>
        <Link href="/addtodo" className={classes.navBox}>
          Add a Task
        </Link>
        <Link className={classes.navBox} href="/todos">
          To-Do Task
        </Link>
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