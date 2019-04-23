import React from 'react'
import { styled } from '@ui/theme'

const StyledSvg = styled.svg`
  animation: rotation 1.5s linear infinite

  @keyframes rotation {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoaderLoading = () => (
  <StyledSvg width={56} height={56} fill="none">
    <circle cx={28} cy={28} r={28} fill="#003594" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.499 28.093a7.5 7.5 0 1 1 5.56 7.152l-.647 2.414c5.334 1.43 10.818-1.736 12.247-7.07 1.43-5.335-1.736-10.819-7.07-12.248-5.335-1.43-10.819 1.736-12.248 7.07a10.008 10.008 0 0 0-.343 2.713l2.5-.031z"
      fill="#fff"
    />
  </StyledSvg>
)