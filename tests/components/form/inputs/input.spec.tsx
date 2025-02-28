import React from 'react'
import { render, fireEvent, renderHook } from '@testing-library/react-native'
import { useForm } from 'react-hook-form'
import { Input, InputLabel, ErrorMessage } from '@components'
import { ThemeWrapper } from '@tests/helpers'

describe('Input', () => {
  it('Should be render input', () => {
    const { result } = renderHook(() => useForm<{ test: string }>())
    const { getByTestId, getByText } = render(
      <ThemeWrapper>
        <Input
          label={<InputLabel label="test-label" />}
          name="test"
          control={result.current.control}
          placeholder="test"
          testID="input-test-id"
        />
      </ThemeWrapper>,
    )
    const input = getByTestId('input-test-id')
    const label = getByText('test-label')

    expect(input).toBeVisible()
    expect(label).toBeVisible()
  })

  it('Should be typed on input', () => {
    const { result } = renderHook(() => useForm<{ test: string }>())
    const { getByTestId } = render(
      <ThemeWrapper>
        <Input
          name="test"
          control={result.current.control}
          placeholder="test"
          testID="input-test-id"
        />
      </ThemeWrapper>,
    )

    const input = getByTestId('input-test-id')

    fireEvent.changeText(input, 'test-typed')

    expect(result.current.watch('test')).toEqual('test-typed')
  })

  it('Should be show error message when has error', () => {
    const { result } = renderHook(() => useForm<{ test: string }>())
    const { getByText } = render(
      <ThemeWrapper>
        <Input
          name="test"
          control={result.current.control}
          placeholder="test"
          testID="input-test-id"
          hasError
          errorMessage={<ErrorMessage message="test-error-message" />}
        />
      </ThemeWrapper>,
    )

    const errorMessage = getByText('test-error-message')

    expect(errorMessage).toBeVisible()
  })
})
