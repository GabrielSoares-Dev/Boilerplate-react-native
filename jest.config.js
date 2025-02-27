module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/main.tsx',
    '!**/App.tsx',
    '!**/vite-env.d.ts',
    '!**/index.ts',
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
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '^@components$': '<rootDir>/src/components',
    '^@functions$': '<rootDir>/src/functions',
    '^@guards$': '<rootDir>/src/guards',
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
    '^@tests/(.*)$$': '<rootDir>/tests/$1',
  },
}
