import { Input } from '@geist-ui/react'
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useOwnerNameState, usePrevious, useRepositoryNameState } from '../../hooks';

export const RepositoryInput = () => {
    const { repoName, debouncedRepoName, setRepoName } = useRepositoryNameState();
    const { ownerName, debouncedOwnerName, setOwnerName } = useOwnerNameState();
    const updatedNameOrOwner = usePrevious({ debouncedRepoName, debouncedOwnerName });

    const history = useHistory();
    useEffect(() => {
        if (updatedNameOrOwner && (updatedNameOrOwner?.debouncedOwnerName !== debouncedOwnerName
            || updatedNameOrOwner?.debouncedRepoName !== debouncedRepoName
        )) {
            history.push(`/${debouncedOwnerName || "@"}/${debouncedRepoName}`);
        }
    }, [debouncedOwnerName, debouncedRepoName, history, updatedNameOrOwner]);

    return (
        <Container>
            <SpacedSpan>You are viewing repository</SpacedSpan>
            <Input data-testid="repository-input" size="large" placeholder="repository" value={repoName} onChange={(event) => setRepoName(event.target.value)} />

            <SpacedSpan>by</SpacedSpan>
            <Input data-testid="owner-input" size="large" placeholder="owner" value={ownerName} onChange={(event) => setOwnerName(event.target.value)} />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    position: sticky;
    top: 0;
    background-color: rgb(255 255 255 / 70%);
    backdrop-filter: blur(5px);
    z-index: 20;
    width: 100%;
`;

const SpacedSpan = styled.span`
    margin: 0 1rem;
`;

