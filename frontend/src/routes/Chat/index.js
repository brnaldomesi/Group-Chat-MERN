import { BASE_URL, SNACKBAR_TYPE } from 'config/constants'
import React, { useEffect, useState } from "react";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Hidden from '@material-ui/core/Hidden';
import { HotKeys } from "react-hotkeys";
import Messages from './Messages';
import ScrollToBottom from 'react-scroll-to-bottom';
import Shortcuts from 'components/Shortcuts';
import Sidebar from './Sidebar';
import Submit from './Submit';
import io from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';
import styles from './styles'
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(styles);

let socket;

const Chat = ({ location }) => {
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState('');
  const [username, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const routerHistory = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(BASE_URL);

    setRoom(room);
    setUserName(name);

    socket.emit('join', { username: name, room }, (error) => {
      if(error) {
        enqueueSnackbar(error, { variant: SNACKBAR_TYPE.ERROR });
        routerHistory.push('/');
      }
    });
  }, [location.search, enqueueSnackbar, routerHistory]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event, extraMessage = null) => {
    if(event !== null) {
      event.preventDefault();
    }

    if(message && event !==null) {
      socket.emit('sendMessage', message, () => setMessage(''));
    } else if(extraMessage !== null) {
      socket.emit('sendMessage', extraMessage, () => setMessage(''));
    }
  }
   
  const handlers = {
    CHAT_LEAVE: () => window.location.href= "/"
  };

  return (
    <HotKeys handlers={handlers} className={classes.hotkeys}>
      <Container component="main" maxWidth="md">
        <Shortcuts />
        <Box border={1} borderColor="primary.main">
          <Header 
            username={username} 
            room={room} 
            users={users} 
          />
          <Box display="flex" className={classes.chatBox}>
            <Hidden xsDown>
              <Sidebar room={room} users={users} />
            </Hidden>
            <ScrollToBottom className={classes.messages}>
              <Messages messages={messages} username={username} />
            </ScrollToBottom>
          </Box>
          <Submit 
            messages={messages} 
            message={message} 
            setMessage={setMessage} 
            sendMessage={sendMessage} 
          />
        </Box>
      </Container>
    </HotKeys>
  )
};

export default Chat;
