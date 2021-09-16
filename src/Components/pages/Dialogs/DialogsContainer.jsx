import Dialogs from './Dialogs';
import {connect} from "react-redux";
import {
  addMessageActionCreator
} from '../../../redux/dialogs-reduser';
import {WithAuthRedirect} from "../../../HighOrderComponents/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = state => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (message) => dispatch(addMessageActionCreator(message)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs)