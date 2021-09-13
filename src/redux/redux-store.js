import {combineReducers, createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduser';
import sidebarReducer from './sidebar-reduser';
import usersReducer from './users-reduser';
import authReduser from './auth-reducer'

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReduser
})

let store = createStore(redusers)

window.store = store

export default store