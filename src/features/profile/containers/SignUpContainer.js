import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignUp } from '../pages'
import { routerActions } from '@shared/router'
import { signUpSubmitTrigger } from '../actions'

const SignUpReduxForm = reduxForm({
  form: 'signup',
})(SignUp)

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  signUpNotValid: (o) => dispatch(signUpSubmitTrigger(o)),
  signUp: (values) => dispatch(signUpSubmitTrigger(values)),
})

export const SignUpContainer = connect(
  null,
  mapDispatchToProps,
)(SignUpReduxForm)
