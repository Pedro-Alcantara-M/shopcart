import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Products from './components/products'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2ab7ca',
      contrastText:'#086b81',
    },
    secondary: {
      main: '#fff',
      contrastText:'#086b81',
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
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Products/>
        <Footer/>
      </ThemeProvider>
      </div>
  );
}

export default App;
