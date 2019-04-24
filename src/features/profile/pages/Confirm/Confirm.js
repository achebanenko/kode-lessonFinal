import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { IconBackspace, HBox, PageWrapper } from '@ui/atoms'
import { FontSmallest } from '@ui/atoms/Typography'
import { Header, RequestStatus } from '@ui/molecules'
import { Keypad, } from '@ui/organisms'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Screen = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`

const Num = styled.div`
  width: 30px;
  height: 30px;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.pallete.mainGray}
  &.active {
    border-color: ${({ theme }) => theme.pallete.mainBlue}
  }
`

export const Confirm = ({ 
  goBack, 
  requestStatus, 
}) => {

  const [pin, setPin] = React.useState( [] )
  const dummy = [null,null,null,null]

  const prevPinRef = React.useRef();
  React.useEffect(() => {
    prevPinRef.current = pin;
  });
  const prevPin = prevPinRef.current;

  React.useEffect(() => (
    console.log( pin.length, pin.join('') )
  ))
  
  const keys = []
  for (let i = 1; i <= 9; i++) {
    keys.push({
      render: i,
      onPress: () => setPin([...pin, i]),
      classNames: (i === pin[pin.length - 1] && prevPin.length < pin.length) ? 'active' : '',
    })
  }

  keys.push({
    classNames: 'full-width',
    render: ({ disabled }) => (<FontSmallest disabled={disabled}>
      Не пришло письмо?
    </FontSmallest>),
    onPress: () => console.log('dispatch'),
  })
  
  keys.push({
    render: 0,
    onPress: () => setPin([...pin, '0']),
    classNames: ('0' === pin[pin.length - 1] && prevPin.length < pin.length) ? 'active' : '',
  })
  
  keys.push({
    render: ({ disabled }) => <IconBackspace disabled={disabled} />,
    onPress: () => setPin( pin.slice(0,-1) ),
  })

  return (
    <PageWrapper>
      <Header title="Подтверждение" action={goBack} centered />

      <div className="muted text-center">
        Введите код из SMS, отправленный на номер
      </div>
      <HBox size="double" />

      <Container>
        <Screen>
          {
            dummy.concat(pin)
              .sort((a,b) => {
                if (a === null) return 1
                else if (b === null) return -1
                else return 0
              })
              .slice(0,4) 
              .map((v,i) => (
                <Num key={i} className={v ? 'active' : ''}>
                  {v}
                </Num>
              ))
          }
        </Screen>
      </Container>
      
      <HBox size="max" />

      <Keypad 
        keys={keys}
        disabled={requestStatus ? true : false} 
      />
    </PageWrapper>
  )
}

Confirm.propTypes = {
  goBack: PropTypes.func.isRequired,
}