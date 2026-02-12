import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiCircle } from 'react-icons/si';
import { PiHandCoins } from 'react-icons/pi';
import { BiSolidOffer } from 'react-icons/bi';

// Styled Components
const SectionWrapper = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.background || '#1a1a2e'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 4rem;
  }
`;

const HeaderWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  max-width: 1200px;
  width: 100%;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  line-height: 1.3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary || '#4facfe'};
`;

const ContainerCard = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  text-align: left;
  max-width: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textLight || '#ffffff'};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  b {
    color: ${({ theme }) => theme.colors.text || '#ffffff'};
    font-weight: 600;
  }
`;

const ExchangeIconBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const MiniIconBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
    padding: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || '#4facfe'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const MyParagraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
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

const itemVariants = {
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

const BuyAndSellSelection = () => {
  return (
    <SectionWrapper>
      <HeaderWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextSection>
          <Title variants={itemVariants}>
            Buy and sell at your target <br />
            <Highlight>price.</Highlight>
          </Title>
        </TextSection>
        <ContainerCard variants={itemVariants}>
          <Description>
            Busy schedules can lead to missed opportunities. Execute trades
            using <b>Target Price Swap</b> to buy or sell at your specified
            price automatically.
          </Description>
        </ContainerCard>
      </HeaderWrapper>

      <ExchangeIconBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MiniIconBox>
          <IconBox variants={itemVariants}>
            <IconWrapper>
              <FaArrowUpRightFromSquare />
            </IconWrapper>
            <MyParagraph>
              Earn interest on assets in active orders while awaiting execution.
            </MyParagraph>
          </IconBox>
          <IconBox variants={itemVariants}>
            <IconWrapper>
              <SiCircle />
            </IconWrapper>
            <MyParagraph>
              Your order will be executed in full at the exact price you’ve set.
            </MyParagraph>
          </IconBox>
        </MiniIconBox>
      </ExchangeIconBox>

      <HeaderWrapper
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextSection>
          <Title variants={itemVariants}>
            Buy up to 3x more crypto.
            <br />
          </Title>
        </TextSection>
        <ContainerCard variants={itemVariants}>
          <Description>
            Save time by automatically borrowing against your portfolio and
            buying more crypto in one go with the <b>Zenbank Booster</b>.
          </Description>
        </ContainerCard>
      </HeaderWrapper>

      <ExchangeIconBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MiniIconBox>
          <IconBox variants={itemVariants}>
            <IconWrapper>
              <PiHandCoins />
            </IconWrapper>
            <MyParagraph>
              Finance the purchase through a flexible Credit Line you can repay
              anytime.
            </MyParagraph>
          </IconBox>
          <IconBox variants={itemVariants}>
            <IconWrapper>
              <BiSolidOffer />
            </IconWrapper>
            <MyParagraph>
              Manage the risk on your boosted positions more effectively with
              take profit and stop loss orders.
            </MyParagraph>
          </IconBox>
        </MiniIconBox>
      </ExchangeIconBox>
    </SectionWrapper>
  );
};

export default BuyAndSellSelection;
