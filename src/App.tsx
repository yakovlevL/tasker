import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { store, StoreContext } from './store'

import { GlobalStyles } from './global.css'
import { theme } from './theme'
import { UI } from './pages/UI'

export const App = () => (
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <GlobalStyles />
      {/* Content (Routes) */}
      <UI />
    </StoreContext.Provider>
  </ThemeProvider>
)
