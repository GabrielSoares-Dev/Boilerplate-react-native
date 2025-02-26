import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProviderProps } from '@providers'
const queryClient = new QueryClient()

export function AppProvider({ children }: AppProviderProps) {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NavigationContainer>
  )
}
