module.exports = io => {
  // runs when client connects
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    // welcome message emitted to current user only
    socket.emit('message', 'Welcome to chat sent via server/index socket.emit')

    // socket.broadcast.emit: sends message to all clients except to current client

    socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message)
    })

    // runs when client disconnects
    socket.on('disconnect', () => {
      // io emits to everyone
      io.emit('message', 'io emit msg: user has left the chat')
      console.log(`Connection ${socket.id} has left the building`)

      // sent to current client only
      socket.emit('User disconnected')
    })
  })
}
