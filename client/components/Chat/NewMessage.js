import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {me} from '../../store/user'
import {postNewMessage, getSingleChannel} from '../../store/chat'
import {useParams} from 'react-router-dom'

import moment from 'moment'

const NewMessage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const currentChannel = useSelector(state => state.chat.channel)
  const [newMessage, setNewMessage] = useState('')
  const {channelId} = useParams()

  const currentTime = moment()

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channel: currentChannel.channel,
      author: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
      },
      datePosted: currentTime._d
    }
    dispatch(postNewMessage(messageObj))
  }
  useEffect(() => {
    dispatch(me())
    dispatch(getSingleChannel(channelId))
  }, [])

  return (
    <div>
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
    </div>
  )
}

export default NewMessage
