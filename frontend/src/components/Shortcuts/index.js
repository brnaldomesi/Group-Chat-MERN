import { KEYMAP } from 'config/constants'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Shortcuts = () => {
  const classes = useStyles();

  return (
    <div className={classes.shortcuts}>
      <h2>
        Keyboard shortcuts
      </h2>

      <table>
        <tbody>
        { Object.keys(KEYMAP).map(item => {
            const name = KEYMAP[item]

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
    </div>
  )
};

export default Shortcuts;
