import React from 'react'
import cl from './Button.module.css'

export const Button = ({title, width}) => {
  return (
    <button
      className={cl.buttonComponent}
      style={{width: width}}
      >
      {title}
    </button>
  )
}

