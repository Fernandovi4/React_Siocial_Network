import {profileApi, usersApi} from '../Api/Api-service';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USERS_STATUS = 'SET-USERS-STATUS'


const initialState = {
  postsData: [
    {
      id: 1,
      likes: 15,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      id: 2,
      likes: 15,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      id: 3,
      likes: 15,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      id: 4,
      likes: 15,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    },
    {
      id: 5,
      likes: 15,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
    }
  ],
  selectedProfile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:

      let newPost = {
        id: Date.now(), likes: 0, message: action.text
      }

      return  {
        ...state,
        postsData: [newPost, ...state.postsData]
      }

    case SET_USER_PROFILE:
      return {...state, selectedUser: action.selectedProfile}

    case SET_USERS_STATUS:
      return {...state, status: action.status}

    default:
      return state
  }

}

export const addPostActionCreator = (text => {
  return {type: ADD_POST, text}
})

export const setUserProfile = (selectedProfile) => {
  return {type: SET_USER_PROFILE, selectedProfile}
}

export const setUserStatus = (status) => {
  return {type: SET_USERS_STATUS, status}
}

//thunks

export const getUserProfileInfo = (userId) => {
  return (dispatch) => {
    usersApi.getUsersProfile(userId)
      .then(data => dispatch(setUserProfile(data)))
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getUsersStatus(userId)
      .then(data => dispatch(setUserStatus(data)))
  }
}

export const updatetUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status)
      .then(responce => {
        if(responce.data.resultCode === 0){
          dispatch(setUserStatus(status))
        }
      })
  }
}




export default profileReducer