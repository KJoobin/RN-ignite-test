// we always make sure 'react-native' gets included first
import 'react-native'

// libraries to mock
import './mock-react-native-image'
import './mock-async-storage'
import './mock-i18n'
import './mock-reactotron'
import './react-native-localize'
import './mock-safe-area-context'

jest.useFakeTimers()
declare global {
  let __TEST__
}
