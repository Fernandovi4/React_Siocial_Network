import React from 'react';
import classes from './Input.module.css'

const Input = ({parentCallback6, name, age}) => {
  return (
    <div className={classes.inputs}>
      <div className={classes.inputsInner}>
        <label
          className={classes.label}
          htmlFor='name'>Name: </label>
        <input
          className={classes.input}
          name={'name'}
          type='text'
          placeholder={'type name here'}
          value={name}
          onChange={e => parentCallback6(e.target.value, age)}/>
      </div>
      <div className={classes.inputsInner}>
        <label
          className={classes.label}
          htmlFor='age'>Age: </label>
        <input type='number'
               className={classes.input}
               name={'age'}
               placeholder={'choose age'}
               value={age}
               onChange={e => parentCallback6(name, e.target.value)}/>
      </div>


    </div>
  )
}

export default Input