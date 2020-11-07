import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'
import { HotKeys } from "react-hotkeys";
import { KEYMAP } from 'config/constants'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <HotKeys keyMap={KEYMAP} className={classes.hotkeys}>
      <CssBaseline />
      {children}
    </HotKeys>
  )
};

export default MainLayout;
