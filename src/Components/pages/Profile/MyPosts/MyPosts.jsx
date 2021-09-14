import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'
import {Button} from '../../../shared/Button/Button';

const MyPosts = (props) => {
  // console.log(props)

  const newPostElement = React.createRef()

  const addPost = () => props.onAddPost()

  const onPostChange = () => props.onPostTextChange(newPostElement.current.value)

  const postElements = props.postsData.map((p) => <Post
    key={p.id} message={p.message} likes={p.likes}/>)

  return (
    <div>
      <div className={cl.post__create}>
        <textarea
          ref={newPostElement} cols='125'
          value={props.newPostText}
          onChange={onPostChange}/>
        <button onClick={addPost}>new</button>
        <Button callBack={addPost} title='Create'/>
      </div>
      <div className={cl.posts__wrapper}>
        {postElements}
      </div>
    </div>
  )
}
export default MyPosts