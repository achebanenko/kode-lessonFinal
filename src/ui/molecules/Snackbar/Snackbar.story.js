import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { Snackbar } from './Snackbar'

storiesOf('ui/molecules', module)
  .add('Snackbar', () => (
    <Snackbar
      type={select('type', {
        error: 'error',
        info: 'info',
      }, 'error')}
      message={text('message', 'Поле Номер телефона или Email заполнено неверно')}
      onPress={() => undefined}
    />
  ))