import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage, setTotalUsersCount,
  setUsers, toggleLoader, toogleFollowingProgress,
  unfollow
} from "../../../redux/users-reduser";

import UsersFuncComponent from "./UsersFuncComponent";
import Loader from "../../shared/Loader/Loader";
import {usersApi} from "../../../Api/Api-service";

class UsersClassComponent extends React.Component {

  componentDidMount() {
    this.props.toggleLoader(true)
    usersApi.getUsers(this.props.currentPage,this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.toggleLoader(false)
      })
  }

  onPageChange = (page) => {
    this.props.toggleLoader(true)
    this.props.setCurrentPage(page)
    usersApi.getUsers(this.props.currentPage,this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items)
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
            followingInProgress={this.props.followingInProgress}
            toogleFollowingProgress={this.props.toogleFollowingProgress}
        />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetchingData: state.usersPage.isFetchingData,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// const mapDispatchToProps = (dispatch) => {
//
//
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
//     setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
//     toggleLoader: (isFetchingData) => dispatch(toogleLoaderAC(isFetchingData))
//   }
// }

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleLoader,
  toogleFollowingProgress
})(UsersClassComponent)

export default UsersContainer