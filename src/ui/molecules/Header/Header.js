import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { IconBack, VBox } from '@ui/atoms'

const StyledHeader = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.paddings.main}px;
  align-content: center;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const Title = styled.div`
  font-size: 20px;
  line-height: 32px;
  ${({ centered }) => centered 
    ? 'flex: 1; text-align: center;'
    : null
  }
`

export const Header = ({ title, action, centered }) => (
  <StyledHeader>
    <Button onClick={action}>
      <IconBack />
    </Button>
    <VBox/>
    <Title centered>
      {title}
    </Title>
  </StyledHeader>
)

Header.propTypes = {
  title: PropTypes.string,
  action: PropTypes.func,
}