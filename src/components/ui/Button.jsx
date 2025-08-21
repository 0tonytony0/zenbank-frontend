import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '4px'};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;

  /* Background based on variant */
  background: ${({ variant, theme }) => {
    switch (variant) {
      case 'outlined':
        return 'transparent';
      case 'green':
        return theme.colors.green || '#28a745';
      case 'blue':
        return theme.colors.blue || '#17a2b8';
      default:
        // 🔥 Your gradient
        return `linear-gradient(to right, #007bff, #8A2BE2)`;
    }
  }};

  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'outlined':
        return theme.colors.primary || '#343a40';
      case 'green':
      case 'blue':
      default:
        return '#fff';
    }
  }};

  border: ${({ variant, theme }) =>
    variant === 'outlined'
      ? `2px solid ${theme.colors.primary || '#343a40'}`
      : 'none'};

  /* Hover effect */
  &:hover {
    background: ${({ variant, theme }) => {
      switch (variant) {
        case 'outlined':
          return 'transparent';
        case 'green':
          return theme.colors.green || '#28a745';
        case 'blue':
          return theme.colors.blue || '#17a2b8';
        default:
          // 🔥 Hover gradient
          return `linear-gradient(to right, #0166d3, #6d09ca)`;
      }
    }};
    color: #fff;
  }
`;

const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
