import React, { useEffect, useRef } from 'react';

import Box from '@material-ui/core/Box';
import GifPopover from './GifPopover'
import { HotKeys } from "react-hotkeys";
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Submit = ({ setMessage, sendMessage, message, messages }) => {
  const classes = useStyles();
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, [messages])

  const handleSendMessage = gifUrl => {
    sendMessage(null, gifUrl);
  }

  const handlers = {
    CHAT_LEAVE: () => window.location.href= "/"
  };

  return (
    <HotKeys handlers={handlers}>
      <form className={classes.form}>
        <Box flexGrow={1}>
          <input
            className={classes.input}
            type="text"
            autoFocus
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            ref={inputEl}
          />
        </Box>
        <GifPopover sendMessage={handleSendMessage} />
      </form>
    </HotKeys>
  )
};

export default Submit;
