import React from 'react'
import PropTypes from 'prop-types'

import { IconCheckboxOff, IconCheckboxOn } from '@ui/atoms'

export const Checkbox = ({ value, error, disabled, onPress }) => (
  <div onClick={onPress}>
    {value
      ? <IconCheckboxOn error={error} disabled={disabled} />
      : <IconCheckboxOff error={error} disabled={disabled} />
    }
  </div>
)

Checkbox.proptypes = {
  value: PropTypes.bool.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}