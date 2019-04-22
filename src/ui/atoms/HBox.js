import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const HBox = styled.div`
  height: ${({ size, theme }) => (
    !size ? theme.paddings.main : theme.paddings[size]
  )}px;
`

HBox.propTypes = {
  size: PropTypes.oneOf(['half','quoter','threehalfs','double']),
}