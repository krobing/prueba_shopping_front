import { makeAppTheme } from './themes'

// Final theme custom properties for app
const appTheme = makeAppTheme()

declare module 'next-yak' {
  export interface YakTheme extends ReturnType<typeof makeAppTheme> {
    [key: string]: unknown
  }
}

export default appTheme
