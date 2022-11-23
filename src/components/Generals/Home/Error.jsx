import React from 'react'
import Alert from '@mui/material/Alert';

const Error = ({message}) => {
  return (
    <div>
      <Alert severity="error">{message}</Alert>
    </div>
  )
}

export {Error}
