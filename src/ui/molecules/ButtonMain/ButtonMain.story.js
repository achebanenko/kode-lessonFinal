import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import { ButtonMain } from './ButtonMain'

storiesOf('ui/molecules', module)
  .add('ButtonMain', () => (
    <ButtonMain
      disabled={boolean('disabled', false)}
    >
      {text('children', 'Войти')}
    </ButtonMain>
  ))
