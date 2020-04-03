import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {postNewMessage} from '../../store/chat'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import moment from 'moment'

const NewMessage = props => {
  const {selfUser, currentChannel} = props
  const dispatch = useDispatch()
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const messageObj = {
      content: newMessage,
      channel: currentChannel.channel,
      author: {
        id: selfUser._id,
        firstName: selfUser.firstName,
        lastName: selfUser.lastName,
        image: selfUser.image
      },
      datePosted: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
    }
    dispatch(postNewMessage(messageObj))
  }

  return (
    <div>
      <form className="new-message-form" onSubmit={handleSubmit}>
        <div className="new-message-div">
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
          <div className="new-message-btn">
            <Button className="message-btn" type="submit" variant="contained">
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewMessage
