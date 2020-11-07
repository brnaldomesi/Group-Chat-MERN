import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import isUrl from 'is-url'
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const Message = ({ message: { text, username, time}, myName}) => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState('');
  let isSentByMe = false;
  const trimmedName = myName.trim().toLowerCase();

  useEffect(() => {
    if(isUrl(text)) {    
      fetch(text)
        .then(response => response.blob())
        .then(image => {
          if(image.type.startsWith('image')) {
            setImageUrl(text);
          }
        })
        .catch(() => {
          const noCorsUrlPrefix = 'https://cors-anywhere.herokuapp.com/';
          const seperateStartPosition = text.indexOf('//') + 2;
          const cuttedUrl = text.substring(seperateStartPosition);
          const noCorsUrl = noCorsUrlPrefix + cuttedUrl;
          fetch(noCorsUrl)
            .then(res => res.blob())
            .then(img => {
              if(img.type.startsWith('image')) {
                setImageUrl(text);
              }
            })
            .catch(error => {
              console.error('Error', error)
            })
        }
      );
    }
  },[text])

  if(username === trimmedName) {
    isSentByMe = true;
  }

  return (
    <>
      <Box 
        display="flex" 
        justifyContent={isSentByMe ? 'flex-end' : 'flex-start'}
      >
        <Typography variant="h6">
          {isSentByMe ? '' : username + ' '}{time}
        </Typography>
      </Box>
      <Box 
        display="flex" 
        justifyContent={isSentByMe ? 'flex-end' : 'flex-start'}
      >
        <Box 
          borderRadius={8} 
          p={1} 
          maxWidth="100%" 
          bgcolor={isSentByMe ? 'primary.main' : 'lightgray'} 
          color={isSentByMe ? 'primary.contrastText' : undefined}
        >
          <Typography
            variant="h6"
            className={isUrl(text) ? clsx([classes.breakAll, classes.link]) : classes.breakAll}
            component={isUrl(text) ? 'a' : undefined}
            href={isUrl(text) ? text : undefined}
            target={isUrl(text) ? '_blank' : undefined}
          >
            {text}
          </Typography>
        </Box>
      </Box>
      {imageUrl !== '' && 
        <Box py={1}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
          />
        </Box>
      }
    </>
  );
}

export default Message;
