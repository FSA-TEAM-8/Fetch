import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getAllChannels} from '../../store/chat'
import {me} from '../../store/user'

const ChannelList = () => {
  const user = useSelector(state => state.user)
  const channelList = useSelector(state => state.chat.channels)
  const dispatch = useDispatch()
  // console.log('CHANNEL LIST', channelList)

  // filter channel by ones user is a participant
  const filteredChannels = channelList.filter(currentChannel =>
    currentChannel.channel.participants.includes(user._id)
  )

  useEffect(() => {
    dispatch(getAllChannels())
    dispatch(me())
  }, [])

  return (
    <div>
      channellist
      <ul>
        {filteredChannels.map(currentChannel => {
          const channel = currentChannel.channel
          return (
            <li key={channel.id}>
              <NavLink
                to={`/chat/channel/${channel.id}`}
                className="active-chats"
              >
                <span># {channel.name}</span>
              </NavLink>
            </li>
          )
        })}
        <li>
          <NavLink to="/new-channel">Create a channel</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default ChannelList
