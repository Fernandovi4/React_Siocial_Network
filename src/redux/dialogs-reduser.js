const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
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
        message: action.newMessageText
      }

      return {
        ...state,
        messages: [...state.messages, newMessage]
      }

    default:
      return state
  }
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer