import { connect } from 'react-redux'
import { reduxForm, getFormValues, getFormSyncErrors, isValid } from 'redux-form'
import { SignIn } from '../pages'
import { routerActions } from '@shared/router'
import { FORMS } from '@shared/names'
import { signInSubmitTrigger } from '../actions'
import { apiSelectors } from '@shared/api'
import { apiDataSelectors } from '@shared/apiData'

const SignInReduxForm = reduxForm({
  form: FORMS.signin,
})(SignIn)

const mapStateToProps = state => ({
  formValues: getFormValues(FORMS.signin)(state) || {},
  formErrors: getFormSyncErrors(FORMS.signin)(state),
  formValid: isValid(FORMS.signin)(state),
  requestStatus: apiSelectors.profileLogin.getStatus(state),
  login: apiDataSelectors.auth.getAttempt(state).login,
})

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  signIn: (data) => dispatch(signInSubmitTrigger(data)),
})

export const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInReduxForm)
