import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Home from '../Home';
import { ClientProviders } from '../../../Providers';
import { MemoryRouter, Route } from 'react-router';

describe('Home page integration', () => {
  it('should render the page for default repository and owner', async () => {
    const screen = render(
      <ClientProviders>
        <Home />
      </ClientProviders>
    );
    const repoInput = screen.getByTestId('repository-input');
    expect(repoInput.getAttribute('value')).toBe('react');

    const ownerInput = screen.getByTestId('owner-input');
    expect(ownerInput.getAttribute('value')).toBe('facebook');
  });

  it('should render the page based on route', async () => {
    const screen = render(
      <ClientProviders>
        <MemoryRouter initialEntries={[{ pathname: '/microsoft/vscode' }]}>
          <Route path="/:owner/:repo">
            <Home />
          </Route>
        </MemoryRouter>
      </ClientProviders>
    );
    const repoInput = screen.getByTestId('repository-input');
    expect(repoInput.getAttribute('value')).toBe('vscode');

    const ownerInput = screen.getByTestId('owner-input');
    expect(ownerInput.getAttribute('value')).toBe('microsoft');

    await waitFor(() => {
      const description = screen.getByTestId('repository-description');
      expect(description.innerHTML).toMatch('vscode by microsoft');
    });
  });

  it('should render error page for in-existant repository inputs', async () => {
    const screen = render(
      <ClientProviders>
        <MemoryRouter initialEntries={[{ pathname: '/asdfasdfsadf/sadfasdafsd' }]}>
          <Route path="/:owner/:repo">
            <Home />
          </Route>
        </MemoryRouter>
      </ClientProviders>
    );
    const repoInput = screen.getByTestId('repository-input');
    expect(repoInput.getAttribute('value')).toBe('sadfasdafsd');

    const ownerInput = screen.getByTestId('owner-input');
    expect(ownerInput.getAttribute('value')).toBe('asdfasdfsadf');

    await waitFor(() => {
      const description = screen.getByTestId('error-message');
      expect(description.innerHTML).toMatch("Could not resolve to a Repository with the name 'asdfasdfsadf/sadfasdafsd'");
    });
  });
})

