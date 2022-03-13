import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Routes from './app/AppRoutes'
import './App.css'

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
