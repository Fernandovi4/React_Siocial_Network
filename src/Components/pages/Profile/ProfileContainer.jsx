import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfileInfo, getUserStatus, updatetUserStatus} from '../../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'
import {WithAuthRedirect} from "../../../HighOrderComponents/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileInfo(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props}
                    selectedUser={this.props.selectedUser}
                    status={this.props.status}
                    updatetUserStatus={this.props.updatetUserStatus}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.profilePage.selectedUser,
    status: state.profilePage.status
  }
}

export default compose( connect(mapStateToProps, {
    getUserProfileInfo,
    updatetUserStatus,
    getUserStatus
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)

