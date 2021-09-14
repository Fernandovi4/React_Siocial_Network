import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reduser'
import sidebarReducer from './sidebar-reduser'
import usersReducer from './users-reduser'
import authReduser from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReduser
})

let store = createStore(redusers,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  )

window.store = store

export default store