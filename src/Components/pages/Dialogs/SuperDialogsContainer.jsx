// import React from 'react'
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../redux/dialogs-reduser';


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

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default SuperDialogsContainer