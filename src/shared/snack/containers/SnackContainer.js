import { connect } from 'react-redux'
import { getSnack } from '../selectors'
import { close } from '../actions'
import { Snack } from '../elements'

const mapStateToProps = state => ({
  snack: getSnack(state)
})

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(close()),
})

export const SnackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snack)