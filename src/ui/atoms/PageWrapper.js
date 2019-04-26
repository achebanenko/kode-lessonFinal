import { styled } from '@ui/theme'

export const PageWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.paddings.main}px;
  height: 100%;
  flex-direction: column;
`