import React, {useRef} from "react";
import cl from './Satus.module.css'
const Status = (props) => {
  console.log(props)

  const [editMode, setEditmode] = React.useState(false)
  const [status, setStatus] = React.useState(props.status)

  const inputEl = useRef(null);

  const editModeOn = () => {
    setEditmode(true)
  }

  const editModeOff = () => {

    setEditmode(false)
    props.updatetUserStatus(status)
  }

  return(
    <div className={cl.status__wrapper}>
      <span>Status: </span>
      {!editMode &&
      <h3
        className={cl.status__title}
        onDoubleClick={editModeOn}
      >"{props.status || 'no status for this user'}"</h3>
      }
      {editMode &&
      <input
        autoFocus={true}
        className={cl.status__input}
        ref={inputEl}
        onChange={(e) => setStatus(e.target.value)}
        onBlur={editModeOff}
        value={status}
      />
      }


    </div>

  )
}

export default Status