import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

import { InputField } from './InputField'

storiesOf('ui/molecules', module)
  .add('InputField', () => (
    <InputField 
      label={text('label', 'Номер телефона')}
      error={select('error', { 
        null: null, 
        'Поле заполнено неверно': 'Поле заполнено неверно' 
      })}
      tip={text('tip', 'Укажите ваш номер телефона. Он будет использоваться для входа в приложение')}
    />
  ))