import React from 'react'
import { Main } from '@routes'
import { AppProvider } from '@providers'

export function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}
