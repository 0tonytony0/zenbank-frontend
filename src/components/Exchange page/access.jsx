import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBitcoin, FaArrowRight, FaTicketAlt } from 'react-icons/fa';

// Styled Components
const FeaturesContainer = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.background || '#1a1a2e'};
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 4rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 7rem;
  }
`;

const Feature = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FeatureRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
  }
`;

const IconBox = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.primary || '#4facfe'};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};

  @media (max-width: 767px) {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  line-height: 1.3;

  @media (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  margin: 0;
  line-height: 1.6;

  @media (min-width: 768px) {
    max-width: 60%;
    text-align: right;
  }

  @media (max-width: 767px) {
    font-size: 0.875rem;
  }

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text || '#ffffff'};
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const AccessSection = () => {
  return (
    <FeaturesContainer>
      <Feature
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <FeatureRow variants={rowVariants}>
          <IconBox>
            <FaBitcoin />
          </IconBox>
          <ContentBox>
            <Title>Access 1,500+ crypto pairs</Title>
            <Description>
              Swap blue-chip assets, altcoins, and stablecoins using a wide range of pairs.
            </Description>
          </ContentBox>
        </FeatureRow>

        <FeatureRow variants={rowVariants}>
          <IconBox>
            <FaArrowRight />
          </IconBox>
          <ContentBox>
            <Title>Optimal execution</Title>
            <Description>
              Our smart order router aggregates liquidity from multiple venues to execute at true cost and complete your orders swiftly.
            </Description>
          </ContentBox>
        </FeatureRow>

        <FeatureRow variants={rowVariants}>
          <IconBox>
            <FaTicketAlt />
          </IconBox>
          <ContentBox>
            <Title>Get more from every exchange</Title>
            <Description>
              Receive <strong>crypto</strong> cashback for any <strong>exchange</strong> you make.
            </Description>
          </ContentBox>
        </FeatureRow>
      </Feature>
    </FeaturesContainer>
  );
};

export default AccessSection;
