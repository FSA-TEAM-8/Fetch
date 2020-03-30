import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {getAllMessages, postNewMessage, wroteMessage} from '../../store/chat'
import {me} from '../../store/user'

const MessageArea = () => {
  // const [messages, setMessages] = useState('')

  const dispatch = useDispatch()
  const chat = useSelector(state => state.chat)
  const messages = useSelector(state => state.chat.messages)
  const user = useSelector(state => state.user)
  const filteredMessages = messages.filter(
    message => message.author === user._id && message.channelid === 'red+blue'
  )

  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    dispatch(getAllMessages())
    dispatch(me())
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channelid: 'red+blue',
      author: user._id
    }
    dispatch(postNewMessage(messageObj)) // work on this
  }

  // to save draft messages, need to add it to the database aka, create state and action creator for the draft message, a note for later todo
  // via wroteMessage and handleChange

  return (
    <div>
      Hello in message
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '80vh',
            border: '1px solid gray'
          }}
        >
          <ul className="messageArea">
            {filteredMessages.map(message => (
              <li key={message._id} className="media">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src={message.author.imageUrl}
                      alt="image"
                    />
                  </a>
                </div>
                <div className="messagebody">
                  <h4 className="userName">{message.author.name}</h4>
                  {message.content}
                </div>
              </li>
            ))}

            {/* new message component below */}
            <div>
              <form id="new-message-form" onSubmit={handleSubmit}>
                <div className="input-group input-group-lg">
                  <input
                    className="form-control"
                    type="text"
                    name="content"
                    value={newMessage}
                    onChange={event => setNewMessage(event.target.value)}
                    placeholder="Say something nice..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      Chat!
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </ul>
        </Typography>
      </Container>
    </div>
  )
}

export default MessageArea
