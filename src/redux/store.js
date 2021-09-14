// import sidebarReducer from './sidebar-reduser';
// import profileReducer from './profile-reducer';
// import dialogsReducer from './dialogs-reduser';
//
// let store = {
//   _state: {
//     loggedUser: {userid: 1, name: 'Peter'},
//     profilePage: {
//       postsData: [
//         {
//           id: 1,
//           likes: 15,
//           message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
//         },
//         {
//           id: 2,
//           likes: 15,
//           message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
//         },
//         {
//           id: 3,
//           likes: 15,
//           message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
//         },
//         {
//           id: 4,
//           likes: 15,
//           message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
//         },
//         {
//           id: 5,
//           likes: 15,
//           message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
//         }
//       ],
//       newPostText: 'козяка-базяка',
//     },
//     dialogsPage: {
//       newMessageText: 'козямбендо',
//       dialogs: [
//         {id: 1, name: 'Peter'},
//         {id: 2, name: 'Lena'},
//         {id: 3, name: 'Arina'},
//         {id: 4, name: 'Emily'},
//         {id: 5, name: 'Lakuka'}
//       ],
//       messages: [
//         {id: 1, authorId: 1, message: 'Hello'},
//         {id: 2, authorId: 2, message: 'Hello Hello'},
//         {id: 3, authorId: 1, message: 'Hello Hello Hello'},
//         {id: 4, authorId: 2, message: 'Hello Hello Hello Hello'},
//         {id: 5, authorId: 1, message: 'Hello Hello Hello Hello Hello'}
//       ]
//     },
//     sideBar: {
//       friends: [
//         {
//           id: 1,
//           name: 'Ivan',
//           avaURL: 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'
//         },
//         {
//           id: 2,
//           name: 'Nataly',
//           avaURL: 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'
//         },
//         {
//           id: 3,
//           name: 'Frank',
//           avaURL: 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'
//         },
//         {
//           id: 4,
//           name: 'John',
//           avaURL: 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'
//         },
//         {
//           id: 5,
//           name: 'Jeckie Chan',
//           avaURL: 'https://st4.depositphotos.com/5934840/23454/v/950/depositphotos_234548768-stock-illustration-construction-worker-profile-avatar-icon.jpg'
//         }
//       ],
//     }
//   },
//   _callSubscriber() {
//     console.log('renderEntireTree')
//   },
//
//   getState() {
//     return this._state
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//
//   dispatch(action) {
//
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
//     this._state.sideBar = sidebarReducer(this.getState().sideBar, action);
//     this._callSubscriber(this.getState());
//
//   }
// }
//
//
// export default store;
//
//
//
//
//
