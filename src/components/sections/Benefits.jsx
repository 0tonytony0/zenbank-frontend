// src/components/Benefits.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    );
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 3rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.textLight};
`;


const Benefits = () => (
  <Section>
    <Title>Exclusive Wealth & Loyalty Benefits</Title>
    <Text style={{color: "white"}}>
      Enjoy daily interest earnings, lower borrow rates, cashback, custom OTC services, and more with balances over $5,000 or $100,000.
    </Text>

  </Section>
);

export default Benefits;

