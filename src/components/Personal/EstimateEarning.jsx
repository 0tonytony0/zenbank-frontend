import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EstimateBoxImg from '../../assets/Container(1).png';
import CurrencyUSD from '../../assets/currency-usd-flag.svg fill.png';

// Theme object (same as Payments for consistency)
const theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3f37c9',
    accent: '#4cc9f0',
    text: '#d1d5db',
    textLight: '#9ca3af',
    background: '#0d0d2b', // Dark blue background
    backgroundAlt: '#1e1e4a', // Slightly lighter dark blue
    border: '#4b5563',
    success: '#4BB543',
    error: '#FF3333',
    dark: '#111827',
    darker: '#030712',
    inverse: '#ffffff',
    pink: '#ec4899',
    purple: '#7c3aed',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'JetBrains Mono', 'Monaco', 'Menlo', monospace",
  },
  fontSizes: {
    small: '0.875rem',
    regular: '1rem',
    medium: '1.25rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
    '2xl': '24px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.2)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 40px rgba(79, 70, 229, 0.4)',
    glowPink: '0 0 40px rgba(236, 72, 153, 0.4)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
};

// Styled Components
const Container = styled.div`
  background: ${theme.colors.background};
  padding: ${theme.spacing.lg} ${theme.spacing.sm};
  font-family: ${theme.fonts.main};
  overflow-x: hidden;
`;

const EstimateBox = styled.div`
  max-width: 1200px;
  margin: 0 auto ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.inverse};

  h1 {
    font-size: clamp(1.5rem, 5vw, ${theme.fontSizes.xlarge});
    font-weight: 800;
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    font-size: clamp(0.875rem, 3vw, ${theme.fontSizes.regular});
    color: ${theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    h1 {
      font-size: clamp(2rem, 6vw, ${theme.fontSizes.xxlarge});
    }
  }
`;

const SavingsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: ${theme.colors.backgroundAlt};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.medium};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${theme.fontSizes.regular};
  color: ${theme.colors.text};
  font-weight: 600;
`;

const AssetSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm};
  transition: all ${theme.transitions.medium};

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.small};
  }
`;

const AssetIcon = styled.img`
  width: clamp(24px, 6vw, 32px);
  height: clamp(24px, 6vw, 32px);
`;

const AssetName = styled.span`
  font-size: ${theme.fontSizes.regular};
  color: ${theme.colors.inverse};
  flex: 1;
`;

const InterestRate = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.success};
  font-weight: 600;
`;

const AmountInput = styled.input`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm};
  font-size: ${theme.fontSizes.regular};
  color: ${theme.colors.inverse};
  font-family: ${theme.fonts.mono};
  outline: none;
  transition: all ${theme.transitions.medium};

  &:focus {
    border-color: ${theme.colors.accent};
    box-shadow: ${theme.shadows.glow};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xs};
  }
`;

const SliderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.textLight};
`;

const SliderBar = styled.div`
  height: 8px;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  position: relative;
  overflow: hidden;
`;

const SliderProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent});
  border-radius: ${theme.borderRadius.small};
  transition: width ${theme.transitions.medium};
`;

const StartButton = styled.button`
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
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
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left ${theme.transitions.slow};
  }

  &:hover {
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

const InfoBox = styled.div`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.md};
  text-align: center;
  border: 1px solid ${theme.colors.border};

  p {
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.sm};
    line-height: 1.6;

    strong {
      color: ${theme.colors.text};
      font-weight: 600;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.sm};
  }
`;

const LearnMoreButton = styled.button`
  background: transparent;
  color: ${theme.colors.accent};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.fontSizes.regular};
  font-weight: 500;
  border: 2px solid ${theme.colors.accent};
  cursor: pointer;
  transition: all ${theme.transitions.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  margin: 0 auto;

  &:hover {
    background: rgba(76, 201, 240, 0.1);
    transform: translateY(-1px);
    box-shadow: ${theme.shadows.small};
  }
`;

const LastImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacing.lg};

  img {
    width: 100%;
    max-width: clamp(200px, 50vw, 400px);
    height: auto;
    border-radius: ${theme.borderRadius.large};
    box-shadow: ${theme.shadows.large};
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    img {
      max-width: 600px;
    }
  }
`;

const EstimateEarning = () => {
  const [amount, setAmount] = useState(50000);
  const navigate = useNavigate();

  return (
    <Container>
      <EstimateBox>
        <h1>Estimate your earnings.</h1>
        <p>Compare your potential earnings with Syzyky Flexible Savings to alternative yield options.</p>
      </EstimateBox>

      <SavingsContainer>
        {/* Asset Selection */}
        <FieldGroup>
          <Label>Asset</Label>
          <AssetSelector>
            <AssetIcon src={CurrencyUSD} alt="USD Coin" />
            <AssetName>USD Coin</AssetName>
            <InterestRate>up to 12%</InterestRate>
          </AssetSelector>
        </FieldGroup>

        {/* Amount Input */}
        <FieldGroup>
          <Label>Amount</Label>
          <AmountInput
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="5000"
            max="2000000"
            aria-label="Enter amount for savings"
          />
        </FieldGroup>

        {/* Slider */}
        <SliderGroup>
          <SliderLabels>
            <span>$5,000</span>
            <span>$2,000,000</span>
          </SliderLabels>
          <SliderBar>
            <SliderProgress style={{ width: `${Math.min((amount / 2000000) * 100, 100)}%` }} />
          </SliderBar>
        </SliderGroup>

        {/* Start Earning Button */}
        <StartButton aria-label="Start earning with Syzyky" onClick={() => navigate('/start_earning')}>
          Start earning
        </StartButton>

        {/* Fixed-Term Savings Info */}
        <InfoBox>
          <p>
            Choose Syzyky <strong>Fixed-term Savings</strong> and enjoy higher
            interest rates for a set term. Discover how much you can earn.
          </p>
          <LearnMoreButton aria-label="Learn more about Fixed-term Savings" onClick={() => navigate('/fixed_term_savings')}>
            Learn more <ArrowRight size={20} />
          </LearnMoreButton>
        </InfoBox>
      </SavingsContainer>

      {/* <LastImage>
        <img src={EstimateBoxImg} alt="Syzyky Savings Illustration" />
      </LastImage> */}
    </Container>
  );
};

export default EstimateEarning;
