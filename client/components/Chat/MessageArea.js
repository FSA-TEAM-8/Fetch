import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {me} from '../../store/user'
import {useParams} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ChannelList from './ChannelList'
import MessageList from './MessageList'

const MessageArea = () => {
  const dispatch = useDispatch()
  const selfUser = useSelector(state => state.user)
  const {channelId} = useParams()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div className="chat-room">
      <ChannelList selfUser={selfUser} />
      <div className="media-center">
        <Container
          className="center-container"
          // style={{paddingLeft: '0px', paddingRight: '0px'}}
        >
          <Typography component="div" className="center-typography">
            {/* check if there is a channelId, if there isnt show start a channel/message */}
            {channelId ? (
              <MessageList selfUser={selfUser} channelId={channelId} />
            ) : (
              <div>
                <p>Welcome to chat room!</p>
                <p>Please view a channel or a user's profile to chat</p>
              </div>
            )}
          </Typography>
        </Container>
      </div>
    </div>
  )
}

export default MessageArea
