import React from 'react';
import { render, waitFor } from '@testing-library/react';
import IssueDetails from '../IssueDetails';
import { ClientProviders } from '../../../Providers';
import { MemoryRouter, Route } from 'react-router';

describe('IssueDetails page integration', () => {
  it('should render the page based on route', async () => {
    const screen = render(
      <ClientProviders>
        <MemoryRouter initialEntries={[{ pathname: '/microsoft/vscode/issues/126222' }]}>
          <Route path="/:owner/:repo/issues/:id">
            <IssueDetails />
          </Route>
        </MemoryRouter>
      </ClientProviders>
    );

    const loading = screen.getByTestId('loading-layout');
    expect(loading).toBeInTheDocument();

    await waitFor(() => {
      const title = screen.getByTestId('issue-title');
      expect(title.textContent).toBe('macOS smoketest failure: shows correct quick outline');
    })
  });
})

