import axios from 'axios'
import socket from '../socket'

// action types
const GOT_ALL_MESSAGES = 'GOT_ALL_MESSAGES'
const WROTE_MESSAGE = 'WROTE_MESSAGE'
const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE'

// action creators
const gotAllMessages = messages => ({
  type: GOT_ALL_MESSAGES,
  messages
})

export const wroteMessage = message => ({
  type: WROTE_MESSAGE,
  message
})

export const gotNewMessage = message => ({
  type: GOT_NEW_MESSAGE,
  message
})

// need to create new channels for new connections

// thunk creators
export const getAllMessages = () => async dispatch => {
  try {
    const response = await axios.get('/api/chat')
    const messages = response.data
    dispatch(gotAllMessages(messages))
  } catch (error) {
    console.error('Error getting all messages', error)
  }
}

export const postNewMessage = message => async dispatch => {
  try {
    const response = await axios.post('/api/chat', message)
    const newMessage = response.data

    console.log('RESPONSE', response)
    dispatch(gotNewMessage(newMessage))

    // -- come back to finish socket portion: socket.emit
    socket.emit('new-message', newMessage)
  } catch (error) {
    console.error('Error posting new message', error)
  }
}

// need to create new channel for new connections
// have to figure which ways to do this

const initialState = {
  messages: [],
  newMessage: '',
  channel: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_MESSAGES:
      return {...state, messages: action.messages}
    case WROTE_MESSAGE:
      return {...state, newMessage: action.message}
    case GOT_NEW_MESSAGE:
      return {...state, messages: [...state.messages, action.message]}
    default:
      return state
  }
}

export default reducer
