import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getAllMessages} from '../../store/chat'

import moment from 'moment'

const MessageList = props => {
  const selfUser = props.selfUser
  const dispatch = useDispatch()
  const {channelId} = useParams()

  // need to add channelid to new messages

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
      <ul className="messageList">
        {filteredMessages.map(message => (
          // messages
          <li key={message._id} className="messageBody">
            {/* user image  */}
            {/* <div className="media-left">
              <a href="#">
                <img
                  className="media-object"
                  src={message.author.imageUrl}
                  alt="image"
                />
              </a>
            </div> */}
            <div className="messageDetails">
              {/* user's names */}
              <h4 className="userName">
                Name: {message.author ? message.author.firstName : null}
              </h4>
              <div>Time: {message.datePosted}</div>
              <div className="messageContent">Content: {message.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MessageList
