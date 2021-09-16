// import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {
  addPostActionCreator,
} from "../../../../redux/profile-reducer";


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer