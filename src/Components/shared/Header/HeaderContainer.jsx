import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/auth-reducer";
import {usersApi} from "../../../Api/Api-service";

class HeaderContainer extends React.Component{


  componentDidMount() {

    usersApi.authUser()
      .then((data) => {
        if(data.resultCode === 0) {
          const {id, email, login} = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props}/>
  }


}

const mapStateToProps = (state) => {
  return{
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer)

