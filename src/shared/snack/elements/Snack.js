import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { Snackbar } from '@ui/molecules'

export const Snack = ({ 
  snack: { active, type, message },
  close,
}) => {
  return (
    active
      ? ReactDOM.createPortal(
          <Snackbar type={type} message={message} onPress={close} />, 
          document.getElementById('snack')
        )
      : null
  )
}

Snack.propTypes = {
  snack: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    type: PropTypes.string,
    message: PropTypes.string,
  }),
  close: PropTypes.func.isRequired,
}