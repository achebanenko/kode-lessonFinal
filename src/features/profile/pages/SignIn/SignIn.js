import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { paths } from '@shared/router'
import { formatPhone, normalizePhone, validEmail, validPhone } from '../../shared'

import { HBox, PageWrapper } from '@ui/atoms'
import { FontSmall } from '@ui/atoms/Typography'
import { ButtonMain, Header, InputField } from '@ui/molecules'

const PhoneOrEmail = ({ input, meta, ...rest }) => (
  <InputField 
    {...rest}
    {...input}
    error={meta.touched && meta.error ? meta.error : null}
  />
)

export const SignIn = ({ 
  goBack, 
  untouch, valid, submitting, handleSubmit,
  signInNotValid, signIn,
}) => {
  React.useEffect(() => {
    untouch('signin', 'phoneoremail')
  }, [])

  return (
    <PageWrapper>
      <Header action={goBack} />

      <Field
        name="phoneoremail"
        label="Номер телефона или Email"
        component={PhoneOrEmail}
        validate={[validPhone, validEmail]}
        format={formatPhone}
        normalize={normalizePhone}
      />
      <HBox />

      <ButtonMain 
        disabled={submitting}
        onPress={
          valid 
            ? handleSubmit(signIn) 
            : () => signInNotValid({ 
              openSnack: true,
              type: 'error',
              msgUser: 'Поле Номер телефона или Email заполнено неверно'
            })
        }
      >
        Войти
      </ButtonMain>
      <HBox size="double" />

      <FontSmall muted>
        <div>Нет аккаунта?</div>
        <Link to={paths.profile.signUp}>
          Зарегистрируйтесь
        </Link>
      </FontSmall>
    </PageWrapper>
  )
}

SignIn.propTypes = {
  goBack: PropTypes.func.isRequired,
  untouch: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signInNotValid: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
}

PhoneOrEmail.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}