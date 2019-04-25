import * as React from 'react'
import PropTypes from 'prop-types'

import { HBox, PageBackground, PageWrapper } from '@ui/atoms'
import { ButtonMain } from '@ui/molecules'
import IntroImage from '@ui/assets/intro.jpg'
import HelloImage from '@ui/assets/hello.jpg'

export const Home = ({ 
  goProfileFlow, infoProfile,
  profileId, 
}) => {
  React.useEffect(() => {
    if (profileId) infoProfile()
  }, [])
  return (
    <PageBackground url={profileId ? HelloImage : IntroImage}>
      <PageWrapper>
        <HBox size="max" />
        {!profileId 
          ? (
            <ButtonMain onPress={goProfileFlow}>
              Мой профиль
            </ButtonMain>
          ) : null
        }
      </PageWrapper>
    </PageBackground>
  )
}

Home.propTypes = {
  goProfileFlow: PropTypes.func.isRequired,
  infoProfile: PropTypes.func.isRequired,
  profileId: PropTypes.string, 
}
