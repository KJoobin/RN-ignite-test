import React from 'react';

import { render } from '../../../test/test-utlis';
import { mockStackNavigation } from '../../../test/mockStackNavigation';

import { DemoListScreen } from './demo-list-screen';

import { RootStoreProvider } from '../../models'

describe('DemoListScreen', () => {
  const characterStore = {
    characters: []
  };

  const route = {
    key: 'demoList-key',
    name: 'demoList' as const,
    path: '/demoList'
  }

  const renderDemoListScreen = () => render((
    <RootStoreProvider value={({characterStore} as any)}>
      <DemoListScreen
        navigation={mockStackNavigation}
        route={route}
      />
    </RootStoreProvider>
  ))

  it('renders header "Demo List"', () => {
    const { queryByText } = renderDemoListScreen();

    expect(queryByText('Demo List')).not.toBeNull();
  })
})
