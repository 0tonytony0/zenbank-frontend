import React from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';

const Wrapper = styled.section`
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;


const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Quote = styled.div`
  font-size: 80px;
  color: #a0c4cf;
  margin-right: 20px;
  font-weight: bold;
`;

const MainTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => `${theme.colors.textLight}150`};
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureCard = styled.div`
  background: linear-gradient(
  135deg,
  rgba(79, 172, 254, 0.2) 0 %,
  rgba(142, 68, 173, 0.2) 100 %
    );
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => `${theme.colors.textLight}150`};
`;

const features = [
  {
    emoji: '💸',
    title: 'Free Transactions',
    desc: 'Say goodbye to hidden fees. All transfers within the app are free.',
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

const AppFeatures = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Quote>“</Quote>
          <div>
            <MainTitle>App Features in Detail</MainTitle>
            <SubTitle>Your Financial Freedom in One App</SubTitle>
          </div>
        </Header>
        <FeaturesList>
          {features.map((item, i) => (
            <FeatureCard key={i}>
              <Title>
                <span>{item.emoji}</span> {item.title}
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
