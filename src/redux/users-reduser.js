const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_LOADER = 'TOGGLE-LOADER'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetchingData: false,
  followingInProgress: []

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

      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:

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

    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetchingData?
          [state.followingInProgress, action.userId]:
          state.followingInProgress.filter(el => el.id !== action.userId)
      }

    default:
      return state
  }

}

export const follow = (userId) => ({type: FOLLOW, userId})

export const unfollow = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const toggleLoader = (isFetchingData) => ({type: TOGGLE_LOADER, isFetchingData})

export const toogleFollowingProgress = (isFetchingData, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetchingData, userId})


export default usersReducer