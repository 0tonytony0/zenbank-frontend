// src/components/WhyChoose.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Emoji = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.textLight};
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Title>Why Choose Syzyky?</Title>
        <Subtitle>Why Syzyky's is Better</Subtitle>
        <Grid>
          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }}>
            <Emoji>⚡</Emoji>
            <CardTitle>Fast Transfers</CardTitle>
            <CardDescription>Instantly send or receive money across borders.</CardDescription>
          </Card>

          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.1 }}>
            <Emoji>🔐</Emoji>
            <CardTitle>AI-Secured</CardTitle>
            <CardDescription>Transactions are protected with real-time AI fraud detection.</CardDescription>
          </Card>

          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.2 }}>
            <Emoji>💸</Emoji>
            <CardTitle>Zero Fees</CardTitle>
            <CardDescription>Enjoy 100% free transactions – no hidden charges.</CardDescription>
          </Card>

          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.3 }}>
            <Emoji>🌍</Emoji>
            <CardTitle>Global Coverage</CardTitle>
            <CardDescription>Instantly send or receive money across borders.</CardDescription>
          </Card>

          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.4 }}>
            <Emoji>💳</Emoji>
            <CardTitle>Multiple Cards</CardTitle>
            <CardDescription>Transactions are protected with real-time AI fraud detection.</CardDescription>
          </Card>

          <Card whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.5 }}>
            <Emoji>💰</Emoji>
            <CardTitle>Crypto Friendly</CardTitle>
            <CardDescription>Enjoy 100% free transactions – no hidden charges.</CardDescription>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
