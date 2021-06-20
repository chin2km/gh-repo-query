import React from 'react'
import { RepositoryInput } from '../components/organisms/RepositoryInput'
import { Navigation } from '../components/organisms/Navigation'
import { useBasePathFromUrl } from '../hooks'

export const WithSharedHeader = (InnerComponent: React.ComponentType) => {
    const WrappedComponent: React.FC = () => {
        return (
            <>
                <RepositoryInput />
                <Navigation basename={useBasePathFromUrl()} />
                <InnerComponent />
            </>
        )
    }
    return WrappedComponent;
}
