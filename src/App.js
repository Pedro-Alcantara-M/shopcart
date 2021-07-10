import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Routes from './routes'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2ab7ca',
      contrastText: '#086b81',
    },
    secondary: {
      main: '#fff',
      contrastText: '#086b81',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff',
    },
    text: {
      primary: '#979797',
      secondary: '#000'
    }

  }
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
