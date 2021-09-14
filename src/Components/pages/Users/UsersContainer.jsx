import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  unfollow,
  getUsersList,
  setUsers,
  toogleFollowingProgress,
  followUser,
  unfollowUser,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleLoader,
} from "../../../redux/users-reduser";

import UsersFuncComponent from "./UsersFuncComponent";
import Loader from "../../shared/Loader/Loader";

class UsersClassComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersList(this.props.currentPage,this.props.pageSize)
  }

  onPageChange = (page) => {

    this.props.getUsersList(page,this.props.pageSize)
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
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
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
  getUsersList,
  setUsers,
  followUser,
  unfollowUser,
  toogleFollowingProgress,
  // setCurrentPage,
  // setTotalUsersCount,
  // toggleLoader,


})(UsersClassComponent)

export default UsersContainer