import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { paths } from '@shared/router'

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

  const format = input => {
    if (!input) return ''

    if (/^[0-9]+$/.test(input)) {
      if (input.length >= 10) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7,9)}-${input.slice(9)}`
      if (input.length > 8 && input.length < 10) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7)}`
      if (input.length === 8) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4,7)}-${input.slice(7)}`
      if (input.length > 5 && input.length < 8) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4)}`
      if (input.length === 5) return `+${input.slice(0,1)} (${input.slice(1,4)}) ${input.slice(4)}`
      if (input.length > 1 && input.length < 5) return `+${input.slice(0,1)} ${input.slice(1)}`
      return `+${input.slice(0,1)}`
    }

    return input
  }
  const normalize = value => {
    return value.replace(/\+|\s+|\(|\)|-/g, '')
  }

  const validEmail = value => (
    (value && !/^[0-9]+$/.test(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      ? 'Поле заполнено неверно'
      : undefined
  )
  const validPhone = value => (
    (value && /^[0-9]+$/.test(value) && value.length !== 11)
      ? 'Поле заполнено неверно'
      : undefined
  )

  return (
    <PageWrapper>
      <Header action={goBack} />

      <Field
        name="phoneoremail"
        label="Номер телефона или Email"
        component={PhoneOrEmail}
        validate={[validPhone, validEmail]}
        format={format}
        normalize={normalize}
      />
      <HBox />

      <ButtonMain 
        disabled={submitting}
        onPress={
          valid 
            ? handleSubmit(signIn) 
            : () => signInNotValid({ 
              type: 'error',
              errorMessage: 'Поле &laquo;Номер телефона или Email заполнено неверно&raquo;'
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