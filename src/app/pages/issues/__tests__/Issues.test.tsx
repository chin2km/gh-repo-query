import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Issues from '../Issues';
import { ClientProviders } from '../../../Providers';
import { MemoryRouter, Route } from 'react-router';

describe('Issues Page integration', () => {
  it('should render the page based on route', async () => {
    const screen = render(
      <ClientProviders>
        <MemoryRouter initialEntries={[{ pathname: '/microsoft/vscode/issues' }]}>
          <Route path="/:owner/:repo/issues">
            <Issues />
          </Route>
        </MemoryRouter>
      </ClientProviders>
    );
    const repoInput = screen.getByTestId('repository-input');
    expect(repoInput.getAttribute('value')).toBe('vscode');

    const ownerInput = screen.getByTestId('owner-input');
    expect(ownerInput.getAttribute('value')).toBe('microsoft');


    await waitFor(() => {
      const issueLinks = screen.getAllByTestId('issue-link');
      expect(issueLinks.length).toBeGreaterThan(1);
      issueLinks.forEach(link => {
        expect(link.getAttribute('href')).toMatch(/microsoft\/vscode\/(.*)/);
        expect(link.querySelector('[data-testid="issue-title"]').textContent.length).toBeGreaterThan(1);
      })
    });
  });

  it('should be able to apply filters', async () => {
    const screen = render(
      <ClientProviders>
        <MemoryRouter initialEntries={[{ pathname: '/microsoft/vscode/issues' }]}>
          <Route path="/:owner/:repo/issues">
            <Issues />
          </Route>
        </MemoryRouter>
      </ClientProviders>
    );

    const searchRepoInput = screen.getByTestId('search-repo') as HTMLInputElement;
    expect(searchRepoInput.value).toBe('');
    fireEvent.change(searchRepoInput, { target: { value: 'what' } });
    expect(searchRepoInput.value).toBe('what');

    await waitFor(async () => {
      const issueLinks = screen.getAllByTestId('issue-link');
      expect(issueLinks.length).toBeGreaterThan(1);

      issueLinks.forEach(link => {
        expect(link.getAttribute('href')).toMatch(/microsoft\/vscode\/(.*)/);
        expect(link.querySelector('[data-testid="issue-title"]').textContent.length).toBeGreaterThan(1);
      });
    });
  });
})

