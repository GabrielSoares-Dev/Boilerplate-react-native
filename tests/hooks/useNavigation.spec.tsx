import { act } from 'react'
import { renderHook } from '@testing-library/react-native'
import { useNavigation } from '@hooks'
import { PrivateScreens } from '@enums'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}))

describe('useNavigation', () => {
  let navigateMock: jest.Mock
  let goBackMock: jest.Mock

  beforeEach(() => {
    navigateMock = jest.fn()
    goBackMock = jest.fn()
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@react-navigation/native').useNavigation.mockReturnValue({
      navigate: navigateMock,
      goBack: goBackMock,
    })
  })

  it('Should call navigate with correct parameters', () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.navigate(PrivateScreens.MAIN, { test: 'test' }))

    expect(navigateMock).toHaveBeenCalledWith(PrivateScreens.MAIN, {
      test: 'test',
    })
  })

  it('Should call goBack when goBack is triggered', () => {
    const { result } = renderHook(() => useNavigation())

    act(() => result.current.goBack())

    expect(goBackMock).toHaveBeenCalled()
  })
})
