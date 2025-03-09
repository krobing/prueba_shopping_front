import { type PropsWithChildren } from 'react'
import {
  YakThemeProvider as ThemeProvider,
  type YakTheme as DefaultTheme,
} from 'next-yak'
import appTheme from './appTheme'

// type definition
export interface ClientAppThemeProps {
  theme?: DefaultTheme
}

const ClientAppTheme = ({
  theme = appTheme,
  children,
}: PropsWithChildren<ClientAppThemeProps>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ClientAppTheme
