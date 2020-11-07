import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import { HotKeys } from "react-hotkeys";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { SNACKBAR_TYPE } from 'config/constants'
import Select from '@material-ui/core/Select';
import Shortcuts from 'components/Shortcuts';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles'
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(styles);

export default function Join() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSubmit = () => {
    if(!username || !room) {
      enqueueSnackbar('Please fill out all fields.', { variant: SNACKBAR_TYPE.ERROR });
      return false;
    }
    history.push(`/chat?name=${username}&room=${room}`);
  };
  
  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }
  
  const handleRoomChange = e => {
    setRoom(e.target.value);
  }
  
  const handlers = {
    CHAT_JOIN: handleSubmit
  };
  
  return (
    <HotKeys handlers={handlers} className={classes.hotkeys}>
      <Container component="main" maxWidth="xs">
        <Shortcuts />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ChatIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Real-Time Group Chat
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            onChange={handleUsernameChange}
            value={username}
          />
          <FormControl 
            className={classes.formControl}
            variant="outlined" 
            margin="normal"
            required 
            fullWidth 
          >
            <InputLabel id="room">Room</InputLabel>
            <Select
              labelId="room"
              label="Room"
              value={room}
              onChange={handleRoomChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="FOOTBALL">FOOTBALL</MenuItem>
              <MenuItem value="FIFA">FIFA</MenuItem>
              <MenuItem value="BRNALDO">BRNALDO</MenuItem>
              <MenuItem value="MESSI">MESSI</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Join
          </Button>
        </div> 
      </Container>
    </HotKeys>
  );
}
