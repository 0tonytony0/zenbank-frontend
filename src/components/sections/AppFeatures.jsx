import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';

// Styled Components
const Wrapper = styled.section`
  padding: 3rem 1rem;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background || '#f9fafb'};
  min-height: 100vh; /* Ensure full viewport height for better presentation */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  flex-direction: column;
  text-align: center;
  max-width: 800px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;



const TitleWrapper = styled.div`
  flex: 1;
`;

const MainTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.text || '#1f2937'};
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 1.75rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight || '#6b7280'};
  margin-top: 0.5rem;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(79, 172, 254, 0.1) 0%,
    rgba(142, 68, 173, 0.1) 100%
  );
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text || '#1f2937'};

  @media (max-width: 767px) {
    font-size: 1.125rem;
  }
`;

const Emoji = styled.span`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight || '#6b7280'};
  margin: 0;

  @media (max-width: 767px) {
    font-size: 0.8125rem;
  }
`;

// Features Data
const features = [
  {
    emoji: '💸',
    title: 'Free Transactions',
    desc: 'Say goodbye to hidden fees. All transfers within the app are completely free.',
  },
  {
    emoji: '🌐',
    title: 'International Transfers',
    desc: 'Lowest rates for cross-border transactions with real-time exchange rates.',
  },
  {
    emoji: '🔐',
    title: 'Advanced Security',
    desc: 'Your account is protected with AI-based security, biometric login, and encryption.',
  },
  {
    emoji: '📊',
    title: 'Track & Save Money',
    desc: 'Set saving goals, view transaction history, and monitor your progress.',
  },
  {
    emoji: '💳',
    title: 'Multiple Cards, Colored & Smart',
    desc: 'Add multiple cards and assign colors to manage them easily.',
  },
  {
    emoji: '🪙',
    title: 'Crypto Support',
    desc: 'Support for Bitcoin, Ethereum, USDT, and others. Buy, exchange, and send.',
  },
];

// AppFeatures Component
const AppFeatures = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          
          <TitleWrapper>
            
            <MainTitle>“ App Features in Detail </MainTitle>
            <SubTitle>Your Financial Freedom in One App</SubTitle>
          </TitleWrapper>
        </Header>
        <FeaturesList>
          {features.map((item, i) => (
            <FeatureCard key={i}>
              <Title>
                <Emoji>{item.emoji}</Emoji> {item.title}
              </Title>
              <Description>{item.desc}</Description>
            </FeatureCard>
          ))}
        </FeaturesList>
      </Wrapper>
    </Container>
  );
};

export default AppFeatures;