import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfileInfo} from '../../../redux/profile-reducer'
import {withRouter} from 'react-router-dom'


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileInfo(userId)

  }

  render() {
    return <Profile {...this.props} selectedUser={this.props.selectedUser}/>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.profilePage.selectedUser
  }
}

const ShowTheLocationWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {

  getUserProfileInfo
})(ShowTheLocationWithRouter)