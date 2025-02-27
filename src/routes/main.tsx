import { Public, Private } from '@routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export function Main() {
  return (
    <Stack.Navigator
      initialRouteName="Public"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Public" component={Public} />
      <Stack.Screen name="Private" component={Private} />
    </Stack.Navigator>
  )
}
