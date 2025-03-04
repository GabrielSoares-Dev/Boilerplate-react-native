import React, { act } from 'react'
import { Home } from '@pages'
import { fireEvent, render, renderHook } from '@testing-library/react-native'
import { ThemeWrapper } from '@tests/helpers'
import { useAuthStore } from '@store'
import { useNavigation } from '@hooks'
import { PublicScreens } from '@enums'

jest.mock('@hooks', () => ({
  useNavigation: jest.fn().mockImplementation(() => ({ navigate: jest.fn() })),
}))

describe('Home', () => {
  it('Should be render home page', () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Home />
      </ThemeWrapper>,
    )

    const logoutButton = getByText('Sair')

    expect(logoutButton).toBeVisible()
  })

  it('Should be press button and logout', async () => {
    const mockNavigate = jest.fn()
    // @ts-expect-error
    useNavigation.mockReturnValue({ navigate: mockNavigate })
    const { result } = renderHook(() => useAuthStore())
    const cleanAuthDataSpyOn = jest.spyOn(result.current, 'cleanAuthData')
    const { getByText } = render(
      <ThemeWrapper>
        <Home />
      </ThemeWrapper>,
    )

    const logoutButton = getByText('Sair')

    await act(async () => {
      fireEvent.press(logoutButton)
    })

    expect(cleanAuthDataSpyOn).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith(PublicScreens.MAIN)
  })
})
