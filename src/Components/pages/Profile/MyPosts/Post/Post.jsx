import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return(
      <div className={classes.post_item}>
        <img src="https://avatar-collection.ru/images/avatar-992.jpg" alt="avatar" />
        <div className={classes.post_info__wrapper}>
          <div className={classes.item} > {props.message}</div>
          <button className={classes.like_btn}>&#10084; {props.likes} </button>
        </div>
      </div>
    )
}

export default Post