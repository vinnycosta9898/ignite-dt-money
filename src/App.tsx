import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/default'

import { Transactions } from './pages/Transactions/index'
import { TransActionsProvider } from './context/TransActionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransActionsProvider>
        <Transactions />
      </TransActionsProvider>
    </ThemeProvider>
  )
}
