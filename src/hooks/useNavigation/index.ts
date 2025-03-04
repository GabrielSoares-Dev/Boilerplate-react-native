import { useNavigation as useReactNavigation } from '@react-navigation/native'
import type { NavigationProp } from '@react-navigation/native'
import { Screens } from '@enums'

export function useNavigation() {
  const navigation =
    useReactNavigation<NavigationProp<Record<Screens, object | undefined>>>()

  const navigate = (screen: Screens, params?: object) => {
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
