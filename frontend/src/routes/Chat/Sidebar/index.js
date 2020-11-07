import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GroupIcon from '@material-ui/icons/Group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles'

const useStyles = makeStyles(styles);

const Sidebar = ({
  room,
  users
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <ListItemText primary="Room" />
      </ListItem>
      <ListItem selected button className={classes.nested}>
        <ListItemIcon>
          <RoomServiceIcon />
        </ListItemIcon>
        <ListItemText primary={room} />
      </ListItem>
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {users ? (
            <>
              {users.map(({username}) => (
                <ListItem button className={classes.nested} key={username}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={username} />
                </ListItem>
              ))}
            </>
          ) : null}
        </List>
      </Collapse>
    </List>
  );
}

export default Sidebar;
