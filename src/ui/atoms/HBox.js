import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const HBox = styled.div`
  height: ${({ size, theme }) => (
    !size || size === 'max' ? theme.paddings.main : theme.paddings[size]
  )}px;
  flex: ${({ size }) => (
    size === 'max' ? '1 1 auto' : '0 1 auto'
  )};
`

HBox.propTypes = {
  size: PropTypes.oneOf(['half','quoter','threehalfs','double','max']),
}