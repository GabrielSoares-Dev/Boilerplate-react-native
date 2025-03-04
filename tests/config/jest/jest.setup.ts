import { server } from '../mock-requests'

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
)

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  jest.clearAllMocks()
  jest.useRealTimers()
})

afterAll(() => server.close())
