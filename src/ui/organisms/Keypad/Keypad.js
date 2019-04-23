import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'

const Container = styled.div`
  display: flex;
  height: 200px;
  flex-wrap: wrap;
  align-content: space-between;
`

const Row = styled.div`
  flex: 0 1 33.333%;
  padding: 0 ${({ theme }) => theme.paddings.half}px;
  display: flex;
  justify-content: center;
`

const Cell = styled.div`
  display: table-cell;
  width: 40px;
  height:40px;
  font-size: 22px;
  color: ${({ disabled, theme }) => disabled ? theme.pallete.lightBlue : theme.pallete.mainBlack};
  line-height: 28px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  &.full-width {
    width: 100%;
  }
  &.active {
    background-color: ${({ theme }) => theme.pallete.lightGray};
  }
  cursor: pointer;
`

export const Keypad = ({ keys, disabled }) => (
  <Container>
    {keys.map((key,i) => (
      <Row key={i}>
        <div>
          <Cell 
            className={key.classNames}
            disabled={disabled}
            onClick={disabled ? undefined : key.onPress}
          >
            {{}.toString.call(key.render) === '[object Function]' 
              ? key.render({ disabled, }) 
              : key.render
            }
          </Cell>
        </div>
      </Row>
    ))}
  </Container>
)

Keypad.propTypes = {
  keys: PropTypes.arrayOf(
    PropTypes.shape({
      classNames: PropTypes.string,
      render: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.func,
      ]),
      onPress: PropTypes.func,
    })
  ).isRequired,
  disabled: PropTypes.bool,
}