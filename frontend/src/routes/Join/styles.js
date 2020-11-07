const style = (theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  hotkeys: {
    outline: 'none',
  }
});

export default style;
