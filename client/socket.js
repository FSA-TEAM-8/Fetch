import io from 'socket.io-client'
import {gotNewMessage} from './store/chat'
import store from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected on the client side in client/socket.js!')
})

socket.on('message', message => {
  console.log(message)
})

// this is for listening to other client's messages
socket.on('new-message', message => {
  store.dispatch(gotNewMessage(message))
})

export default socket
