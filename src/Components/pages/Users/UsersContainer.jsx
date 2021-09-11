import React from 'react';
// import Users from "./Users";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC, toogleLoaderAC,
  unfollowAC
} from "../../../redux/users-reduser";

import axios from "axios";
import UsersFuncComponent from "./UsersFuncComponent";
import Loader from "../../shared/Loader/Loader";

class UsersClassComponent extends React.Component {


  apiURL = `https://social-network.samuraijs.com/api/1.0/users`

  componentDidMount() {
    this.props.toggleLoader(true)
    console.log('componentDidMount: ', this.props.currentPage)
    axios.get(`${this.apiURL}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        console.log('responce: ', response)

        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.toggleLoader(false)
      })

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('PROPS: ', this.props)
  }

  onPageChange = (page) => {
    this.props.toggleLoader(true)
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((response) => {
        console.log('responce: ', response)
        this.props.setUsers(response.data.items)
        this.props.toggleLoader(false)
      })
  }

  render() {

    return (
      <>
        {this.props.isFetchingData ?
          <Loader/> :
          <UsersFuncComponent
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            onPageChange={this.onPageChange}
        />}
      </>

    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetchingData: state.usersPage.isFetchingData
  }
}

const mapDispatchToProps = (dispatch) => {


  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    toggleLoader: (isFetchingData) => dispatch(toogleLoaderAC(isFetchingData))
  }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)

export default UsersContainer