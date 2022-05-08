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
    key: 'stackNavigation',
    name: 'demoList' as const,
    path: '/demoList'
  }

  it('renders', () => {
    const { queryByText, debug } = render((
      <RootStoreProvider value={({characterStore} as any)}>
        <DemoListScreen
          navigation={mockStackNavigation}
          route={route}
        />
      </RootStoreProvider>
    ))

    debug();

    expect(queryByText('Demo List')).not.toBeNull();
  })
})
