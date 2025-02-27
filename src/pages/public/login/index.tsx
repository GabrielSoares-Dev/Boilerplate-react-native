import { Alert } from 'react-native'
import { Button, ButtonLoading } from '@components'
import * as S from './styles'

export function Login() {
  return (
    <S.Container>
      <S.ButtonContainer>
        <Button
          variant="primary"
          onPress={() => Alert.alert('oi')}
          label="Entrar"
          isLoading
          loading={<ButtonLoading variant="primary" />}
        />
      </S.ButtonContainer>
    </S.Container>
  )
}
