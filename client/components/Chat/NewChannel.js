import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../../store/user'
import {getAllChannels, postNewChannel} from '../../store/chat'
import {getSingleUser} from '../../store/single-user'
import {useParams, useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const NewChannel = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const singleUser = useSelector(state => state.singleUser)
  const channels = useSelector(state => state.chat.channels)
  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(me())
    dispatch(getSingleUser(id))
    dispatch(getAllChannels())
  }, [])

  const handleClick = () => {
    event.preventDefault()

    // need to check if the channel already exists, if it doesnt then create the channel
    // if channel already exists then direct to the channel
    const newChannelId = `${user._id}&${singleUser._id}`
    const altChannelId = `${singleUser._id}&${user._id}`

    if (
      channels.filter(
        currentChannel =>
          currentChannel.channel.id === newChannelId ||
          currentChannel.channel.id === altChannelId
      ).length !== 0
    ) {
      history.push(`/chat/channel/${user._id}&${singleUser._id}`)
    } else {
      const channelObj = {
        id: `${user._id}&${singleUser._id}`,
        participants: [user._id, singleUser._id],
        name: `${user.firstName}+${singleUser.firstName}`
      }
      dispatch(postNewChannel(channelObj))
      history.push(`/chat/channel/${channelObj.id}`)
    }
  }

  return (
    <div>
      <Button
        type="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Chat User
      </Button>
    </div>
  )
}

export default NewChannel
