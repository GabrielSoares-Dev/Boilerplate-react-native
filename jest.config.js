module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./tests/config/jest/jest.setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/main.tsx',
    '!**/App.tsx',
    '!**/routes/**',
    '!**/components/types/**',
    '!**/providers/app-provider/**',
    '!**/providers/types/**',
    '!**/tests/**',
    '!**/@types/**',
    '!**/services/apis/**',
    '!**/styles.ts',
  ],
  moduleNameMapper: {
    '^@components$': '<rootDir>/src/components',
    '^@functions$': '<rootDir>/src/functions',
    '^@constants$': '<rootDir>/src/constants',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@listeners$': '<rootDir>/src/listeners',
    '^@store$': '<rootDir>/src/store',
    '^@services$': '<rootDir>/src/services',
    '^@utils$': '<rootDir>/src/utils',
    '^@enums$': '<rootDir>/src/enums',
    '^@providers$': '<rootDir>/src/providers',
    '^@pages$': '<rootDir>/src/pages',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
    '\\.(ttf)$': '<rootDir>/__mocks__/file-mock.js',
  },
}
