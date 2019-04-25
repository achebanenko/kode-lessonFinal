import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { styled } from '@ui/theme'
import { IconUser, VBox } from '@ui/atoms'

const duration = 500

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  padding: ${({ theme }) => theme.paddings.main}px;
  font-size: 14px;
  color: ${({ theme }) => theme.pallete.mainWhite};
  line-height: 20px;
  align-items: center;
  background-color: ${({ type, theme }) => type === 'error' ? theme.pallete.mainRed : theme.pallete.mainBlue};
  > * {
    flex-shrink: 0;
  }
  
  &.snack-enter {
    transform: translateY(-100%);
  }
  &.snack-enter-active {
    transition: transform ${duration}ms;
    transform: translateY(0);
  }
  &.snack-exit {
    transform: translateY(0);
  }
  &.snack-exit-active {
    transition: transform ${duration}ms;
    transform: translateY(-100%);
  }
`

export const Snackbar = ({ type, message, onPress }) => {

  const [animate, setAnimate] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setAnimate(false)
    }, 3000 - duration)
    return (
      setAnimate(true)
    )
  }, [])
  
  return (
    <CSSTransition 
      in={animate}
      classNames="snack"
      timeout={duration}
      unmountOnExit 
      mountOnEnter
    >
    
      <Container type={type} onClick={onPress}>
        <IconUser />
        <VBox />
        {message}
      </Container>
    
    </CSSTransition>
  )
}

Snackbar.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}