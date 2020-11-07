const style = (theme) => ({
  root: {
    width: '100%',
    maxWidth: theme.raise.sidebarMaxWidth,
    backgroundColor: theme.palette.background.paper,
    color: 'white',
    overflow: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

export default style;
