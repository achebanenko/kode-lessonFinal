import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const FontSmallest = styled.div`
  font-size: 10px;
  color: ${({ disabled, theme }) => disabled ? theme.pallete.lightBlue : theme.pallete.mainBlue};
  line-height: 12px;
`

FontSmallest.propTypes = {
  disabled: PropTypes.bool,
}