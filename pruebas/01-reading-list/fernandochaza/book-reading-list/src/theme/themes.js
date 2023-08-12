const breakpointSm = '576px'
const breakpointMd = '768px'
const breakpointLg = '1024px'
const breakpointXl = '1200px'

const white = '#ffffff'
const light = '#dee4e7'
const dark = '#37474f'
const black = '#000000'

const accent1Color = '#80388c'
const accent2Color = '#2a75b3'

const darkTheme = {
  /* Color palette */
  white,
  light,
  dark,
  black,

  accent1Color,
  accent2Color,

  mainBg: '#111111',
  accentBg: '#333333',
  secondaryBg: '#37474f',

  mainBorder: '#dee4e7',
  secondaryBorder: '#ffffff',

  mainTxt: '#dee4e7',
  secondaryTxt: '#555555',

  scrollbar: accent1Color,

  /* Breakpoints */
  breakpointSm,
  breakpointMd,
  breakpointLg,
  breakpointXl
}

const lightTheme = {
  /* Color palette */
  white,
  light,
  dark,
  black,

  accent1Color: accent2Color,
  accent2Color: accent1Color,

  mainBg: '#fafafa',
  accentBg: '#dee4e7',
  secondaryBg: '#ffffff',

  mainBorder: '#37474f',
  secondaryBorder: '#ffffff',

  mainTxt: '#37474f',
  secondaryTxt: '#555555',

  scrollbar: accent1Color,

  /* Breakpoints */
  breakpointSm,
  breakpointMd,
  breakpointLg,
  breakpointXl
}

export { darkTheme, lightTheme }
