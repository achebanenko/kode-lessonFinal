import React from 'react'
import PropTypes from 'prop-types'

import { HBox, PageWrapper } from '@ui/atoms'
import { ButtonMain, Header, InputField } from '@ui/molecules'

export const SignUp = ({ goBack }) => (
  <PageWrapper>
    <Header title="Регистрация в Utair" action={goBack} />
    
    <InputField 
      label="Номер телефона" 
      tip="Укажите ваш номер телефона. Он будет использоваться для входа в приложение"
    />
    <HBox />

    <ButtonMain onPress={() => undefined}>
      Войти
    </ButtonMain>
  </PageWrapper>
)

SignUp.propTypes = {
  goBack: PropTypes.func.isRequired,
}