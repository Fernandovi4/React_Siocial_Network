import React from 'react'
import cl from './Button.module.css'

export const Button = ({title, callBack}) => {
  return (
    <button
      className={cl.buttonComponent}
      onClick={() => callBack()}>
      {title}
    </button>
  )
}

