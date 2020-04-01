import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getAllMessages} from '../../store/chat'
import {me} from '../../store/user'
import NewMessage from './NewMessage'

import moment from 'moment'

const MessageList = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

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

  return (
    <div>
      {/* message list */}
      <ul className="messageList" style={{overflowy: 'scroll'}}>
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
      <NewMessage />
    </div>
  )
}

export default MessageList
