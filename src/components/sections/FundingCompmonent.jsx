// src/components/FundingComponent.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const QuoteIcon = styled.span`
  font-size: 50px;
  color: white;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => `${theme.colors.textLight}150`};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Cards = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} ,
    ${({ theme }) => theme.colors.border}
  );
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;


const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Icon = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => `${theme.colors.textLight}150`};
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;


const FundingComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTop>
            <QuoteIcon>"</QuoteIcon>
            <Title>Fund your account effortlessly.</Title>
            <QuoteIcon>"</QuoteIcon>
          </HeaderTop>
          <Subtitle>
            Add funds via bank transfers under your name, or choose from simple alternatives that match your needs.
          </Subtitle>
        </Header>

        <Cards>
          <Card initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <CardTop>
              <Icon>👤</Icon>
              <CardTitle>Crypto-friendly bank transfers</CardTitle>
            </CardTop>
            <CardDescription>
              Your personal USD, EUR, and GBP accounts on Zenbank help you prevent blocked or delayed transactions that banks can impose on third-party transfers. Adding funds is fee-free for EUR and GBP transfers, and USD amounts over $5,000.
            </CardDescription>
          </Card>

          <Card initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
            <CardTop>
              <Icon>🔗</Icon>
              <CardTitle>Seamless crypto transfers</CardTitle>
            </CardTop>
            <CardDescription>
              Receive crypto from external platforms or wallets across 20+ blockchain networks like Ethereum, Solana, and Tron.
            </CardDescription>
          </Card>

          <Card initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <CardTop>
              <Icon>⚡</Icon>
              <CardTitle>Instant and local payment solutions</CardTitle>
            </CardTop>
            <CardDescription>
              Choose between instant card payments with Visa, Mastercard, Apple Pay, Google Pay or popular regional payment methods that work best for you.
            </CardDescription>
          </Card>
        </Cards>

        {/* <BannerWrapper>
          <BannerImage src={LoyaltyBanner} alt="Loyalty Program Banner" />
        </BannerWrapper> */}
      </Container>
    </Wrapper>
  );
};

export default FundingComponent;
