import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { paths } from '@shared/router'
import { FORMS, FIELDS } from '@shared/names'
import { formatPhone, normalizePhone, validEmail, validPhone } from '../../helpers'

import { HBox, PageWrapper } from '@ui/atoms'
import { FontSmall } from '@ui/atoms/Typography'
import { ButtonMain, Header, InputField } from '@ui/molecules'

const renderField = ({ input, meta }) => (
  <InputField 
    {...input}
    label="Номер телефона или Email"
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
    untouch(FORMS.signin, FIELDS.signin.login)
  }, [])

  let data = {
    values: formValues,
    errors: formErrors,
    valid: formValid,
  }

  if (FIELDS.signin.login in formErrors) {
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
        name={FIELDS.signin.login}
        component={renderField}
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

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}