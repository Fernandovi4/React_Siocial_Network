import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '7d24eb99-4e75-410b-82fc-3b4294cdb069'
  }
})

export const usersApi = {

  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`)
  },

  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`)
  },

  getUsersProfile(userId) {
    console.log('Use profilrApi.getUsersProfile')
    return profileApi.getUsersProfile(userId)
  }
}

export const profileApi = {

  getUsersProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
      .then(responce => responce.data)
  },

  getUsersStatus(userId){
    return axiosInstance.get(`profile/status/${userId}`)
      .then(responce => responce.data)
  },

  updateStatus(status){
    return axiosInstance.put('profile/status', {status})
  }
}

export const authApi = {
  authUser() {
    return axiosInstance.get(`auth/me`)
      .then(responce => responce.data)
  },
}



