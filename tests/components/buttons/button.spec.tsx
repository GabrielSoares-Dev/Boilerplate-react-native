import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Button, ButtonLoading } from '@components'

describe('Button', () => {
  it('Should be render a button', () => {
    const { getByText } = render(<Button label="test" />)

    const button = getByText('test')
    expect(button).toBeVisible()
  })

  it('Should be call onPress', () => {
    const onPress = jest.fn()
    const { getByText } = render(<Button label="test" onPress={onPress} />)
    const button = getByText('test')

    fireEvent.press(button)

    expect(onPress).toHaveBeenCalled()
  })

  it('Should be render loading when isLoading is true', () => {
    const { getByText, getByTestId } = render(
      <Button
        label="Loading Button"
        isLoading
        loading={<ButtonLoading testID="loading-test-id" />}
      />,
    )

    const loadingText = getByText('Processando...')
    const loadingIndicator = getByTestId('loading-test-id')

    expect(loadingText).toBeVisible()
    expect(loadingIndicator).toBeVisible()
  })
})
