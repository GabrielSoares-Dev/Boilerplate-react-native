import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

import type { AuthState } from '@store'

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      data: {
        token: '',
      },
      setAuthData: (input) => set({ data: input }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
