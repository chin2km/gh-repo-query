import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <FooterWrapper>
            © 2021 Chin2km
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
`
