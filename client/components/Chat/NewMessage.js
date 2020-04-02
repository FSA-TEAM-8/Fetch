import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postNewMessage, getSingleChannel} from '../../store/chat'
import TextField from '@material-ui/core/TextField'

import moment from 'moment'

const NewMessage = props => {
  const {channelId, selfUser} = props
  const dispatch = useDispatch()
  const [newMessage, setNewMessage] = useState('')
  const currentChannel = useSelector(state => state.chat.channel)

  const currentTime = moment()

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channel: currentChannel.channel,
      author: {
        id: selfUser._id,
        firstName: selfUser.firstName,
        lastName: selfUser.lastName
      },
      datePosted: currentTime._d
    }
    dispatch(postNewMessage(messageObj))
  }
  useEffect(
    () => {
      dispatch(getSingleChannel(channelId))
    },
    [channelId]
  )

  return (
    <div>
      {/* new message component below */}
      <div>
        <form id="new-message-form" onSubmit={handleSubmit}>
          <div className="input-group input-group-lg">
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="new-message-input"
              type="text"
              name="content"
              value={newMessage}
              onChange={event => setNewMessage(event.target.value)}
              placeholder="Say something..."
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewMessage
