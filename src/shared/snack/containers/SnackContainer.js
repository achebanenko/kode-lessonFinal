import { connect } from 'react-redux'
import { snackSelectors } from '@shared/snack/selectors'
import { snackActions} from '@shared/snack/actions'
import { Snack } from '@ui/molecules'

const mapStateToProps = state => ({
  ...snackSelectors.getSnack(state)
})

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(snackActions.close()),
})

export const SnackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snack)