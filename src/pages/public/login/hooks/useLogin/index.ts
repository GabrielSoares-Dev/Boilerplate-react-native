import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@pages/public/login/schemas'
import type { LoginFields } from '@pages/public/login/types'
import { useState } from 'react'

export function useLogin() {
  const [passwordIsEncrypted, setPasswordIsEncrypted] = useState(true)
  const { control, handleSubmit } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  })

  const toggleEncryptedPassword = () =>
    setPasswordIsEncrypted(!passwordIsEncrypted)

  const onSubmit = (input: LoginFields) => {
    console.log('input', input)
  }

  return {
    passwordIsEncrypted,
    control,
    toggleEncryptedPassword,
    handleSubmit,
    onSubmit,
  }
}
