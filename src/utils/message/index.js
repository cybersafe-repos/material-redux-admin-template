import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

let alerts = []

const addMessage = (message, severity, timeOUt = 3000) => {
  const id = Date.now()
  alerts.push({
    id,
    message: (
      <Alert severity={severity} key={Date.now()} onClose={() => removeMessage(id)}>
        {message}
      </Alert>
    ),
  })
  renderAlerts()
  setTimeout(() => removeMessage(id), timeOUt)
}

const removeMessage = id => {
  alerts = alerts.filter(i => i.id !== id)
  renderAlerts()
}

function renderAlerts() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <div className="alert-container">{alerts.map(i => i.message)}</div>
    </ThemeProvider>,
    document.getElementById('alerts')
  )
}

export const success = (message, timeout) => addMessage(message, 'success', timeout)
export const info = (message, timeout) => addMessage(message, 'info', timeout)
export const error = (message, timeout) => addMessage(message, 'error', timeout)
export const warn = (message, timeout) => addMessage(message, 'warning', timeout)
