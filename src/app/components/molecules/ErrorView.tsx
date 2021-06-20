import { Divider, Page } from '@geist-ui/react'
import React from 'react'
import Github from '@geist-ui/react-icons/github'
import styled from 'styled-components'


export const ErrorView: React.FC<{ message?: string }> = ({ message }) => {
    return (
        <Page>
            <Container data-testid="error-message">
                <Github size={100} />
                <Divider />
                {message}
                <TokenWarning message={message} />
            </Container>
        </Page>
    )
}

export const TokenWarning: React.FC<{ message?: string }> = ({ message }) => {
    return message?.includes('status code 401') ?
        <>
            <Divider />
            <h5>Not Authenticated. Pass a valid github Personal Access Token in the query parameter</h5>
            <h6>eg: ?token=your_personal_access_token</h6>
        </>
        : null
}


const Container = styled.section`
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
