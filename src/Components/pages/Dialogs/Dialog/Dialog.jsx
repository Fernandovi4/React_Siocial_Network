import React from 'react';
import cl from './Dialog.module.css'
import {NavLink} from 'react-router-dom';

const Dialog = ({name, id}) => {

  return (
    <div>
      <NavLink
        to={'/dialogs/' + id}
        className={cl.link}
        activeClassName={cl.active}
      >{name}</NavLink>
    </div>)
}

export default Dialog