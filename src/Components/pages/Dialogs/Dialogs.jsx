import React from 'react'
import cl from './Dialogs.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

  const addMessage = () => props.onAddMessage();
  const onMessageChange = (e) => props.onMessageTextChange(e.target.value);

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
        <div className={cl.newMessage__wrapper}>
          <textarea
            name='newMessage'
            id='newMessage'
            cols='60' rows='1'
            value={props.dialogsPage.newMessageText}
            onChange={onMessageChange}
          />
          <button
            className={cl.sendBtn}
            onClick={addMessage}>Send &#10147;
          </button>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default Dialogs 