import React from 'react';
import classes from './Display.module.css'

const Display = ({counter, clickCounter, name, age}) => {
  return (
    <div className={classes.display}>
      <div className={classes.title}>Counter: <span>{counter} </span></div>
      <div className={classes.title}>Clicks: <span>{clickCounter}</span></div>
      <div className={classes.title}>Name: <span>{name}</span></div>
      <div className={classes.title}>Age: <span>{age}</span></div>
      Button clicked <span>  {clickCounter}</span> times
    </div>
  )
}

export default Display