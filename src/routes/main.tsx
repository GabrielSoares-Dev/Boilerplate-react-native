import { Public, Private } from '@routes'
import { PublicScreens, PrivateScreens } from '@enums'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export function Main() {
  return (
    <Stack.Navigator
      initialRouteName={PublicScreens.MAIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={PublicScreens.MAIN} component={Public} />
      <Stack.Screen name={PrivateScreens.MAIN} component={Private} />
    </Stack.Navigator>
  )
}
