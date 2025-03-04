import { Public, Private } from '@routes'
import { PublicScreens, PrivateScreens } from '@enums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuthStore } from '@store'

const Stack = createNativeStackNavigator()

export function Main() {
  const { isAuthenticated } = useAuthStore()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={isAuthenticated() ? PrivateScreens.MAIN : PublicScreens.MAIN}
        component={isAuthenticated() ? Private : Public}
      />
    </Stack.Navigator>
  )
}
