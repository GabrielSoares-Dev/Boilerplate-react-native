import { Button } from '@components'
import * as S from './styles'
import { useNavigation } from '@hooks'
import { PublicScreens } from '@enums'
import { useAuthStore } from '@store'

export function Home() {
  const { cleanAuthData } = useAuthStore()
  const { navigate } = useNavigation()

  const logout = () => {
    cleanAuthData()
    navigate(PublicScreens.MAIN)
  }
  return (
    <S.Container>
      <Button label="Sair" onPress={logout} />
    </S.Container>
  )
}
