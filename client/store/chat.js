import axios from 'axios'
import socket from '../socket'

// action types
const GOT_ALL_MESSAGES = 'GOT_ALL_MESSAGES'
const WROTE_MESSAGE = 'WROTE_MESSAGE'
const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE'

const GOT_ALL_CHANNELS = 'GOT_ALL_CHANNELS'
const GOT_NEW_CHANNEL = 'GOT_NEW_CHANNEL'
const GOT_SINGLE_CHANNEL = 'GOT_SINGLE_CHANNEL'

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

export const gotAllChannels = channels => {
  return {
    type: GOT_ALL_CHANNELS,
    channels
  }
}

export const gotNewChannel = channel => {
  return {
    type: GOT_NEW_CHANNEL,
    channel
  }
}

export const gotSingleChannel = channel => {
  return {
    type: GOT_SINGLE_CHANNEL,
    channel
  }
}

// need to create new channels for new connections

// thunk creators
export const getAllMessages = () => async dispatch => {
  try {
    const response = await axios.get('/api/chat/messages')
    const messages = response.data
    dispatch(gotAllMessages(messages))
  } catch (error) {
    console.error('Error getting all messages', error)
  }
}

export const postNewMessage = message => async dispatch => {
  try {
    const response = await axios.post('/api/chat/messages', message)
    const newMessage = response.data
    dispatch(gotNewMessage(newMessage))
    socket.emit('new-message', newMessage)
  } catch (error) {
    console.error('Error posting new message', error)
  }
}

// need to create new channel for new connections
// have to figure which ways to do this
export const getAllChannels = () => async dispatch => {
  try {
    const response = await axios.get('/api/chat/channels')
    const channels = response.data
    dispatch(gotAllChannels(channels))
  } catch (error) {
    console.error('Error getting all channels', error)
  }
}

export const getSingleChannel = channelId => async dispatch => {
  try {
    const response = await axios.get(`/api/chat/channels/${channelId}`)
    const singleChannel = response.data
    dispatch(gotSingleChannel(singleChannel))
  } catch (error) {
    console.error('Error getting single channel', error)
  }
}

export const postNewChannel = channel => async dispatch => {
  try {
    const response = await axios.post('/api/chat/channels', channel)
    const newChannel = response.data
    dispatch(gotNewChannel(newChannel))
  } catch (error) {
    console.error('Error posting new channel', error)
  }
}

const initialState = {
  messages: [],
  newMessage: '',
  channels: [],
  channel: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_MESSAGES:
      return {...state, messages: action.messages}
    case WROTE_MESSAGE:
      return {...state, newMessage: action.message}
    case GOT_NEW_MESSAGE:
      return {...state, messages: [...state.messages, action.message]}
    case GOT_ALL_CHANNELS:
      return {...state, channels: action.channels}
    case GOT_NEW_CHANNEL:
      return {...state, channels: [...state.channels, action.channel]}
    case GOT_SINGLE_CHANNEL:
      return {...state, channel: action.channel}
    default:
      return state
  }
}

export default reducer
