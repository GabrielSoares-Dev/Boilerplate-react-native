import { ActivityIndicator } from 'react-native'
import type { ButtonLoadingProps } from '@components'

export function ButtonLoading({
  variant = 'primary',
  testID = '',
}: ButtonLoadingProps) {
  const isPrimary = variant === 'primary'

  return (
    <ActivityIndicator color={isPrimary ? '#fff' : '#007bff'} testID={testID} />
  )
}
