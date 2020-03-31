import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllMessages} from '../../store/chat'
import {me} from '../../store/user'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ChannelList from './ChannelList'
import MessageList from './MessageList'

const MessageArea = () => {
  // const dispatch = useDispatch()
  // const user = useSelector(state => state.user)
  // const messages = useSelector(state => state.chat.messages)
  // console.log('messages', messages)

  // useEffect(() => {
  //   dispatch(getAllMessages())
  //   dispatch(me())
  // }, [])

  // to save draft messages, need to add it to the database aka, create state and action creator for the draft message, a note for later todo
  // via wroteMessage and handleChange

  return (
    <div style={{display: 'flex'}}>
      <ChannelList />

      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: '#cfe8fc',
            height: '90vh'
            // border: '1px solid gray'
          }}
        >
          {/* message list */}
          <MessageList />
        </Typography>
      </Container>
    </div>
  )
}

export default MessageArea
