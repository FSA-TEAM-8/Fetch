import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getAllChannels} from '../../store/chat'
import {me} from '../../store/user'

const ChannelList = () => {
  const user = useSelector(state => state.user)
  const channelList = useSelector(state => state.chat.channels)
  const dispatch = useDispatch()

  // filter channel by ones user is a participant
  // const filteredChannels = channelList.filter(currentChannel =>
  //   currentChannel.channel.participants.includes(user._id)
  // )
  // // adding participants makes new channel for some reason so need to unique it
  // console.log('filtered channels', filteredChannels)

  let uniqueChannels = []
  let uniqueIds = []
  channelList.forEach(currentChannel => {
    if (!uniqueIds.includes(currentChannel.channel.id)) {
      uniqueChannels.push(currentChannel)
      uniqueIds.push(currentChannel.channel.id)
    }
  })

  const filteredChannels = uniqueChannels.filter(currentChannel =>
    currentChannel.channel.participants.includes(user._id)
  )

  useEffect(() => {
    dispatch(getAllChannels())
    dispatch(me())
  }, [])

  return (
    <div
      className="chatBar container"
      style={{
        padding: '8px'
      }}
    >
      User's Channel List
      <ul>
        {filteredChannels.map(currentChannel => {
          const channel = currentChannel.channel
          return (
            <li key={channel.id}>
              <NavLink
                to={`/chat/channel/${channel.id}`}
                className="active-chats"
              >
                <span
                  style={{
                    color: 'black',
                    padding: '25px'
                  }}
                >
                  # {channel.name}
                </span>
              </NavLink>
            </li>
          )
        })}
        <li>
          {/* <NavLink to="/new-channel">Create a channel // does not work atm</NavLink> */}
        </li>
      </ul>
    </div>
  )
}

export default ChannelList
