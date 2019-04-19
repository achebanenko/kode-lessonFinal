import * as React from 'react'
import PropTypes from 'prop-types'

export const Home = ({ goProfileFlow }) => (
  <div onClick={goProfileFlow}>Go to profile flow</div>
)

Home.propTypes = {
  goProfileFlow: PropTypes.func.isRequired,
}
