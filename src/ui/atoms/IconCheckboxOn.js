import React from 'react'
import { theme } from '@ui/theme'

export const IconCheckboxOn = ({ error, disabled }) => (
  <svg width={24} height={24} fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0h24v24H0V0zm18.796 5.646l1.967 1.968L9.795 18.558l-6.149-6.149 1.968-1.968 4.182 4.205 9-9z"
      fill={error
        ? theme.pallete.mainRed
        : disabled 
          ? theme.pallete.lightGray 
          : theme.pallete.mainBlue
      }
    />
  </svg>
)