// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: ${({ theme }) => theme.fontSizes.regular};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    line-height: 1.2;
    color: #FFFFFF; /* White Headings */
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: #B0B0B0; /* Light gray text */
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: #E0E0E0; /* subtle light gray instead of neon */
      text-shadow: none; /* remove neon glow */
    }
  }

  /* Buttons */
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.main};
    background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: linear-gradient(135deg, #3b3b3b, #1f1f1f);
      transform: translateY(-2px); /* subtle lift */
      box-shadow: none; /* remove neon glow */
    }

    &:active {
      transform: translateY(0); /* reset on click */
    }
  }

  /* Glassmorphism Cards */
  .card, .container {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1.5rem;
  }

  /* Responsive */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h1 { font-size: ${({ theme }) => theme.fontSizes.xlarge}; }
    h2 { font-size: ${({ theme }) => theme.fontSizes.large}; }
    h3 { font-size: ${({ theme }) => theme.fontSizes.medium}; }
    section { padding: ${({ theme }) => theme.spacing.lg} 0; }
  }
`;
