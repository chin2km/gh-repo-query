import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components';

export const Navigation: React.FC<{ basename: string }> = ({ basename }) => {
    const { pathname } = useLocation();

    return (
        <NavigationWrapper>
            <StyledLink to={basename} $active={pathname === basename}>
                Home
            </StyledLink>
            <StyledLink to={`${basename}/issues`} $active={pathname === `${basename}/issues`}>
                Issues
            </StyledLink>
        </NavigationWrapper>
    )
};


const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem;
    position: sticky;
    top: 56px;
    z-index: 20;
    margin-bottom: 2rem;
    width: 100%;

    background-color: rgb(255 255 255 / 70%);
    backdrop-filter: blur(5px);
    box-shadow: rgb(130 130 130 / 10%) 0px 8px 7px 0px, rgb(0 0 0 / 9%) 2px 3px 5px 0px;
`;

const StyledLink = styled(Link) <{ $active: boolean }>`
    line-height: 2rem;
    color: black;
    margin: 0 0.5rem;
    box-sizing: border-box;
    border-bottom: solid 2px;
    border-color: ${({ $active }) => ($active ? 'black' : 'transparent')};

    &:hover {
        border-color: black;
    }
`;


