import React, {useEffect} from 'react';
import cl from './Users.module.css'
import axios from "axios";
import * as PropTypes from "prop-types";


function Users(props) {
  let {users, follow, unfollow, setUsers} = props;
  console.log('users:', users)

  useEffect(() => {
    if (users.length === 0) {
          axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => setUsers(response.data.items))
        }
  })

  const getUsers = () => {
    console.log('getUsers()')
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => setUsers(response.data.items))
    }
  }

  const userLogoURL = 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'

  return (
    <div className={cl.usresCards__wrapper}>
      <button onClick={getUsers}>Get users</button>
      {
        users.map(u => {
          return (
            <div className={cl.userCard} key={u.id}>
              <div className={cl.userCard__innerLeft}>
                <img src={u.photos.small ? u.photos.small : userLogoURL} style={{width: '50px', height: 'auto'}}
                     alt="user avatar"/>
                <div>
                  {u.followed ?
                    <button className={cl.userCard__btn} onClick={() => {
                      unfollow(u.id)
                    }}>Unfollow</button> :
                    <button className={cl.userCard__btn} onClick={() => {
                      follow(u.id)
                    }}>Follow</button>}
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

Users.propTypes = {
  users: PropTypes.any,
  follow: PropTypes.any,
  unfollow: PropTypes.any,
  setUsers: PropTypes.any
}
export default Users