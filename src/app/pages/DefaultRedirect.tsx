import React from 'react';
import { Redirect, useLocation } from 'react-router';
import { useOwnerNameState, useRepositoryNameState } from '../hooks';

export const DefaultRedirect = () => {
    const { pathname, search } = useLocation();
    const { repoName } = useRepositoryNameState()
    const { ownerName } = useOwnerNameState()
    const baseRepoPath = `/${ownerName}/${repoName}`

    if (pathname === "/") {
        return <Redirect exact from="/" to={`${baseRepoPath}${search}`} />
    }
    return null;
}
