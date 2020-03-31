import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getAllMessages, postNewMessage} from '../../store/chat'
import {me} from '../../store/user'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import moment from 'moment'

import NewMessage from './NewMessage'

const MessageList = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channel: {
        id: channelId
        // name: 'red+blue'
      },
      author: user._id
    }
    dispatch(postNewMessage(messageObj))
  }

  // need to add channelid to new messages

  useEffect(() => {
    dispatch(getAllMessages())
    dispatch(me())
  }, [])

  const {channelId} = useParams()

  const messages = useSelector(state => state.chat.messages)
  const filteredMessages = messages.filter(
    message => message.channel.id === channelId
  )

  console.log('messages in messagelist', filteredMessages)
  console.log('channelid', channelId)

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '80vh',
            border: '1px solid gray'
          }}
        >
          {/* message list */}
          <ul className="messageList">
            {filteredMessages.map(message => (
              // messages
              <li key={message._id} className="media">
                {/* <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src={message.author.imageUrl}
                      alt="image"
                    />
                  </a>
                </div> */}
                <div>
                  {/* {moment(String(message.datePosted)).format('hh:mm A')} */}
                  {message.datePosted}
                </div>
                <div className="messagebody">
                  {/* user's names */}
                  {/* <h4 className="userName">{message.author.name}</h4> */}
                  {message.content}
                </div>
              </li>
            ))}

            <NewMessage />
            {/* new message component below
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
            </div> */}
          </ul>
        </Typography>
      </Container>
    </div>
  )
}

export default MessageList
