import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { store, StoreContext } from './store'

import { GlobalStyles } from './global.css'
import { theme } from './theme'
import { Home } from './pages/Home'

export const App = () => (
  <ThemeProvider theme={theme}>
    <StoreContext.Provider value={store}>
      <GlobalStyles />
      {/* Content (Routes) */}
      <Home />
    </StoreContext.Provider>
  </ThemeProvider>
)
