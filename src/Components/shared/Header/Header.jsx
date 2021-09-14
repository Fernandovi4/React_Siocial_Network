import React from 'react';
import cl from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return (
    <header className={cl.header}>
      <h1 className={cl.header_title}>Social-Dance-Network</h1>
      <div className={cl.loginBlock}>

        {props.isAuth ? <p>user: {props.login}</p> :
          <NavLink to={'/login'} className={cl.navlink}>Log IN</NavLink>
        }
      </div>
    </header>
  )
}

export default Header