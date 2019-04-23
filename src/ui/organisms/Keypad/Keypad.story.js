import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import { Keypad } from './Keypad'
import { IconBackspace } from '@ui/atoms'
import { FontSmallest } from '@ui/atoms/Typography'

const Backspace = {
  render: ({ disabled }) => <IconBackspace disabled={disabled} />,
  onPress: () => console.log('click'),
}

const Resend = {
  classNames: 'full-width',
  render: ({ disabled }) => (<FontSmallest disabled={disabled}>
    Не пришло письмо?
  </FontSmallest>),
  onPress: () => console.log('dispatch'),
}

const sample = [
  {render: 1, onPress: () => console.log(1),},
  {render: 2},
  {render: 3, onPress: () => console.log(3),},
  {render: 4},
  {render: 5},
  {render: 6},
  {render: 7, classNames: 'active', onPress: () => console.log(7),},
  {render: 8},
  {render: 9},
  Resend,
  {render: 0},
  Backspace,
]

storiesOf('ui/organisms', module)
  .add('Keypad', () => (
    <Keypad 
      keys={sample}
      disabled={boolean('disabled', false)}
    />
  ))