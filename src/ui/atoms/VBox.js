import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const VBox = styled.div`
  width: ${({ size, theme }) => (
    !size ? theme.paddings.main : theme.paddings[size]
  )}px;
`

VBox.propTypes = {
  size: PropTypes.oneOf(['half','quoter','threehalfs','double']),
}