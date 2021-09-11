import React from "react";
import cl from './MyFrienInfo.module.css'

const MyFriendInfo = (props) => {
  return (
    <div className={cl.myFriendInfo}>
      <img className={cl.myFriendAvatar} src={props.friend.avaURL} alt="user avatar"/>
      <h6 className={cl.friendName}>{props.friend.name}</h6>
    </div>
  )
}

export default MyFriendInfo