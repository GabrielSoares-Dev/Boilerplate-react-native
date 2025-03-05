# React Native Boilerplate

This repository provides a comprehensive boilerplate setup for React Native applications, pre-configured with essential libraries, tools, and configurations to streamline development.

## Features

- **Navigation**: React Navigation for seamless routing.
- **State Management**: Zustand for managing global application state.
- **Forms & Validation**: React Hook Form combined with Zod for validation.
- **API Management**: Axios for API requests, React Query for data caching.
- **Authentication**: Includes basic authentication setup with token management.
- **UI Components**: Pre-configured with React Native Vector Icons.
- **Styling**: Styled-components for easier styling and component-based design.
- **Testing**: Jest setup with React Native Testing Library.

## Dependencies

### Core Dependencies

- `@react-navigation/native`: For navigation management.
- `@react-navigation/native-stack`: For stack navigation.
- `axios`: To handle HTTP requests.
- `zustand`: For state management.
- `react-hook-form`, `zod`: For form handling and validation.
- `react-native-toast-message`: For displaying toast messages.
- `styled-components`: For component-based styling.
- `@tanstack/react-query`: For API data fetching and caching.
- `@react-native-async-storage/async-storage`: For secure local storage.
  
## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/GabrielSoares-Dev/Boilerplate-react-native.git
cd Boilerplate-react-native
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project
For Android:

```bash
npm run android
```

For ios:

```bash
npm run ios
```
### Commands

- **`npm run android`**: Builds and runs the app on Android.
- **`npm run ios`**: Builds and runs the app on iOS.
- **`npm run start`**: Starts the Metro bundler.
- **`npm run reset:cache`**: Resets the Metro bundler cache.
- **`npm run typecheck`**: Runs TypeScript type checking.
- **`npm run lint:test`**: Lints the project files with ESLint.
- **`npm run lint:fix`**: Automatically fixes linting issues.
- **`npm run test`**: Runs unit tests using Jest.
- **`npm run test:coverage`**: Runs tests and generates a coverage report.
- **`npm run test:coverage:silent`**: Runs tests and generates a coverage report silently.

# By Gabriel Soares Maciel