import React from 'react'
import { Login } from '@pages'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { ThemeWrapper } from '@tests/helpers'

describe('Login', () => {
  it('Should be render a  login page', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <ThemeWrapper>
        <Login />
      </ThemeWrapper>,
    )

    const title = getByText('Login')
    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const eyeIcon = getByTestId('eye-icon')

    expect(title).toBeVisible()
    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(eyeIcon).toBeVisible()
  })

  it('Should be show password if press eye icon', async () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Login />
      </ThemeWrapper>,
    )

    const eyeIcon = getByTestId('eye-icon')

    fireEvent.press(eyeIcon)

    await waitFor(() => expect(getByTestId('eye-off-icon')).toBeVisible())
  })
})
