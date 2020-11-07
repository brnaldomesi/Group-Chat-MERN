import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'
import { HotKeys } from "react-hotkeys";
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const keyMap = {
  CHAT_JOIN: "shift+r+j",
  CHAT_LEAVE: "shift+r+l",
};

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <HotKeys keyMap={keyMap} className={classes.hotkeys}>
      <Container component="main" maxWidth="xs" className={classes.main}>
        <h2>
          Keyboard shortcuts
        </h2>
 
        <table>
          <tbody>
          { Object.keys(keyMap).map(item => {
              const name = keyMap[item]

              return (
                <tr key={name}>
                  <td>
                    { item }
                  </td>
                  <td>
                    : { name }
                  </td>
                </tr>
              );
              
            })
           }
          </tbody>
        </table>
      </Container>
      <CssBaseline />
      {children}
    </HotKeys>
  )
};

export default MainLayout;
