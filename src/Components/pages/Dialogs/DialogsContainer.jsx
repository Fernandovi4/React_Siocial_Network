// import React from 'react'
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../redux/dialogs-reduser';
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => dispatch(addMessageActionCreator()),
    onMessageTextChange: (value) => dispatch(updateNewMessageTextActionCreator(value))
  }
}

const WithRedirect = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirect)

export default DialogsContainer