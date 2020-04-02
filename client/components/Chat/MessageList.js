import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllMessages} from '../../store/chat'
import NewMessage from './NewMessage'
import moment from 'moment'

const MessageList = props => {
  const {selfUser, channelId} = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMessages())
  }, [])

  // filter by matching channel id and message has content and is a participant
  const messages = useSelector(state => state.chat.messages)
  const filteredMessages = messages.filter(
    message =>
      message.channel.id === channelId &&
      message.content &&
      message.channel.participants.includes(selfUser._id)
  )

  return (
    <div>
      {/* message list */}
      <ul className="message-list">
        {filteredMessages.map(message => (
          // messages
          <li key={message._id} className="message-body">
            {/* user image  */}
            <div className="user-image">
              <img src={message.author.image} />
            </div>
            <div className="message-details">
              {/* user's names */}
              <div className="username-image">
                <h4 className="userName">
                  {message.author ? message.author.firstName : null}
                </h4>
                <span> {message.datePosted}</span>
              </div>
              <div className="message-content">{message.content}</div>
            </div>
          </li>
        ))}
      </ul>
      <NewMessage channelId={channelId} selfUser={selfUser} />
    </div>
  )
}

export default MessageList
