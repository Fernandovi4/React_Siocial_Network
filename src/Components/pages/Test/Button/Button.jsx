import React from 'react';
import classes from './Button.module.css'

const Button = ({
                  parentCallback,
                  parentCallback2,
                  parentCallback4,
                  parentCallback5,
                  counter,
                  clickCounter
                }) => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
        <button
          className={classes.btn}
          onClick={() => {
            parentCallback2(counter += 1)
            parentCallback(clickCounter += 1)
          }
          }
        >Increase
        </button>
        <button
          className={classes.btn}
          onClick={() => {
            parentCallback2(counter -= 1)
            parentCallback(clickCounter += 1)
          }
          }
        >Decrease
        </button>
        <button
          className={classes.btn}
          onClick={() => parentCallback4()}
          onDoubleClick={() => parentCallback5()}
        >Reset
        </button>
      </div>
    </div>
  )
}

export default Button