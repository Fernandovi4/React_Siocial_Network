import {authApi} from '../Api/Api-service';

const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}


const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {userId, email, login}
})

export const authUser = () => {
  return (dispatch) => {
    authApi.authUser()
      .then((data) => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          dispatch(setAuthUserData(id, email, login))
        }
      })
  }
}

export default authReduser