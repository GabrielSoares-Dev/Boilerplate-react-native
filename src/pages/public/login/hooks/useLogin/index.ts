import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@pages/public/login/schemas'
import type { LoginFields } from '@pages/public/login/types'

export function useLogin() {
  const { control, handleSubmit } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (input: LoginFields) => {
    console.log('input', input)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
  }
}
