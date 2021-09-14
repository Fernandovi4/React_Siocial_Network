import React from 'react';
import {NavLink} from 'react-router-dom';
import cl from './Navbar.module.css'
import MyFriendInfo from "./myFriendInfo/MyFriendInfo";

const Navbar = ({sideBar}) => {

  let friendsElements = sideBar.friends.map(friend => <MyFriendInfo key={friend.id} friend={friend}/>)

  return (
    <nav className={cl.nav}>
      <div className={cl.pageNavigation__wrapper}>
        <div className={cl.item}>
          <NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/dialogs" activeClassName={cl.active}>Dialogs</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/users" activeClassName={cl.active}>Users</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/news" activeClassName={cl.active}>News</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/music" activeClassName={cl.active}>Music</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to="/test" activeClassName={cl.active}>Test</NavLink>
        </div>
        <div className={cl.item}>
          <NavLink to='/posts' activeClassName={cl.active}>PostsJP</NavLink>
        </div>
      </div>
      <h5 className={cl.myFriendsTitle}>My friends</h5>
      <div className={cl.friendsInfo__Wrapper}>
        {friendsElements}
      </div>

    </nav>
  )
}
export default Navbar