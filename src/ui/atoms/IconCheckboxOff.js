import React from 'react'
import { theme } from '@ui/theme'

export const IconCheckboxOff = ({ error, disabled }) => (
  <svg width={24} height={24} fill="none">
    <path 
      d="M1 1h22v22H1V1z" 
      strokeWidth={2} 
      stroke={error
        ? theme.pallete.mainRed
        : disabled 
          ? theme.pallete.lightGray 
          : theme.pallete.mainBlue
      } 
    />
  </svg>
)