import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Popover from '@material-ui/core/Popover';
import React from 'react';
import ReactGiphySearchbox from "react-giphy-searchbox";
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles'

const useStyles = makeStyles(styles);

const GifPopover = ({ sendMessage }) => {
  const classes = useStyles();
  const handleGifSelect = popupState => (item) => {
    popupState.close();
    sendMessage(item.images.original.url);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<CardGiftcardIcon />}
            {...bindTrigger(popupState)}
            className={classes.fullHeight}
          >
            GIF
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Box p={2}>
              <ReactGiphySearchbox
                apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                onSelect={handleGifSelect(popupState)}
                masonryConfig={[
                  { columns: 2, imageWidth: 110, gutter: 5 },
                  { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                ]}
              />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default GifPopover;
