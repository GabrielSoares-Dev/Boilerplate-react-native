import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import type { AuthState } from '@store'

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      data: {
        token: '',
      },
      setAuthData: (input) => set({ data: input }),
      isAuthenticated: () => !!get().data.token,
      cleanAuthData: () =>
        set({
          data: {
            token: '',
          },
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
