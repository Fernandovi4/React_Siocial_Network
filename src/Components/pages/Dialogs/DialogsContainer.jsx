import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../redux/dialogs-reduser';
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = state => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => dispatch(addMessageActionCreator()),
    onMessageTextChange: (value) => dispatch(updateNewMessageTextActionCreator(value))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)