import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {Button} from "../../../shared/Button/Button";


const MyPosts = (props) => {

  const postElements = props.postsData.map((p) => <Post
    key={p.id} message={p.message} likes={p.likes}/>)


  const addNewMessage = (values) => {
    console.log('values: ', values)
    props.onAddPost(values.newPost)
  }

  return (
    <div>
      <div>
        <NewPostReduxForm onSubmit={addNewMessage}/>
      </div>
      <div className={cl.posts__wrapper}>
        {postElements}
      </div>
    </div>
  )
}

const NewPostForm = (props) => {

  return (
    <form className={cl.post__create} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name='newPost'
        cols='125'
      />
      <Button
        title={'New Post'}
        className={cl.newPost__btn}
        width={'150px'}/>
    </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm)

export default MyPosts