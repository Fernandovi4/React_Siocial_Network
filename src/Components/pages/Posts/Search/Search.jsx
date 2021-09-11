import React from 'react';
import classes from './Search.module.css';

const Search = ({searchInPosts}) => {

  return (
    <div className={classes.searchComponent}>
      <input
        type='search'
        placeholder={'Find what YOU want!'}
        onChange={event => {
          searchInPosts(event.target.value)
        }}
      />
      <button className={classes.searchBtn} type='button'>Search</button>
    </div>
  )
}

export default Search