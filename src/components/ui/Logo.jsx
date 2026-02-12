// src/components/ui/Logo.jsx
import React from 'react';
import styled from 'styled-components';
// import logo from '../../assets/Ai-key-logo.jpg';
// import logo from '../../assets/Ai-key-logo[1].jpg';
import logo from '../../assets/icon1.png'
import { Link } from 'react-router-dom';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    gap: 0.5rem;

    span {
        color: ${({ theme }) => theme.colors.text};
    }
`;

const LogoIcon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 25%;
`;

const Logo = () => {
    return (
        <LogoWrapper>
           <Link to="/"> <LogoIcon src={logo}  alt="Logo" /></Link>
           <Link to="/"> <span>Zenbank</span></Link>
        </LogoWrapper>
    );
};

export default Logo;