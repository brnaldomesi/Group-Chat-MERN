const style = (theme) => ({
  breakAll: {
    wordBreak: 'break-all',
    color: 'white',
  },
  link: {
    '&:hover': {
      color: 'navy'
    },
    '&:visited': {
      color: 'black'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
});

export default style;
