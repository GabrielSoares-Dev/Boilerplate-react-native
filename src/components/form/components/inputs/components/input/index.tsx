import { Controller } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import type { InputProps } from '@components'
import * as S from './styles'

export function Input<T extends FieldValues>({
  control,
  name,
  label,
  hasError = false,
  errorMessage,
  ...restOfProps
}: InputProps<T>) {
  return (
    <S.Container>
      {label && label}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <S.Input
            hasError={hasError}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...restOfProps}
          />
        )}
      />
      {hasError && errorMessage}
    </S.Container>
  )
}
