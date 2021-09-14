import React from "react";
import Loader from "../../../../shared/Loader/Loader";
import cl from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  // console.log('PROPS:', props)

  if(!props.selectedUser){
    return <Loader/>
  }
  return(
  <div className={cl.profileInfo__wrapper}>
    <img className={cl.profileInfo__img} src={props.selectedUser.photos.large} alt="user large ava"/>
    <div>
      <p><span className={cl.profileInfo__titles}>My Name:  </span> {props.selectedUser.fullName}</p>
      <p><span className={cl.profileInfo__titles}>About Me:  </span> {props.selectedUser.aboutMe}</p>
      <p><span className={cl.profileInfo__titles}>Job status:  </span> {props.selectedUser.lookingForAJob ? props.selectedUser.lookingForAJobDescription : 'Leave me alone!!!'}</p>
    </div>
    <div className={cl.profileInfo__contacts}>
      <p><span className={cl.profileInfo__titles}>facebook:  </span> {props.selectedUser.contacts.facebook}</p>
      <p><span className={cl.profileInfo__titles}>github:  </span> {props.selectedUser.contacts.github}</p>
      <p><span className={cl.profileInfo__titles}>instagram:  </span> {props.selectedUser.contacts.instagram}</p>
    </div>


  </div>

  )
}

export default ProfileInfo