// import React from "react";
// import axios from "axios";
// import UsersFuncComponent from "./UsersFuncComponent";

// class UsersClassComponent extends React.Component {
//
//   apiURL = `https://social-network.samuraijs.com/api/1.0/users`
//
//   componentDidMount() {
//     console.log('componentDidMount: ', this.props.currentPage)
//     axios.get(`${this.apiURL}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//       .then((response) => {
//         console.log('responce: ', response)
//
//         this.props.setUsers(response.data.items)
//         this.props.setTotalUsersCount(response.data.totalCount)
//       })
//
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate')
//     console.log('PROPS: ', this.props)
//   }
//
//   onPageChange = (page) => {
//     this.props.setCurrentPage(page)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
//       .then((response) => {
//         console.log('responce: ', response)
//         this.props.setUsers(response.data.items)
//       })
//   }
//
//   render() {
//
//     return (
//       <UsersFuncComponent
//         pageSize={this.props.pageSize}
//         currentPage={this.props.currentPage}
//         unfollow={this.props.unfollow}
//         follow={this.props.follow}
//         users={this.props.users}
//         onPageChange={this.onPageChange}
//       />
//     );
//   }
// }

// export default UsersClassComponent