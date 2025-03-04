import React, { act } from 'react'
import { Login } from '@pages'
import Toast from 'react-native-toast-message'
import {
  fireEvent,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native'
import {
  ThemeWrapper,
  ReactQueryWrapper,
  loginSuccessfullyMock,
  loginFailedMock,
} from '@tests/helpers'
import { useAuthStore } from '@store'

describe('Login', () => {
  it('Should be render a  login page', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
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
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const eyeIcon = getByTestId('eye-icon')

    fireEvent.press(eyeIcon)

    await waitFor(() => expect(getByTestId('eye-off-icon')).toBeVisible())
  })

  it('Should be login successfully', async () => {
    loginSuccessfullyMock()
    const { result } = renderHook(() => useAuthStore())
    const { getByPlaceholderText, getByText } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const loginButton = getByText('Entrar')

    await act(async () => {
      fireEvent.changeText(emailInput, 'luis@outlook.com.br')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(loginButton)
    })

    const expectedAuthData = {
      token: 'test-token',
    }
    expect(result.current.data).toEqual(expectedAuthData)
  })

  it('Should be login failed', async () => {
    loginFailedMock()
    const { getByPlaceholderText, getByText, findByText } = render(
      <ReactQueryWrapper>
        <ThemeWrapper>
          <Login />
          <Toast />
        </ThemeWrapper>
      </ReactQueryWrapper>,
    )

    const emailInput = getByPlaceholderText('luis@outlook.com.br')
    const passwordInput = getByPlaceholderText('********')
    const loginButton = getByText('Entrar')

    await act(async () => {
      fireEvent.changeText(emailInput, 'luis@outlook.com.br')
      fireEvent.changeText(passwordInput, 'password')
      fireEvent.press(loginButton)
    })

    await waitFor(async () => {
      const toast = await findByText('Email ou senha inválida!')
      expect(toast).toBeTruthy()
    })
  })
})
