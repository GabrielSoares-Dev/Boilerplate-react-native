import { Input, InputLabel, Button, ButtonLoading } from '@components'
import { useLogin } from '@pages/public/login/hooks'
import type { LoginFields } from '@pages/public/login/types'
import * as S from './styles'

export function Login() {
  const { control, handleSubmit, onSubmit } = useLogin()
  return (
    <S.Container>
      <Input<LoginFields>
        label={<InputLabel label="E-mail" />}
        control={control}
        name="email"
        keyboardType="email-address"
        placeholder="luis@outlook.com.br"
      />
      <S.ButtonContainer>
        <Button
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          label="Entrar"
          loading={<ButtonLoading variant="primary" />}
        />
      </S.ButtonContainer>
    </S.Container>
  )
}
