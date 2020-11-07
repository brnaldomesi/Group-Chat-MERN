const style = (theme) => ({
  form: {
    display: 'flex',
    borderTop: '2px solid #D3D3D3',
  },
  input: {
    border: 'none',
    borderRadius: 0,
    padding: theme.spacing(2),
    width: '100%',
    fontSize: '1.2em',
    '&:focus': {
      outline: 'none',
    }
  }
});

export default style;
