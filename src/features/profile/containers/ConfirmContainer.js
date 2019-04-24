import { connect } from 'react-redux'
import { routerActions } from '@shared/router'
import { Confirm } from '../pages'

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
})

export const ConfirmContainer = connect(
  null,
  mapDispatchToProps,
)(Confirm)
