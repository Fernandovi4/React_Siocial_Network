import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Status from "./MyPosts/Status/Status";


const Profile = (props) => {

    return(
      <div >
          <div className={classes.content__img} />
          {/*<Status status={props.status} updateUserStatus={props.updatetUserStatus}/>*/}
          <ProfileInfo {...props} />
          <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile 