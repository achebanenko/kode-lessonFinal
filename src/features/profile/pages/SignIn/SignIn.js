import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { paths } from '@shared/router'
import { formatPhone, normalizePhone, validEmail, validPhone } from '../../helpers'

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
  untouch,
  formValues, formErrors, formValid,
  signIn,
}) => {
  React.useEffect(() => {
    untouch('signin', 'phoneoremail')
  }, [])

  let data = {
    values: formValues,
    errors: formErrors,
    valid: formValid,
  }

  if ('phoneoremail' in formErrors) {
    data = Object.assign({}, data, {
      shouldOpenSnack: true,
      snack: {
        type: 'error',
        message: 'Поле Номер телефона или Email заполнено неверно'
      }
    })
  }

  const onPress = () => signIn(data)

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
        onPress={onPress}
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
  signIn: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  formValid: PropTypes.bool.isRequired,
}

PhoneOrEmail.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}