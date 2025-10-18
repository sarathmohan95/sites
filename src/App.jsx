import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Portfolio from './components/Portfolio'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#63d2eb',
    },
    secondary: {
      main: '#f47606',
    },
    background: {
      default: '#3d3d3d',
      paper: 'linear-gradient(45deg, #63d2eb 0%, #3e67a3 100%)',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  )
}

export default App