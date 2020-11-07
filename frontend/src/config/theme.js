import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  // Override your theme here
  palette: {
    //type: 'dark',
    primary: {
      main: '#3BA8FC',
      contrastText: '#fff'
    },
    background: {
      paper: '#78c4ff',
    },
  },
  raise: {
    sidebarBg: '#121315',
    sidebarMaxWidth: 250,
    chatBoxHeight: 400,
  }
})
