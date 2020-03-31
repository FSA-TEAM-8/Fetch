import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {me} from '../../store/user'
import {getAllMessages, postNewMessage} from '../../store/chat'
import {useParams} from 'react-router-dom'

import moment from 'moment'

const NewMessage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [newMessage, setNewMessage] = useState('')

  const currentTime = moment()
  console.log('currenttime', currentTime._d)

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channel: {
        id: channelId
        // name: 'red+blue'
      },
      author: user._id,
      datePosted: currentTime._d
    }

    console.log(messageObj)
    dispatch(postNewMessage(messageObj))
  }
  useEffect(() => {
    dispatch(me())
  }, [])

  const {channelId} = useParams()

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
