import { Input, InputLabel, Button, ButtonLoading } from '@components'
import { useLogin } from '@pages/public/login/hooks'
import Icon from '@react-native-vector-icons/feather'
import type { LoginFields } from '@pages/public/login/types'
import * as S from './styles'

export function Login() {
  const {
    isLoading,
    passwordIsEncrypted,
    control,
    toggleEncryptedPassword,
    handleSubmit,
    onSubmit,
  } = useLogin()
  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <Input<LoginFields>
        label={<InputLabel label="E-mail" />}
        control={control}
        name="email"
        keyboardType="email-address"
        placeholder="luis@outlook.com.br"
      />
      <Input<LoginFields>
        label={<InputLabel label="Senha" />}
        control={control}
        name="password"
        keyboardType="default"
        placeholder="********"
        secureTextEntry={passwordIsEncrypted}
        rightIcon={
          <Icon
            name={passwordIsEncrypted ? 'eye' : 'eye-off'}
            testID={passwordIsEncrypted ? 'eye-icon' : 'eye-off-icon'}
            size={30}
            color="#000"
            onPress={toggleEncryptedPassword}
          />
        }
      />
      <S.ButtonContainer>
        <Button
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          label="Entrar"
          isLoading={isLoading}
          loading={<ButtonLoading variant="primary" />}
        />
      </S.ButtonContainer>
    </S.Container>
  )
}
