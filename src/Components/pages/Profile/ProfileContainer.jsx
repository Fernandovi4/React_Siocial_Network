import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersApi} from "../../../Api/Api-service";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){userId = 2}

    usersApi.getUsersProfile(userId)
      .then(data => this.props.setUserProfile(data))
  }

  render () {
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
  setUserProfile,
}) (ShowTheLocationWithRouter)