import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'

const StyledSnack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  padding: ${({ theme }) => theme.paddings.main}px;
  font-size: 14px;
  color: ${({ theme }) => theme.pallete.mainWhite};
  line-height: 20px;
  background-color: ${({ type, theme }) => type === 'error' ? theme.pallete.mainRed : theme.pallete.mainBlue};
`

export const Snack = ({ 
  snack: { active, type, message },
  close,
}) => {
  return (
    active
      ? ReactDOM.createPortal(
          <StyledSnack type={type} onClick={close}>
            {message}
          </StyledSnack>, 
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