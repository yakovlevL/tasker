export const theme = {
  fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
  bg: {
    default: '#fff',
    reverse: '#000',
    washed: '#f7f7f7',
    divider: '#f0f0f0',
    overlay: '#000',
  },
  text: {
    default: '#000',
    secondary: '#384047', // desc, button-hover
    alt: '#777', // card-title, button-normal
    placeholder: '#7C8894',
    reverse: '#FFFFFF',
  },
  shadow: {
    subtle: '0 4px 6px 0 rgba(0, 0, 0, 0.02), 0 2px 2px 0 rgba(0, 0, 0, 0.02)',
    default: '0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.05)',
    modal: '0 7px 50px 0 rgba(0, 0, 0, 0.125),0 2px 2px 0 rgba(0,0,0,0.125)',
  },

  nonInteractive: {
    bg: '#000',
    fg: '#fff',
    text: '#000',
    border: '#000',
  },

  interactive: {
    bg: '#4DD599',
    fg: '#fff',
    text: '#4DD599',
    border: '#4DD599',
  },

  // Input borders
  input: {
    border: '#EFEFEF',
    background: '#ffffff',
    color: '#C7C7C7',
    activeBorder: '#878787',
    activeBackground: '#ffffff',
    activeColor: '#878787',
  },
  brand: {
    default: '#5875ff',
  },
  warn: {
    default: '#9C9C9C',
    fg: '#fff',
    bg: '#F4F6F8',
  },
  success: {
    default: '#02cf20',
  },
}

export const dtheme: typeof theme = {
  fontFamily: `"Helvetica Neue", Helvetica, Arial, sans-serif`,
  bg: {
    default: '#0a0a0a',
    reverse: '#fff',
    washed: '#111',
    divider: '#222',
    overlay: '#000',
  },
  text: {
    default: '#fff',
    secondary: '#888', // desc, button-hover
    alt: '#666', // card-title, button-normal
    placeholder: '#555',
    reverse: '#000',
  },
  shadow: {
    default: '0 1px 0 0 #222',
    subtle: '0 4px 6px 0 rgba(0, 0, 0, 0.02), 0 2px 2px 0 rgba(0, 0, 0, 0.02)',
    modal: '0 7px 50px 0 rgba(0, 0, 0, 0.125),0 2px 2px 0 rgba(0,0,0,0.125)',
  },

  interactive: {
    bg: '#fff',
    fg: '#000',
    text: '#fff',
    border: '#fff',
  },

  // Input borders
  nonInteractive: {
    bg: '#222',
    fg: '#fff',
    text: '#fff',
    border: '#fff',
  },

  input: {
    border: '#444',
    background: '#222',
    color: '#fff',
    activeBorder: '#fff',
    activeBackground: '#292929',
    activeColor: '#fff',
  },

  brand: {
    default: '#5875ff',
  },
  warn: {
    default: '#ee1e40',
    fg: '#fff',
  },
  success: {
    default: '#02cf20',
  },
}

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
