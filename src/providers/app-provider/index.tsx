import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components/native'
import Toast from 'react-native-toast-message'
import { theme } from '@constants'
import type { AppProviderProps } from '@providers'

const queryClient = new QueryClient()

export function AppProvider({ children }: AppProviderProps) {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toast />
        </QueryClientProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
