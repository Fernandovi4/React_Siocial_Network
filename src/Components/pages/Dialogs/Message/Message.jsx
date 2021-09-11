import React from 'react';
import cl from './Message.module.css'

const Message = ({message, authorId}) => <p className={cl.message} autorid={authorId}>{message}</p>


export default Message