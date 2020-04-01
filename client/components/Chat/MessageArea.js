import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllMessages} from '../../store/chat'
import {me} from '../../store/user'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ChannelList from './ChannelList'
import MessageList from './MessageList'

import {useParams} from 'react-router-dom'

const MessageArea = () => {
  // const dispatch = useDispatch()
  // const user = useSelector(state => state.user)
  // const messages = useSelector(state => state.chat.messages)
  // console.log('messages', messages)

  // useEffect(() => {
  //   dispatch(getAllMessages())
  //   dispatch(me())
  // }, [])

  const {channelId} = useParams()

  return (
    <div style={{display: 'flex'}}>
      <ChannelList />

      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '90vh',
            width: '100%'
          }}
        >
          {/* check if there is a channelId, if there isnt show start a channel/message */}
          {channelId ? (
            <MessageList style={{height: '90vh'}} />
          ) : (
            <div>
              This could also be general chat room
              <p>Welcome to chat room!</p>
              <p>Please view a channel or a user's profile to chat</p>
            </div>
          )}
        </Typography>
      </Container>
    </div>
  )
}

export default MessageArea
