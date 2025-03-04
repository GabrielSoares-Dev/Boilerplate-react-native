import { useNavigation as useReactNavigation } from '@react-navigation/native'
import type { NavigationProp } from '@react-navigation/native'
import { PublicScreens, PrivateScreens } from '@enums'

export function useNavigation() {
  const navigation =
    useReactNavigation<
      NavigationProp<Record<PublicScreens | PrivateScreens, object | undefined>>
    >()

  const navigate = (
    screen: PublicScreens | PrivateScreens,
    params?: object,
  ) => {
    navigation.navigate(screen, params)
  }

  const goBack = () => {
    navigation.goBack()
  }

  return {
    navigate,
    goBack,
  }
}
