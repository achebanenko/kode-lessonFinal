import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox } from '@ui/atoms'
import { Checkbox } from '@ui/molecules'

const Container = styled.div`
  display: flex;
`

const Label = styled.div`
  font-size: 12px;
  line-height: 16px;
  a {
    border-bottom: 1px solid ${({ theme}) => theme.pallete.mainBlue};
  }
`

export const CheckboxField = ({ checked, label, error, disabled, onChange }) => (
  <Container>
    <Checkbox 
      checked={checked}
      error={error} 
      disabled={disabled} 
      onPress={() => onChange(!checked)} />
    <VBox />
    <Label>
      {label}
    </Label>
  </Container>
)

CheckboxField.propTypes = {
  label: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}