import { WithThemeFnInterface, DefaultTheme } from 'styled-components'
import { theme } from './theme'
type Theme = typeof theme & DefaultTheme

declare const withTheme: WithThemeFnInterface<Theme>
