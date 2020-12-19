// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { createGlobalStyle, css } from 'styled-components'

const generateRules = (prefix: string, prop: string | string[], scales: any) => {
  return scales.reduce((acc: any, value: any, index: number) => {
    const props =
      typeof prop === 'string' ? `${prop}: ${value}` : prop.map(p => `${p}: ${value};`).join(' ')
    const className = `${prefix}${index}`
    return acc + `${className} { ${props} };\n`
  }, '')
}

const spacingScales = ['0', '0.25rem', '0.5rem', '1rem', '2rem', '4rem']
const negativeSpacingScales = ['0', '-0.25rem', '-0.5rem', '-1rem', '-2rem', '-4rem']

const tachyons = css`
  ${generateRules('.pa', 'padding', spacingScales)}
  ${generateRules('.pt', 'padding-top', spacingScales)}
${generateRules('.pl', 'padding-left', spacingScales)}
${generateRules('.pr', 'padding-right', spacingScales)}
${generateRules('.pb', 'padding-bottom', spacingScales)}
${generateRules('.ph', ['padding-left', 'padding-right'], spacingScales)}
${generateRules('.pv', ['padding-top', 'padding-bottom'], spacingScales)}


${generateRules('.ma', 'margin', spacingScales)}
${generateRules('.mt', 'margin-top', spacingScales)}
${generateRules('.ml', 'margin-left', spacingScales)}
${generateRules('.mr', 'margin-right', spacingScales)}
${generateRules('.mb', 'margin-bottom', spacingScales)}
${generateRules('.mh', ['margin-left', 'margin-right'], spacingScales)}
${generateRules('.mv', ['margin-top', 'margin-bottom'], spacingScales)}
.mt-auto {
    margin-top: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .mh-auto {
    margin-left: auto;
    margin-right: auto;
  }

  ${generateRules('.na', 'margin', negativeSpacingScales)}
  ${generateRules('.nt', 'margin-top', negativeSpacingScales)}
${generateRules('.nl', 'margin-left', negativeSpacingScales)}
${generateRules('.nr', 'margin-right', negativeSpacingScales)}
${generateRules('.nb', 'margin-bottom', negativeSpacingScales)}

.o-30 {
    opacity: 0.3;
  }
  .o-50 {
    opacity: 0.5;
  }
  .o-70 {
    opacity: 0.7;
  }

  .f1 {
    font-size: 32px;
  }
  .f2 {
    font-size: 24px;
  }
  .f3 {
    font-size: 18px;
  }
  .f4 {
    font-size: 16px;
  }
  .f5 {
    font-size: 14px;
  }
  .f6 {
    font-size: 12px;
  }
  .f7 {
    font-size: 10px;
  }
  .fw5 {
    font-weight: 500;
  }
  .fw6 {
    font-weight: 600;
  }
  .fw7 {
    font-weight: 700;
  }

  .warn {
    color: ${({ theme }) => theme.warn.default};
  }

  .bg-warn {
    background: ${({ theme }) => theme.warn.default};
  }

  .bg-washed {
    background: ${({ theme }) => theme.bg.washed};
  }

  .warn-border {
    border: 2px solid ${({ theme }) => theme.warn.default};
    border-radius: 4px;
  }

  .db {
    display: block;
  }
  .dib {
    display: inline-block;
  }

  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }

  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
`

export const GlobalStyles = createGlobalStyle/* CSS */ `
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  border: 0;
  -webkit-font-smoothing: auto;
  font-weight: inherit;
  font-family: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent;
}

*:not(input):not(textarea) {
  user-select: none;
}

body {
  background: ${props => props.theme.bg.default};
  color: ${props => props.theme.text.default};
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
}

body.scroll-lock {
  overflow: hidden;
}

a, button {
  color: inherit;
}

a > * {
  pointer-events: none;
}

.link,
a.link {
  text-decoration: underline;
}

.alt {
  color: ${props => props.theme.text.alt};
}

.w-100 {
  width: 100%;
}

.grid {
  display: grid;
  grid-gap: 4px 0;
}

.text-icon {
  font-size: 24px;
  min-width: 24px;
  text-align: center;
  display: inline-block;
}

${tachyons}
`

console.log(GlobalStyles)
