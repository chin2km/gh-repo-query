import React from 'react'
import styled from 'styled-components';
import Github from '@geist-ui/react-icons/github';

export const Header = () => {
    return (
        <Container>
            <Github size={50} style={{ display: 'block' }} />
            <h1>
                gh-repo-query
            </h1>
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1.5rem;
`;
