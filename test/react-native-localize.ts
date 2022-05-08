jest.mock('react-native-localize', () => ({
  RNLocalize: () => jest.fn(),
  findBestAvailableLanguage: () => 'en'
}))
