import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AppHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transform: translateY(0);
    background-color: #fff;
    opacity: 1;
`;

export const Comtainer = styled.div`
    position: relative;
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLink = styled(Link)`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    padding: 0 20px;
    &:hover {
        color: #000;
    }
`;