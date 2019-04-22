import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { InputField } from './InputField'

storiesOf('ui/molecules', module)
  .add('InputField', () => (
    <InputField 
      label={text('label', 'Номер телефона')}
      error={text('error', 'Поле заполнено неверно')}
      tip={text('tip', 'Укажите ваш номер телефона. Он будет использоваться для входа в приложение')}
    />
  ))