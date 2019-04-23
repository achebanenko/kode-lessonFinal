import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'

import { RequestStatus } from './RequestStatus'

storiesOf('ui/molecules', module)
  .add('RequestStatus', () => (
    <RequestStatus
      status={select('status', {
        loading: 'loading',
        success: 'success',
        failure: 'failure',
      }, 'loading')}
      message={text('message', 'Отправляем код подтверждения...')}
    />
  ))