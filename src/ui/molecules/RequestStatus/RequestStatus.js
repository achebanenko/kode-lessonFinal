import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { HBox, LoaderLoading, LoaderSuccess, LoaderFailure } from '@ui/atoms'
import { FontSmall } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RequestStatus = ({ status, message }) => (
  <Container>
    {status === 'loading'
      ? <LoaderLoading />
      : null
    }

    {status === 'success'
      ? <LoaderSuccess />
      : null
    }

    {status === 'failure'
      ? <LoaderFailure />
      : null
    }
    <HBox size="half" />
    <FontSmall muted>
      {message}
    </FontSmall>
  </Container>
)

RequestStatus.proptypes = {
  status: PropTypes.oneOf(['loading','success','failure']),
  message: PropTypes.string,
}