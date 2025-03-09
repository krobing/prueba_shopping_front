import type { DeepPartial } from 'utility-types'
import { deepSpread } from '../utils/misc'

// Original theme variables for the app
export const originalTheme = {
  colors: {
    alert: '#FB2F3D',
    danger: '#FB2F3D',
    dominant: {
      DEFAULT: '#00A0BC',
      dark: '#008BA3',
      light: '#00B9DA',
    },
    'sub-dominant': {
      DEFAULT: '#81B232',
      dark: '#597B22',
      light: '#95CF38',
      link: '#95CF38',
    },
    alternative: {
      DEFAULT: '#26346F',
      dark: '#0A1634',
      hover: '#19234B',
    },
    // gray scale
    'gray-custom': {
      DEFAULT: '#F9F9F9',
      50: '#FAFBFD',
      100: '#ECECEC',
      200: '#C4C2C2',
      300: '#707070',
      500: '#53595A',
      600: '#425453',
      700: '#444444',
      900: '#262626',
    },
    // darkness scale
    'dark-custom': {
      300: '#00000029',
      500: '#090909',
      600: '#090600',
      700: '#070500',
      800: '#030200',
    },
  },

  // global font styles
  fontFamily: {
    montserrat: "'Montserrat', sans-serif",
    helvetica: 'Helvetica',
  },

  'font-family-base': "'Montserrat', sans-serif",
  'font-size-root': '16px',
  'font-size-base': '1rem',

  // contents width and breakpoints
  'content-max-width': '1124px',

  breakpoints: {
    content: '1124px',
    xs: '430px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  borderRadius: {
    global: '10px',
  },

  images: {
    'elipse-desk': 'var(--img-elipse-desk)',
    'elipse-mobile': 'var(--img-elipse-mobile)',
    'form-login': 'var(--img-form-login)',
    'register-header': 'var(--img-register-header)',
    'register-hover-header': 'var(--img-register-hover-header)',
    'banner-login': 'var(--img-banner-login)',
    'money-header': 'var(--icon-money-header)',
    'product-header': 'var(--icon-product-header)',
    'chart-header': 'var(--icon-chart-header)',
    'credit-header': 'var(--icon-credit-header)',
    'wallet-header': 'var(--icon-wallet-header)',
    'wallet-hover-header': 'var(--icon-wallet-hover-header)',
  },
}

// Use variant of themes to overwrite original theme
export const overTheme: DeepPartial<typeof originalTheme> = {}

/**
 * Create a new theme over original theme, overwriting its variables
 *
 * @param {Object} otherTheme: DeepPartial<typeof originalTheme>
 *
 * @return {Object} overwritten theme
 */
export const makeAppTheme = (otherTheme: DeepPartial<typeof originalTheme> = {}) => {
  return deepSpread(originalTheme, otherTheme)
}
