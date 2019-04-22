import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const FontSmall = styled.div`
  font-size: 14px;
  color: ${({ muted, theme }) => muted ? theme.pallete.mainGray : theme.pallete.mainBlack};
  line-height: 24px;
`

FontSmall.propTypes = {
  muted: PropTypes.bool,
}