import React, {useState} from 'react'
import PlaceholderPost from './PlacegolderPost/PlaceholderPost';
import classes from './Posts.module.css'
import Loader from '../../shared/Loader/Loader';
import Search from './Search/Search';

const Posts = () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts'
  let isLoading = false

  let [posts, setPosts] = useState(null);
  let [searchString, setSearchString] = useState('')

  const getFiltrationTarget = (string) => {

    setSearchString(string)
    filtratePosts(searchString)
  }


  const filtratePosts = (searchString) => {

    if (searchString !== '') {
      const results = posts.filter((post) => {
        return post.title.toLowerCase().startsWith(searchString.toLowerCase());
      });
      setPosts(results);
    } else {
      setPosts(posts);
    }
  }

  const getData = async () => {
    isLoading = true
    let response = await fetch(URL);
    if (response.ok) {
      let json = await response.json();
      setPosts(posts = json)
    } else {
      console.log('Ошибка HTTP: ' + response.status)
    }
  }

  const handleRemove = index => {
    setPosts(posts = posts.filter((item) => item.id !== index))
  }
        
  return (
    <div>
      <div className={classes.header}>
        <Search
          searchInPosts={getFiltrationTarget}
          searchString={searchString}
        />
        <button onClick={getData} className={classes.btn}>
          Get posts from server
        </button>
      </div>

      {isLoading && <Loader/>}

      {posts && posts.map((post) => <PlaceholderPost
        key={post.id}
        post={post}
        handleRemove={handleRemove}/>)
      }
    </div>
  )
}

export default Posts