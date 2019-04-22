import { styled } from '@ui/theme'

export const PageWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.paddings.main}px;
  min-height: 100vh;
  flex-direction: column;
`