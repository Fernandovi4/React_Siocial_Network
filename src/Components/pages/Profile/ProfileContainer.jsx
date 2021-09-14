import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getUserProfileInfo} from '../../../redux/profile-reducer'
import {Redirect, withRouter} from 'react-router-dom'


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfileInfo(userId)

  }

  render() {
    if(!this.props.isLoggedIn) return <Redirect to={'/login'}/>
    return <Profile {...this.props} selectedUser={this.props.selectedUser}/>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.profilePage.selectedUser,
    isLoggedIn : state.auth.isAuth
  }
}

const ShowTheLocationWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {

  getUserProfileInfo
})(ShowTheLocationWithRouter)