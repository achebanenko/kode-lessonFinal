import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

const Button = styled.button`
  display: block;
  padding: ${({ theme }) => theme.paddings.main}px;
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.pallete.mainWhite};
  line-height: 24px;
  text-align: center;
  background-color: ${({ disabled, theme }) => disabled ? theme.pallete.lightGray : theme.pallete.mainBlue};
  border: none;
  outline: none;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
`

export const ButtonMain = ({ 
  children, 
  disabled, 
  onPress 
}) => (
  <Button disabled={disabled} onClick={disabled ? undefined : onPress}>
    {children}
  </Button>
)

ButtonMain.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}