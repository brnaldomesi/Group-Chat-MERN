import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Message from './Message';
import { useScrollToBottom } from 'react-scroll-to-bottom';

const Messages = ({ messages, username }) => {
  const scrollToBottom = useScrollToBottom()

  useEffect(() => {
    scrollToBottom({ behavior: 'smooth'})
  }, [messages, scrollToBottom])
  
  return (
    <>
      {messages.map((message, i) => 
        <Box 
          key={i} 
          px={2} 
          py={1}
        >
          <Message message={message} myName={username}/>
        </Box>
      )}
    </>
  )
};

export default Messages;
