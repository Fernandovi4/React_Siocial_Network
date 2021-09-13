import React from "react";
import cl from "./Users.module.css";
import userLogo from "../../../assets/user.jpg";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../Api/Api-service";

const UsersFuncComponent = (
  {
    pageSize,
    currentPage,
    unfollow,
    follow,
    users,
    onPageChange,
    followingInProgress,
    toogleFollowingProgress
  }) => {

  // let pagesAmount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
  let pagesAmount = Math.ceil(100 / pageSize)

  let pages = []
  for (let i = 1; i <= pagesAmount; i++) {
    pages.push(i)
  }

  return (
    <div className={cl.usersCards__wrapper}>
      <div className={cl.pageDisplayer}>
        <span>Page: </span>
        {pages.map(el => {
          return(
            <span
            className={currentPage === el ?
              cl.selected + ' ' + cl.pageDisplayer__number :
              cl.pageDisplayer__number} key={el}
            onClick={() => onPageChange(el)}
          >{el}
            </span>)
        })
        }
      </div>
      {users.map(u => {
        return (
          <div className={cl.userCard} key={u.id}>
            <div className={cl.userCard__innerLeft}>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small ? u.photos.small : userLogo} style={{width: '50px', height: 'auto'}}
                     alt="user avatar"/>
              </NavLink>
              <div>
                {u.followed ?
                  <button
                    // disabled={followingInProgress.some(id => id === u.id)}
                    className={cl.userCard__btn + ' ' + cl.unfollow__btn}
                    onClick={() => {
                      // toogleFollowingProgress(true, u.id)
                      usersApi.unfollowUser(u.id)
                        .then((response) => {
                          if(response.data.resultCode === 0){unfollow(u.id)}
                          // toogleFollowingProgress(false, u.id)
                        })

                      }
                    }
                  >Unfollow</button> :
                  <button
                    // disabled={followingInProgress.some(id => id === u.id)}
                    className={cl.userCard__btn + ' ' + cl.follow__btn}
                    onClick={() => {
                      // toogleFollowingProgress(true, u.id)
                      usersApi.followUser(u.id)
                        .then((response) => {
                          if (response.data.resultCode === 0) {follow(u.id)}
                          // toogleFollowingProgress(false, u.id)
                        })

                      }
                    }
                  >Follow</button>}
              </div>
            </div>
            <div className={cl.userCard__innerRight}>
              <div className={cl.userCard__infoWrapper}>
                <div> Name: <span>{u.name}</span></div>
                <div>Status: <span>{u.status}</span></div>
              </div>
              <div className={cl.userCard__locationWrapper}>
                <div>City: <span/></div>
                <div>Country: <span/></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsersFuncComponent