import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { IconCheckboxOff, IconCheckboxOn } from '@ui/atoms'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Checkbox = ({ checked, error, disabled, onPress }) => (
  <div onClick={disabled ? undefined : onPress}>
    <HiddenCheckbox checked={checked} onChange={onPress} />
    
    {checked
      ? <IconCheckboxOn error={error} disabled={disabled} />
      : <IconCheckboxOff error={error} disabled={disabled} />
    }
  </div>
)

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}