// import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => dispatch(addPostActionCreator()),
    onPostTextChange: (value) => dispatch(updateNewPostTextActionCreator(value))
  }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostsContainer