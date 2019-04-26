import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { FORMS, FIELDS } from '@shared/names'
import { formatPhone, normalizePhone, validPhone, validCheckbox } from '../../helpers'

import { HBox, PageWrapper } from '@ui/atoms'
import { ButtonMain, CheckboxField, Header, InputField, RequestStatus } from '@ui/molecules'

const renderField = ({ input, meta, disabled }) => (
  <InputField 
    {...input}
    label="Номер телефона"
    type="tel"
    tip="Укажите ваш номер телефона. Он будет использоваться для входа в приложение"
    error={meta.touched && meta.error ? meta.error : null}
    disabled={disabled}
  />
)

const renderCheckbox = ({ input, meta, termsText, disabled }) => (
  <CheckboxField 
    {...input}
    label={termsText}
    error={meta.touched && meta.error ? meta.error : null}
    disabled={disabled}
  />
)

export const SignUp = ({ 
  goBack,
  untouch, touch,
  formValues, formErrors, formValid,
  requestStatus,
  signUp,
}) => {

  React.useEffect(() => {
    untouch(FORMS.signup, FIELDS.signup.login)
    untouch(FORMS.signup, FIELDS.signup.terms)
  }, [])

  const onPress = () => {
    touch(FORMS.signup, FIELDS.signup.terms)
    return signUp({formValues, formErrors, formValid})
  }

  return (
    <PageWrapper>
      <Header title="Регистрация в Utair" action={goBack} />
      
      <Field
        name={FIELDS.signup.login}
        component={renderField}
        validate={validPhone}
        format={formatPhone}
        normalize={normalizePhone}
        disabled={requestStatus ? true : false}
      />
      <HBox size="double" />

      {
        requestStatus  
          ? <RequestStatus status={requestStatus} />
          : null
      }

      <HBox size="max" />
      <Field
        name={FIELDS.signup.terms}
        type="checkbox"
        component={renderCheckbox}
        validate={validCheckbox}
        disabled={requestStatus ? true : false}
      />

      <HBox />
      <ButtonMain
        disabled={requestStatus ? true : false}
        onPress={onPress}
      >
        Продолжить
      </ButtonMain>
    </PageWrapper>
  )
}

SignUp.propTypes = {
  goBack: PropTypes.func.isRequired,
  untouch: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  formValid: PropTypes.bool.isRequired,
  requestStatus: PropTypes.string,
  signUp: PropTypes.func.isRequired,
}

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

renderCheckbox.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  termsText: PropTypes.node.isRequired,
}

renderCheckbox.defaultProps = {
  termsText: <>Я ознакомлен с <Link to="//terms">условиями использования моих персональных данных</Link> и даю <Link to="//agree">согласие</Link> на их обработку</>,
}