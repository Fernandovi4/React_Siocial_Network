const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_LOADER = 'TOGGLE-LOADER'

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetchingData: false

}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id !== action.userId) ? u : {...u, followed: true}
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          return (u.id !== action.userId) ? u : {...u, followed: false}
        })
      }

    case SET_USERS:
      console.log('setUsers state.users: ', state.users)
      console.log('setUsers action.users: ', action.users)

      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      console.log('ACTION.currentPage: ', action)
      return {
        ...state,
        currentPage: action.page
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case TOGGLE_LOADER:
      return {
        ...state,
        isFetchingData: action.isFetchingData
      }

    default:
      return state
  }

}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})

export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const toogleLoaderAC = (isFetchingData) => ({type: TOGGLE_LOADER, isFetchingData})

export default usersReducer