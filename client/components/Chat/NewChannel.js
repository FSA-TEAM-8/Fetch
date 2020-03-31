import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../../store/user'
import {getAllChannels, postNewChannel} from '../../store/chat'
import {getSingleUser} from '../../store/single-user'
import {useParams, useHistory} from 'react-router-dom'

const NewChannel = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const singleUser = useSelector(state => state.singleUser)
  const channels = useSelector(state => state.chat.channels)
  const {id} = useParams()
  const history = useHistory()

  console.log('singleuser id', id)
  console.log('CHANNELS', channels)

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
    console.log('newchannelid', newChannelId)
    console.log(
      'filterarray',
      channels.filter(
        currentChannel => currentChannel.channel.id === newChannelId
      )
    )
    if (
      channels.filter(
        currentChannel => currentChannel.channel.id === newChannelId
      ).length !== 0
    ) {
      console.log('channel has already exists, redirect to channel')
      history.push('/home')
    } else {
      const channelObj = {
        // participants = id of currentuser and singleuser
        // id = 'currentUser.id&singelUser.id'
        // no need for name
        id: `${user._id}&${singleUser._id}`, // may only need id
        participants: [user._id, singleUser._id],
        name: `${user.firstName}+${singleUser.firstName}`
      }
      dispatch(postNewChannel(channelObj))

      console.log('new channel is created')
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        click for new channel
      </button>
    </div>
  )
}

export default NewChannel
