import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import {
  ChevronDown,
  CreditCard,
  Smartphone,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Play,
  Star,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import theme from external file
const theme = {
  colors: {
    primary: "#4361ee",
    secondary: "#3f37c9",
    accent: "#4cc9f0",
    text: "#6B6464",
    textLight: "#666666",
    background: "#0D0D2B",
    backgroundAlt: "#0D0D2B",
    border: "#e0e0e0",
    success: "#4BB543",
    error: "#FF3333",
    // Additional colors for the design
    dark: "#111827",
    darker: "#030712",
    inverse: "#ffffff",
    pink: "#ec4899",
    purple: "#7c3aed",
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'JetBrains Mono', 'Monaco', 'Menlo', monospace",
  },
  fontSizes: {
    small: "0.875rem",
    regular: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "3rem",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "5rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "16px",
    round: "50%",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0 8px 16px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    glow: "0 0 40px rgba(79, 70, 229, 0.3)",
    glowPink: "0 0 40px rgba(236, 72, 153, 0.3)",
  },
  transitions: {
    fast: "0.2s ease",
    medium: "0.3s ease",
    slow: "0.5s ease",
  },
};

// Enhanced Animations
const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(2deg); 
  }
`;

const pulse = keyframes`
  0%, 100% { 
    opacity: 0.1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.3; 
    transform: scale(1.05);
  }
`;



const slideInLeft = keyframes`
  from { 
    transform: translateX(-50px); 
    opacity: 0; 
  }
  to { 
    transform: translateX(0); 
    opacity: 1; 
  }
`;

const slideInRight = keyframes`
  from { 
    transform: translateX(50px); 
    opacity: 0; 
  }
  to { 
    transform: translateX(0); 
    opacity: 1; 
  }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  font-family: ${theme.fonts.main};
  overflow-x: hidden;
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

// Hero Section
const HeroSection = styled(Section)`
  min-height: 100vh;
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

  display: flex;
  align-items: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: ${pulse} 4s ease-in-out infinite;
  }

  &::before {
    top: ${theme.spacing.lg};
    left: ${theme.spacing.lg};
    width: 8rem;
    height: 8rem;
    background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

    animation-delay: 0s;
  }

  &::after {
    bottom: ${theme.spacing.lg};
    right: ${theme.spacing.xl};
    width: 12rem;
    height: 12rem;
    background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

    animation-delay: 2s;
  }
`;

const HeroBackgroundExtra = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 6rem;
  height: 6rem;
 background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 50%;
  animation: ${bounce} 2s ease-in-out infinite;
  animation-delay: 0.5s;
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (min-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
    padding: 60px 40px;
  }
`;

const HeroContent = styled.div`
  color: ${theme.colors.inverse};
  animation: ${slideInLeft} 0.8s ease-out;
`;

const TrustBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(10px);
  border-radius: 25px;
  font-size: ${theme.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes.lg};
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: 3.5rem;
  }
`;

const HeroHighlight = styled.span`
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.medium};
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: ${theme.spacing.sm};
  max-width: 600px;

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: ${theme.fontSizes.large};
  }
`;

const HeroDescription = styled.p`
  font-size: ${theme.fontSizes.regular};
  line-height: 1.7;
  opacity: 0.8;
  margin-bottom: ${theme.spacing.lg};
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.mobile}) {
    flex-direction: row;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

  color: ${theme.colors.inverse};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  font-size: ${theme.fontSizes.regular};
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  box-shadow: ${theme.shadows.glowPink};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

    transition: left ${theme.transitions.slow};
  }

  &:hover {
    background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: ${theme.colors.inverse};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.large};
  font-size: ${theme.fontSizes.regular};
  font-weight: 500;
  border: 2px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  backdrop-filter: blur(10px);

  &:hover {
    background: ${({ variant, theme }) => {
    switch (variant) {
      case "outlined":
        return "transparent";
      case "green":
        return theme.colors.green || "#28a745";
      case "blue":
        return theme.colors.blue || "#17a2b8";
      default:
        return `
        linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 100%
        )
      `;
    }
  }};
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);

    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-1px);
  }
`;

// Card Showcase
const CardShowcase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${slideInRight} 0.8s ease-out;
`;

const CardStack = styled.div`
  position: relative;
  margin-top: "10px";
  animation: ${float} 3s ease-in-out infinite;
`;

const Card = styled.div`
  background: linear-gradient(
  135deg,
  rgba(34, 197, 94, 0.2) 0%,   /* light green (#22c55e) */
  rgba(5, 150, 105, 0.2) 100%  /* teal green (#059669) */
);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.lg};
  width: 400px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${theme.colors.inverse};
  transform: ${(props) => (props.primary ? "rotate(-3deg)" : "rotate(3deg)")};
  transition: all ${theme.transitions.slow};
  position: ${(props) => (props.primary ? "relative" : "absolute")};
  top: ${(props) => (props.primary ? "0" : "-30px")};
  right: ${(props) => (props.primary ? "0" : "-20px")};
  z-index: ${(props) => (props.primary ? "2" : "1")};
  box-shadow: ${(props) =>
    props.primary ? theme.shadows.glow : theme.shadows.glowPink};

  &:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.6); /* Neon cyan glow */
  }
`;


const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.large};
  font-weight: 700;
  font-family: ${theme.fonts.heading};
  margin: 0;
`;

const CardNumber = styled.div`
  font-family: ${theme.fonts.mono};
  font-size: ${theme.fontSizes.regular};
  opacity: 0.8;
  letter-spacing: 2px;
`;

// Card Selection Section
const CardSelectionSection = styled(Section)`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
`;

const CardSelectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.laptop}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const CardTypeButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const CardTypeButton = styled.button`
  flex: 1;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.large};
  border: 2px solid;
  background: linear-gradient(
  135deg,
  rgba(34, 197, 94, 0.2) 0%,   /* light green (#22c55e) */
  rgba(5, 150, 105, 0.2) 100%  /* teal green (#059669) */
);
    
  border-color: ${(props) => {
    if (props.active && props.type === "virtual") {
      return theme.colors.accent;
    } else if (props.active && props.type === "physical") {
      return "#374151";
    }
    return theme.colors.border;
  }};
  color: ${(props) =>
    props.active && props.type === "physical"
      ? theme.colors.inverse
      : theme.colors.text};
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  box-shadow: ${(props) =>
    props.active ? theme.shadows.large : theme.shadows.small};

  &:hover {
    border-color: ${(props) =>
    props.type === "virtual" ? theme.colors.accent : "#374151"};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
  }
`;

const CardTypeContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
`;

const CardTypeText = styled.div`
  text-align: left;
  flex: 1;
`;

const CardTypeTitle = styled.span`
  font-size: ${theme.fontSizes.medium};
  font-weight: 600;
  display: block;
  color: ${(props) => {
    if (props.active && props.type === "virtual") {
      return theme.colors.accent;
    } else if (props.active && props.type === "physical") {
      return theme.colors.inverse;
    }
    return theme.colors.text;
  }};
`;

const CardTypeDescription = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${(props) =>
    props.active && props.type === "physical"
      ? theme.colors.white
      : theme.colors.white};
  display: block;
  margin-top: ${theme.spacing.xs};
`;

// Spend Crypto Section
const SpendCryptoSection = styled(Section)`
  // padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};
  text-align: center;

  @media (min-width: ${theme.breakpoints.laptop}) {
    // padding: 0 ${theme.spacing.lg};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 800;
  color: #fff;
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: ${theme.fontSizes.xxlarge};
  }
`;

const SectionDescription = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: white;
  // margin-bottom: ${theme.spacing.xxl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1;
`;

// Virtual Card Section
const VirtualCardSection = styled(Section)`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
`;

const VirtualCardContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (min-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr;
    padding: 0 ${theme.spacing.lg};
  }
`;

const PhoneMockupContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const PhoneMockup = styled.div`
  position: relative;
  width: 320px;
  height: 640px;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: 36px;
  padding: 8px;
  box-shadow: ${theme.shadows.xl};
`;

const PhoneScreen = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  border-radius: 28px;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const PhoneContent = styled.div`
  padding: ${theme.spacing.md} ${theme.spacing.sm};
`;

const PhoneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.xs} 0;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  padding: ${theme.spacing.xs} ${theme.spacing.xs};
  border-radius: 20px;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: 50%;
`;

const StatusText = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.textLight};
  font-weight: 500;
`;

const AmountText = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.text};
  font-weight: 700;
`;

const PhoneCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  }
`;

const PhoneCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.lg};
`;

const PhoneCardIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneCardBrand = styled.span`
  color: ${theme.colors.inverse};
  font-size: ${theme.fontSizes.regular};
  font-weight: 600;
`;

const PhoneCardInfo = styled.div`
  color: ${theme.colors.inverse};
`;

const PhoneCardNumber = styled.div`
  font-size: ${theme.fontSizes.regular};
  opacity: 0.7;
  margin-bottom: ${theme.spacing.xs};
  font-family: ${theme.fonts.mono};
  letter-spacing: 1px;
`;

const PhoneCardName = styled.div`
  font-size: ${theme.fontSizes.small};
  opacity: 0.5;
`;

const PhoneCardFooter = styled.div`
  position: absolute;
  bottom: ${theme.spacing.md};
  right: ${theme.spacing.md};
  color: ${theme.colors.inverse};
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  opacity: 0.8;
`;

const PhoneActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xs};
`;

const PhoneActionButton = styled.div`
background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  color: ${(props) =>
    props.primary ? theme.colors.inverse : theme.colors.text};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm};
  text-align: center;
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.medium};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.large};
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  left: -40px;
  top: 80px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm};
  width: 200px;
  box-shadow: ${theme.shadows.xl};
  transform: rotate(-12deg);
  animation: ${float} 8s ease-in-out infinite;
  z-index: 10;
`;

const FloatingCardContent = styled.div`
  text-align: center;
  color: ${theme.colors.inverse};
`;

const FloatingCardIcon = styled.div`
  width: 32px;
  height: 32px;
   background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.xs};
`;

const FloatingCardTitle = styled.div`
  font-size: ${theme.fontSizes.regular};
  font-weight: 700;
`;

const VirtualCardInfo = styled.div``;

const VirtualCardTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  font-family: ${theme.fonts.heading};

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: ${theme.fontSizes.xxlarge};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.lg} 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: ${theme.borderRadius.medium};
  border-left: 4px solid ${theme.colors.accent};
  transition: all ${theme.transitions.medium};

  &:hover {
    transform: translateX(4px);
    box-shadow: ${theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),  
  border-radius: ${theme.borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: ${theme.fontSizes.regular};
  color: ${theme.colors.text};
  font-weight: 500;
`;

// Physical Card Section
const PhysicalCardSection = styled(Section)`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  color: ${theme.colors.inverse};
`;

const PhysicalCardBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    top: ${theme.spacing.xl};
    left: ${theme.spacing.xxl};
    width: 256px;
    height: 256px;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  }

  &::after {
    bottom: ${theme.spacing.xxl};
    right: ${theme.spacing.xl};
    width: 384px;
    height: 384px;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  }
`;

const PhysicalCardContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};
  position: relative;
  z-index: 10;

  @media (min-width: ${theme.breakpoints.laptop}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const PhysicalCardTitle = styled.h2`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 800;
  margin-bottom: ${theme.spacing.xl};
  font-family: ${theme.fonts.heading};
  text-align: center;

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: ${theme.fontSizes.xxlarge};
  }
`;

const PhysicalCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PhysicalCardItem = styled.div`
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: ${theme.borderRadius["2xl"]};
  padding: ${theme.spacing.lg};
  text-align: center;
  transform: scale(1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
    transition: left 0.5s;
  }

  &:hover {
    transform: scale(1.05) translateY(-4px);
    box-shadow: ${theme.shadows["2xl"]};

    &::before {
      left: 100%;
    }
  }
`;

const PhysicalCardItemIcon = styled.div`
  margin: 0 auto ${theme.spacing.md};
  width: 80px;
  height: 80px;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

const PhysicalCardItemTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.heading};
`;

const PhysicalCardItemDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  opacity: 0.8;
  line-height: 1.5;
`;

// Global Section
// Global Section

// Hero Section
const GlobalSection = styled.section`
  padding: 5.5rem 3rem;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  color: white;
`;

const GlobalContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  gap: 4rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const GlobalInfo = styled.div`
  text-align: left;
`;

const GlobalTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1rem;
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GlobalDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
  color: gray;
`;

const GlobalGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GlobalItem = styled.div`
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
  padding: 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
   background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),

    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const GlobalItemIcon = styled.div`
  width: 55px;
  height: 55px;
  // background: "red";
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const GlobalItemTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const GlobalItemDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.5;
`;

const Payments = () => {
  const [selectedCardType, setSelectedCardType] = useState("virtual");
  const virtualCardSectionRef = useRef(null);

  const scrollToSection = () => {
    virtualCardSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigate = useNavigate("");

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackground>
          <HeroBackgroundExtra />
        </HeroBackground>
        <HeroContainer>
          <HeroContent>
            <TrustBadge>
              <Star size={16} color="#fde047" style={{ marginRight: "8px" }} />
              Trusted by 100K+ users worldwide
            </TrustBadge>

            <HeroTitle>
              YOUR ALL-IN-ONE
              <br />
              <HeroHighlight>CRYPTO PAYMENT</HeroHighlight>
              <br />
              SOLUTION
            </HeroTitle>

            <HeroSubtitle>
              Accessible crypto wallet for everyone, everywhere.
            </HeroSubtitle>

            <HeroDescription>
              Let's embrace the future with cryptocurrency payments via Syzyky
              Pay! Seamlessly convert and spend your digital assets anywhere in
              the world.
            </HeroDescription>

            <ButtonGroup>
              <PrimaryButton onClick={() => navigate('/app_download')}>
                Get your card now
                <ArrowRight size={20} />
              </PrimaryButton>
              <SecondaryButton>
                <Play size={20} />
                Watch demo
              </SecondaryButton>
            </ButtonGroup>
          </HeroContent>

          <CardShowcase>
            <CardStack>
              <Card primary>
                <CardHeader>
                  <CardIcon primary>
                    <Zap size={24} color="#ec4899" />
                  </CardIcon>
                  <CardTitle>Syzyky Pay</CardTitle>
                </CardHeader>
                <CardNumber>•••• •••• •••• 1234</CardNumber>
              </Card>
              <Card>
                <CardHeader>
                  <CardIcon>
                    <Shield size={24} color="#ffffff" />
                  </CardIcon>
                  <CardTitle>Syzyky Pay</CardTitle>
                </CardHeader>
                <CardNumber>•••• •••• •••• 5678</CardNumber>
              </Card>

            </CardStack>
          </CardShowcase>
        </HeroContainer>
      </HeroSection>

      {/* Card Type Selection */}
      <CardSelectionSection>
        <CardSelectionContainer>
          <CardTypeButtons>
            <CardTypeButton
              active={selectedCardType === "virtual"}
              type="virtual"
              onClick={() => {
                setSelectedCardType("virtual");
                scrollToSection();
              }}
            >
              <CardTypeContent>
                <CreditCard
                  size={32}
                  color={selectedCardType === "virtual" ? "#ec4899" : "#6b7280"}
                // color = "white"
                />
                <CardTypeText>
                  <CardTypeTitle
                    active={selectedCardType === "virtual"}
                    type="virtual"
                  >
                    Virtual Card
                  </CardTypeTitle>
                  <CardTypeDescription
                    active={selectedCardType === "virtual"}
                    type="#fff"
                  >
                    Instant digital payments worldwide
                  </CardTypeDescription>
                </CardTypeText>
                <ChevronDown
                  size={20}
                  color={selectedCardType === "virtual" ? "#ec4899" : "#9ca3af"}
                />
              </CardTypeContent>
            </CardTypeButton>

            <CardTypeButton
              active={selectedCardType === "physical"}
              type="physical"
              onClick={
                () => {
                  setSelectedCardType("physical");
                  scrollToSection();
                }}
            >
              <CardTypeContent>
                <CreditCard
                  size={32}
                  color={
                    selectedCardType === "physical" ? "#ffffff" : "#6b7280"
                  }
                />
                <CardTypeText>
                  <CardTypeTitle
                    active={selectedCardType === "physical"}
                    type="physical"
                  >
                    Physical Card
                  </CardTypeTitle>
                  <CardTypeDescription
                    active={selectedCardType === "physical"}
                    type="physical"
                  >
                    Tangible card for in-person transactions
                  </CardTypeDescription>
                </CardTypeText>
                <ChevronDown
                  size={20}
                  color={
                    selectedCardType === "physical" ? "#ffffff" : "#9ca3af"
                  }
                />
              </CardTypeContent>
            </CardTypeButton>
          </CardTypeButtons>
        </CardSelectionContainer>
      </CardSelectionSection>

      {/* Spend Crypto Section */}
      <SpendCryptoSection>
        <SectionContainer>
          <SectionTitle>SPEND CRYPTO LIKE FIAT</SectionTitle>
          <SectionDescription>
            Swift, seamless, secure: Transform your crypto into everyday
            purchases with Syzyky Pay.
          </SectionDescription>
        </SectionContainer>
      </SpendCryptoSection>

      {/* Virtual Card Section */}
      <VirtualCardSection ref={virtualCardSectionRef}>
        <VirtualCardContent>
          <PhoneMockupContainer>
            <PhoneMockup>
              <PhoneScreen>
                <PhoneContent>
                  <PhoneHeader>
                    <StatusIndicator>
                      <StatusDot />
                      <StatusText>Aliexpress</StatusText>
                    </StatusIndicator>
                    <AmountText>~$6,000 USD</AmountText>
                  </PhoneHeader>

                  <PhoneCard>
                    <PhoneCardHeader>
                      <PhoneCardIcon>
                        <Zap size={16} color="#1f2937" />
                      </PhoneCardIcon>
                      <PhoneCardBrand>Pay</PhoneCardBrand>
                    </PhoneCardHeader>
                    <PhoneCardInfo>
                      <PhoneCardNumber>•••• •••• •••• 9988</PhoneCardNumber>
                      <PhoneCardName>Anthony Martinez</PhoneCardName>
                    </PhoneCardInfo>
                    <PhoneCardFooter>Syzyky Pay</PhoneCardFooter>
                  </PhoneCard>

                  <PhoneActions>
                    <PhoneActionButton primary>Transfer</PhoneActionButton>
                    <PhoneActionButton>Pay Now</PhoneActionButton>
                  </PhoneActions>
                </PhoneContent>
              </PhoneScreen>
            </PhoneMockup>

            <FloatingCard>
              <FloatingCardContent>
                <FloatingCardIcon>
                  <Zap size={16} color="#1f2937" />
                </FloatingCardIcon>
                <FloatingCardTitle>Syzyky Pay</FloatingCardTitle>
              </FloatingCardContent>
            </FloatingCard>
          </PhoneMockupContainer>

          <VirtualCardInfo>
            <VirtualCardTitle>VIRTUAL CARD</VirtualCardTitle>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>
                  <Check size={16} color="#ffffff" />
                </FeatureIcon>
                <FeatureText>Instant creation and activation</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <Check size={16} color="#ffffff" />
                </FeatureIcon>
                <FeatureText>Compatible with all mobile wallets</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <Check size={16} color="#ffffff" />
                </FeatureIcon>
                <FeatureText>Real-time transaction notifications</FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>
                  <Check size={16} color="#ffffff" />
                </FeatureIcon>
                <FeatureText>Enhanced security with 2FA</FeatureText>
              </FeatureItem>
            </FeatureList>
            <PrimaryButton onClick={() => navigate('/app_download')}>
              Get your virtual card
              <ArrowRight size={20} />
            </PrimaryButton>
          </VirtualCardInfo>
        </VirtualCardContent>
      </VirtualCardSection>

      {/* Physical Card Section */}
      <PhysicalCardSection>
        <PhysicalCardBackground />
        <PhysicalCardContent>
          <PhysicalCardTitle>PHYSICAL CARD</PhysicalCardTitle>

          <PhysicalCardGrid>
            <PhysicalCardItem variant="dark">
              <PhysicalCardItemIcon>
                <Smartphone size={48} />
              </PhysicalCardItemIcon>
              <PhysicalCardItemTitle>Tap and Pay</PhysicalCardItemTitle>
              <PhysicalCardItemDescription>
                Contactless payments with NFC technology for quick and secure
                transactions
              </PhysicalCardItemDescription>
            </PhysicalCardItem>

            <PhysicalCardItem variant="gray">
              <PhysicalCardItemIcon>
                <Zap size={48} />
              </PhysicalCardItemIcon>
              <PhysicalCardItemTitle>
                Real-time Transactions
              </PhysicalCardItemTitle>
              <PhysicalCardItemDescription>
                Instant crypto-to-fiat conversion with live exchange rates and
                notifications
              </PhysicalCardItemDescription>
            </PhysicalCardItem>

            <PhysicalCardItem variant="dark">
              <PhysicalCardItemIcon>
                <CreditCard size={48} />
              </PhysicalCardItemIcon>
              <PhysicalCardItemTitle>ATM Withdrawal</PhysicalCardItemTitle>
              <PhysicalCardItemDescription>
                Access your crypto funds at millions of ATMs worldwide with
                competitive rates
              </PhysicalCardItemDescription>
            </PhysicalCardItem>
          </PhysicalCardGrid>
        </PhysicalCardContent>
      </PhysicalCardSection>

      {/* Global Section */}
      <GlobalSection>
        <GlobalContent>
          <GlobalInfo>
            <GlobalTitle>
              SPEND CRYPTO
              <br />
              EVERYWHERE
            </GlobalTitle>
            <GlobalDescription>
              Use your Syzyky Pay card anywhere traditional cards are accepted.
              Shop online, pay in stores, withdraw cash - all powered by your
              crypto with instant conversion and global acceptance.
            </GlobalDescription>
            <PrimaryButton onClick={() => { navigate('/app_download') }}>
              Get Started Today <ArrowRight size={20} />
            </PrimaryButton>
          </GlobalInfo>

          <GlobalGrid>
            <GlobalItem delay="0.1s">
              <GlobalItemIcon>
                <Globe size={32} color="#fde047" />
              </GlobalItemIcon>
              <GlobalItemTitle>Global Acceptance</GlobalItemTitle>
              <GlobalItemDescription>
                Accepted at 50M+ merchants worldwide wherever Visa/Mastercard is
                used
              </GlobalItemDescription>
            </GlobalItem>

            <GlobalItem delay="0.2s">
              <GlobalItemIcon>
                <Shield size={32} color="#86efac" />
              </GlobalItemIcon>
              <GlobalItemTitle>Bank-Level Security</GlobalItemTitle>
              <GlobalItemDescription>
                Military-grade encryption and fraud protection for all your
                transactions
              </GlobalItemDescription>
            </GlobalItem>

            <GlobalItem delay="0.3s">
              <GlobalItemIcon>
                <Zap size={32} color="#7dd3fc" />
              </GlobalItemIcon>
              <GlobalItemTitle>Instant Conversion</GlobalItemTitle>
              <GlobalItemDescription>
                Real-time crypto to fiat conversion with the best exchange rates
              </GlobalItemDescription>
            </GlobalItem>

            <GlobalItem delay="0.4s">
              <GlobalItemIcon>
                <Smartphone size={32} color="#c4b5fd" />
              </GlobalItemIcon>
              <GlobalItemTitle>Mobile Control</GlobalItemTitle>
              <GlobalItemDescription>
                Complete control over your card settings, limits, and spending
                from your phone
              </GlobalItemDescription>
            </GlobalItem>
          </GlobalGrid>
        </GlobalContent>
      </GlobalSection>
    </Container>
  );
};

export default Payments;
