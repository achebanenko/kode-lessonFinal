import { connect } from 'react-redux'
import { reduxForm, getFormValues, getFormSyncErrors, isValid } from 'redux-form'
import { SignUp } from '../pages'
import { routerActions } from '@shared/router'
import { FORMS } from '@shared/names'
import { signUpSubmitTrigger } from '../actions'
import { apiSelectors } from '@shared/api'

const SignUpReduxForm = reduxForm({
  form: FORMS.signup,
})(SignUp)

const mapStateToProps = state => ({
  formValues: getFormValues(FORMS.signup)(state) || {},
  formErrors: getFormSyncErrors(FORMS.signup)(state),
  formValid: isValid(FORMS.signup)(state),
  requestStatus: apiSelectors.profileRegistration.getStatus(state),
})

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(routerActions.backTrigger()),
  signUp: (data) => dispatch(signUpSubmitTrigger(data)),
})

export const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpReduxForm)
