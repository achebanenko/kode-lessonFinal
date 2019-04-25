import { connect } from 'react-redux'
import { routerActions } from '@shared/router'
import { Confirm } from '../pages'
import { apiDataSelectors } from '@shared/apiData'
import { confirmSubmitTrigger, confirmResendTrigger } from '../actions'
import { apiSelectors } from '@shared/api'

const mapStateToProps = state => ({
  attempt: apiDataSelectors.auth.getAttempt(state),
  requestStatus: apiSelectors.profileConfirm.getStatus(state),
})

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  confirm: (data) => dispatch(confirmSubmitTrigger(data)),
  resend: () => dispatch(confirmResendTrigger()),
})

export const ConfirmContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirm)
