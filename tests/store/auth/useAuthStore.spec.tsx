import { useAuthStore } from '@store'
import { renderHook } from '@testing-library/react-native'
import { act } from 'react'

describe('useAuthStore', () => {
  it('Should be set auth data', () => {
    const { result } = renderHook(() => useAuthStore())

    const mockAuthData = {
      token: 'test-token',
    }

    act(() => result.current.setAuthData(mockAuthData))

    expect(result.current.data).toEqual(mockAuthData)
  })
})
