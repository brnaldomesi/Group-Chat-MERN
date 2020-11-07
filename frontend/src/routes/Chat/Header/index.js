import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from 'routes/Chat/Sidebar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles'

const useStyles = makeStyles(styles);

const Header = ({username, room, users}) => {
  const classes = useStyles();
  const [sidebarOpen, toggleSidebar] = useState(false);
  
  const handleDrawerClose = () => {
    toggleSidebar(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={() => toggleSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={sidebarOpen} onClose={handleDrawerClose}>
              <Sidebar room={room} users={users} />
            </Drawer>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            {username}
          </Typography>
          <Link href="/">
            <Button variant="contained">Leave</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Header;
