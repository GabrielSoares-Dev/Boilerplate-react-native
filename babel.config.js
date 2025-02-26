module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@tests': './tests/*',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@pages/*': './src/pages/*',
          '@routes': './src/routes',
          '@components': './src/components',
          '@functions': './src/functions',
          '@providers': './src/providers',
          '@services': './src/services',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@guards': './src/guards',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@types': './src/@types',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
  ],
}
