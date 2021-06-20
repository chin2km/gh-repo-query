import { Spinner } from '@geist-ui/react'
import React from 'react'
import styled from 'styled-components'

export const LoadingLayout = () => {
    return (
        <Container data-testid="loading-layout">
            <Spinner size="large" />
        </Container>
    )
}

const Container = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        transform: scale(2);
    }
`
