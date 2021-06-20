import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, defaultDataIdFromObject } from "@apollo/client";
import { BrowserRouter, } from 'react-router-dom';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

export const ClientProviders: React.FC = ({ children }) => {
    return (
        <GeistProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <ApolloProvider client={client}>
                    {children}
                </ApolloProvider>
            </BrowserRouter>
            <CssBaseline />
        </GeistProvider>
    )
}

const getToken = () => {
    const tokenFromUrl = new URLSearchParams(window.location.search).get("token");
    if (tokenFromUrl) {
        sessionStorage.setItem("token", tokenFromUrl);
        const { origin, pathname } = new URL(window.location.href);
        window.location.replace(`${origin}${pathname}`);
        return;
    }
    return sessionStorage.getItem("token") ?? process.env.REACT_APP_GH_ACCESS_TOKEN;
}

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    connectToDevTools: true,
    headers: {
        'Authorization': `Bearer ${getToken()}`
    },
    cache: new InMemoryCache({
        dataIdFromObject: obj => {
            return (obj.id || obj.login || defaultDataIdFromObject(obj)) as ReturnType<typeof defaultDataIdFromObject>;
        },
    }),
});
