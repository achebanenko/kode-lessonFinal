import * as React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { PageBackground, PageWrapper } from '@ui/atoms'
import { ButtonMain } from '@ui/molecules'
import BackgroundImage from '@ui/assets/intro.jpg'

const Greeting = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Home = ({ goProfileFlow }) => (
  <PageBackground url={BackgroundImage}>
    <PageWrapper>
      <Greeting>
        <ButtonMain onPress={goProfileFlow}>
          Мой профиль
        </ButtonMain>
      </Greeting>
    </PageWrapper>
  </PageBackground>
)

Home.propTypes = {
  goProfileFlow: PropTypes.func.isRequired,
}
