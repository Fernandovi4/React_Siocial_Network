import React, {useState} from 'react';
import classes from './PlaceholderPost.module.css'

const PlaceholderPost = ({post, handleRemove}) => {

  let [isEditable, setContentEditable] = useState(false);


  const handleClick = () => {
    setContentEditable(isEditable = !isEditable)
  }

  return (
    <div className={classes.singlePost}>
      <div className={classes.singlePostInner}>
        <span className={classes.id}>Id:{(post.id)}</span>
        <h4 className={classes.title}> Title: {(post.title)}</h4>
        <p className={classes.text} contentEditable={isEditable}>Text: {(post.body)}</p>
      </div>
      <div className={classes.buttonsWrapper}>
        <button className={`${classes.editBtn} ${classes.btn}`}
                onClick={() => handleClick()}
        >
          Edit / Save
        </button>
        <button
          onClick={() => handleRemove(post.id)}
          className={`${classes.removeBtn} ${classes.btn}`}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PlaceholderPost