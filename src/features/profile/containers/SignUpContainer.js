import { connect } from 'react-redux'
import { SignUp } from '../pages'
import { routerActions } from '@shared/router'

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
})

export const SignUpContainer = connect(
  null,
  mapDispatchToProps,
)(SignUp)
