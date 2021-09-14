import {usersApi} from '../Api/Api-service';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


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
  newPostText: 'козяка-базяка',
  selectedProfile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:

      let newPost = {
        id: Date.now(), likes: 0, message: state.newPostText
      }

      return  {...state, newPostText: '',
        postsData: [newPost, ...state.postsData]
      }

    case UPDATE_NEW_POST_TEXT:

      return {...state, newPostText: action.text}

    case SET_USER_PROFILE:
      return {...state, selectedUser: action.selectedProfile}

    default:
      return state
  }

}

export const addPostActionCreator = () => {
  return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, text: text}
}

export const setUserProfile = (selectedProfile) => {
  return {type: SET_USER_PROFILE, selectedProfile}
}

export const getUserProfileInfo = (userId) => {
  return (dispatch) => {
    usersApi.getUsersProfile(userId)
      .then(data => dispatch(setUserProfile(data)))
  }
}


export default profileReducer