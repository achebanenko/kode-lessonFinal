import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { SignIn } from '../pages'
import { routerActions } from '@shared/router'
import { signInSubmitTrigger } from '../actions'

const SignInReduxForm = reduxForm({
  form: 'signin',
})(SignIn)

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  signInNotValid: (details) => dispatch(signInSubmitTrigger(details)),
  signIn: (values) => dispatch(signInSubmitTrigger(values)),
})

export const SignInContainer = connect(
  null,
  mapDispatchToProps,
)(SignInReduxForm)
