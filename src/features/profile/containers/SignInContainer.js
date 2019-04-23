import { connect } from 'react-redux'
import { reduxForm, getFormValues, getFormSyncErrors, isValid } from 'redux-form'
import { SignIn } from '../pages'
import { routerActions } from '@shared/router'
import { signInSubmitTrigger } from '../actions'

const SignInReduxForm = reduxForm({
  form: 'signin',
})(SignIn)

const mapStateToProps = state => ({
  formValues: getFormValues('signin')(state),
  formErrors: getFormSyncErrors('signin')(state),
  formValid: isValid('signin')(state),
})

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  signIn: (data) => dispatch(signInSubmitTrigger(data)),
})

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInReduxForm)
