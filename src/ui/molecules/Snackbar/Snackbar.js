import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { IconUser, VBox } from '@ui/atoms'

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
`

export const Snackbar = ({ type, message, onPress }) => (
  <Container type={type} onClick={onPress}>
    <IconUser />
    <VBox />
    {message}
  </Container>
)

Snackbar.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}