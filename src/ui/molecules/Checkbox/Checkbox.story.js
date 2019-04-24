import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

import { Checkbox } from './Checkbox'

storiesOf('ui/molecules', module)
  .add('Checkbox', () => (
    <Checkbox
      checked={boolean('checked', false)}
      error={text('error', null)}
      disabled={boolean('disabled', false)}
      onPress={() => undefined}
    />
  ))