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
        // ✅ Blue-Violet Gradient (Sign In / Sign Up style)
        return `linear-gradient(135deg, #3b82f6, #8b5cf6)`;
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
          // ✅ Darker Hover Blue-Violet Gradient
          return `linear-gradient(135deg, #2563eb, #7c3aed)`;
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
