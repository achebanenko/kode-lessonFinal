import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { paths } from '@shared/router'
import { FORMS, FIELDS } from '@shared/names'
import { formatPhone, normalizePhone, validEmail, validPhone } from '../../helpers'

import { HBox, PageWrapper } from '@ui/atoms'
import { FontSmall } from '@ui/atoms/Typography'
import { ButtonMain, Header, InputField, RequestStatus } from '@ui/molecules'

const renderField = ({ input, meta, disabled }) => (
  <InputField 
    {...input}
    label="Номер телефона или Email"
    error={meta.touched && meta.error ? meta.error : null}
    disabled={disabled}
  />
)

export const SignIn = ({ 
  goBack, 
  untouch,
  formValues, formErrors, formValid,
  requestStatus,
  signIn,
}) => {
  React.useEffect(() => {
    untouch(FORMS.signin, FIELDS.signin.login)
  }, [])

  const onPress = () => signIn({ formValues, formErrors, formValid, })

  return (
    <PageWrapper>
      <Header action={goBack} />

      <Field
        name={FIELDS.signin.login}
        component={renderField}
        validate={[validPhone, validEmail]}
        format={formatPhone}
        normalize={normalizePhone}
        disabled={requestStatus ? true : false}
      />

      <HBox />
      <ButtonMain 
        disabled={requestStatus ? true : false}
        onPress={onPress}
      >
        Войти
      </ButtonMain>

      <HBox size="double" />

      {requestStatus
        ? (
          <RequestStatus 
            status={requestStatus || null} 
            message={(requestStatus === 'loading' && 'Отправляем код подтверждения...')
              || (requestStatus === 'success' && 'Успешно!')
              || (requestStatus === 'failure' && 'Ошибка :(')
              || null
            }
          />
        ) 
        : (
          <FontSmall muted>
            <div>Нет аккаунта?</div>
            <Link to={paths.profile.signUp}>
              Зарегистрируйтесь
            </Link>
          </FontSmall>
        )
      }
    </PageWrapper>
  )
}

SignIn.propTypes = {
  goBack: PropTypes.func.isRequired,
  untouch: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  formValid: PropTypes.bool.isRequired,
  requestStatus: PropTypes.string,
  signIn: PropTypes.func.isRequired,
}

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}