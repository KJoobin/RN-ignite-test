import React from 'react'

import { render } from '@testing-library/react-native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

const AllTheProviders = ({ children }) => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    {children}
  </SafeAreaProvider>
)

const customRender:typeof render = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
