import React from 'react'
import classes from './Profile.module.css'
import SuperMyPostsContainer from "./MyPosts/SuperMyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return(
      <div >
          <div className={classes.content__img}/>
          <ProfileInfo {...props}/>

          <SuperMyPostsContainer store={props.store}/>
      </div>
    )
}

export default Profile 