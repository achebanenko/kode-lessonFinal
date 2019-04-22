import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { formatPhone, normalizePhone, validPhone } from '../../shared'

import { HBox, PageWrapper } from '@ui/atoms'
import { ButtonMain, Header, InputField } from '@ui/molecules'

const Phone = ({ input, meta, ...rest }) => (
  <InputField 
    {...rest}
    {...input}
    error={meta.touched && meta.error ? meta.error : null}
  />
)

export const SignUp = ({ 
  goBack,
  untouch, valid, submitting, handleSubmit,
  signUpNotValid, signUp,
}) => {
  React.useEffect(() => {
    untouch('signin', 'phone')
  }, [])

  return (
    <PageWrapper>
      <Header title="Регистрация в Utair" action={goBack} />
      
      <Field
        name="phone"
        label="Номер телефона"
        tip="Укажите ваш номер телефона. Он будет использоваться для входа в приложение"
        component={Phone}
        validate={validPhone}
        format={formatPhone}
        normalize={normalizePhone}
      />

      <HBox size="max" />
      
      <ButtonMain
        disabled={submitting}
        onPress={
          valid 
            ? handleSubmit(signUp) 
            : () => signUpNotValid({ 
              type: 'error',
              msgUser: 'Чтобы создать аккаунт, Utair нужно ваше согласие на обработку данных'
            })
        }
      >
        Войти
      </ButtonMain>
    </PageWrapper>
  )
}

SignUp.propTypes = {
  goBack: PropTypes.func.isRequired,
  untouch: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUpNotValid: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
}

Phone.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  tip: PropTypes.string,
}