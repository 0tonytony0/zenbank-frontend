import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background 0.3s ease;

  /* Background based on variant */
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.success;
      case "blue":
        return theme.colors.primary;
      default:
        // ✅ Blue-Violet Gradient (Sign In / Sign Up style)
        return `linear-gradient(135deg, ${theme.colors.primaryLight}, ${theme.colors.accent})`;
    }
  }};

  color: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return theme.colors.primary;
      case "green":
      case "blue":
      default:
        return theme.colors.white;
    }
  }};

  border: ${({ variant, theme }) =>
    variant === "outlined"
      ? `2px solid ${theme.colors.primary}`
      : "none"};

  /* Hover effect */
  &:hover {
    background: ${({ variant, theme }) => {
      switch (variant) {
        case "outlined":
          return "transparent";
        case "green":
          return theme.colors.success;
        case "blue":
          return theme.colors.primary;
        default:
          // ✅ Darker Hover Blue-Violet Gradient
          return `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`;
      }
    }};
    color: ${({ theme }) => theme.colors.white};
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
