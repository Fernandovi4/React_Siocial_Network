const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
  newMessageText: 'козямбендо',
  dialogs: [
    {id: 1, name: 'Peter'},
    {id: 2, name: 'Lena'},
    {id: 3, name: 'Arina'},
    {id: 4, name: 'Emily'},
    {id: 5, name: 'Lakuka'}
  ],
  messages: [
    {id: 1, authorId: 1, message: 'Hello'},
    {id: 2, authorId: 2, message: 'Hello Hello'},
    {id: 3, authorId: 1, message: 'Hello Hello Hello'},
    {id: 4, authorId: 2, message: 'Hello Hello Hello Hello'},
    {id: 5, authorId: 1, message: 'Hello Hello Hello Hello Hello'}
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage = {
        id: Date.now(),
        authorId: 1,
        message: state.newMessageText
      }

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      }

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.body
      }

    default:
      return state
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})
export default dialogsReducer