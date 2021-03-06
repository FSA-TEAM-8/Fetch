import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllChannels} from '../../store/chat'

const ChannelList = props => {
  const selfUser = props.selfUser
  const channelList = useSelector(state => state.chat.channels)
  const dispatch = useDispatch()

  // filter channel by ones selfUser is a participant
  // adding participants makes new channel for some reason so need to unique it

  let uniqueChannels = []
  let uniqueIds = []
  channelList.forEach(currentChannel => {
    if (!uniqueIds.includes(currentChannel.channel.id)) {
      uniqueChannels.push(currentChannel)
      uniqueIds.push(currentChannel.channel.id)
    }
  })

  const filteredChannels = uniqueChannels.filter(currentChannel =>
    currentChannel.channel.participants.includes(selfUser._id)
  )

  useEffect(() => {
    dispatch(getAllChannels())
  }, [])

  return (
    <div className="channel-list">
      <div className="channel-list-user-name">
        <h4>{selfUser.firstName}'s Channel List</h4>
      </div>
      <ul>
        {filteredChannels.map(currentChannel => {
          const channel = currentChannel.channel
          return (
            <li key={channel.id} className="channel-active-chats">
              <Link to={`/chat/channel/${channel.id}`}>
                <div className="channel-name"># {channel.name}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChannelList
