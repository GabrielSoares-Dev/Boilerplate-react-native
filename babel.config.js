module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@pages/*': './src/pages/*',
          '@routes': './src/routes',
          '@components': './src/components',
          '@functions': './src/functions',
          '@providers': './src/providers',
          '@services': './src/services',
          '@enums': './src/enums',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@types': './src/@types',
          '@tests/*': './tests/*',
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
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
}
