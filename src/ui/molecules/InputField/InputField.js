import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'

const Container = styled.div`
  display: flex;
  position: relative;
  padding-top: 15px;
  min-height: 90px;
  flex-direction: column;
`

const Label = styled.label`
  position: absolute;
  top: 25px;
  left: 0;
  font-size: ${({focused}) => focused ? 12 : 16}px;
  line-height: ${({focused}) => focused ? 16 : 24}px;
  color: ${({ error, theme }) => error ? theme.pallete.mainRed : theme.pallete.mainGray};
  transition: all 0.1s ease-out;
  transform: translateY(${({focused}) => focused && '-25px'});
`

const TextInput = styled.input`
  position: absolute;
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ focused, disabled, theme }) => focused && !disabled ? theme.pallete.mainBlue : theme.pallete.mainGray};
  outline: none;
`

const Misc = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  font-size: 12px;
  line-height: 16px;
  color: ${({ error, theme }) => error ? theme.pallete.mainRed: theme.pallete.mainGray};
`

export const InputField = ({ 
  label,
  value,
  tip,
  error,
  disabled,
  onFocus,
  onBlur,
  onChange,
}) => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = e => {
    if (onFocus) onFocus(e)
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) onBlur(e)
    setFocused(value ? true : false)
  }

  React.useEffect(() => {
    if (value) setFocused(true)
  })
  
  return (
    <Container>
      <Label focused={focused} error={error}>
        {label}
      </Label>
      <TextInput
        value={value}
        focused={focused}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={disabled ? undefined : onChange}
        inputmode="numeric"
        inputType="phone"
        type="tel"
      />
      <Misc error={error}>
        {error ? error : tip }
      </Misc>
    </Container>
  )
}

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
}