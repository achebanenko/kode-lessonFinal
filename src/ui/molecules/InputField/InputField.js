import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'

const Field = styled.div`
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

const TextInput = styled.input.attrs({ type: 'text' })`
  position: absolute;
  width: 100%;
  height: 40px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ focused, theme }) => focused ? theme.pallete.mainBlue : theme.pallete.mainGray};
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
  onFocus,
  onBlur,
  onChange,
}) => {
  const [focused, setFocused] = React.useState(value ? true : false)
  const handleFocus = e => {
    if (onFocus) onFocus(e) //e.preventDefault()
    setFocused(true)
  }
  const handleBlur = e => {
    if (onBlur) onBlur(e) //e.preventDefault()
    setFocused(value ? true : false)
  }
  React.useEffect(() => {
    //if (value.length > 0) setFocused(true)
  })
  return (
    <Field>
      <Label focused={focused} error={error}>
        {label}
      </Label>
      <TextInput
        value={value}
        focused={focused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
      />
      <Misc error={error}>
        {error ? error : tip }
      </Misc>
    </Field>
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