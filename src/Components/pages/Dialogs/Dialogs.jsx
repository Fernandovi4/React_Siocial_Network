import React from 'react'
import cl from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

  const addNewMessage = values => props.onAddMessage(values.newMessage)

  const dialogsElements = props.dialogsPage.dialogs.map((d) => <Dialog
    key={d.id} name={d.name} id={d.id}/>)
  const messageElements = props.dialogsPage.messages.map((m) => <Message
    key={m.id} message={m.message} authorId={m.authorId}/>)

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs__wrapper}>
        <h4 className={cl.title}>Dialogs</h4>
        <div className={cl.dialog_name}>
          {dialogsElements}
        </div>
      </div>
      <div className={cl.messages__wrapper}>
        <h4 className={cl.title}>Messages</h4>
        <div className={cl.messages}>
          {messageElements}
        </div>
        <hr/>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
        <hr/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className={cl.newMessage__wrapper}>
      <Field component= "textarea" name='newMessage'/>
      <button className={cl.sendBtn}>Send &#10147;</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form:'DialogAddMessageForm'})(AddMessageForm)

export default Dialogs 