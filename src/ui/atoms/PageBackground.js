import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const PageBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ url, theme }) => `${theme.pallete.mainWhite} url(${url}) center center`};
  background-size: cover;
  background-repeat: no-repeat;
`

PageBackground.propTypes = {
  url: PropTypes.string,
}