import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  margin-top: 1rem;
  padding: 60px 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: center;
`;

const TitleWrapper = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px 10px;
  border-radius: 12px;
  margin: 0 auto 40px auto;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px 10px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 12px 8px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const SubTitle = styled.h3`
  font-size: 15px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 10px 0 0;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const Card = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.border}
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  padding: 20px;
  flex: 1 1 250px;
  max-width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 140px;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Icon = styled.span`
  font-size: 36px;
  margin-bottom: 12px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => `${theme.colors.text}`};
  margin: 0;
  font-weight: 700;
  text-align: center;
`;

// React Component
const WhoItsFor = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Who It's For ?</Title>
        <SubTitle>Designed for Everyone !!</SubTitle>
      </TitleWrapper>
      <CardGrid>
        <Card>
          <Icon>💼</Icon>
          <CardText>Busy professionals sending money home.</CardText>
        </Card>
        <Card>
          <Icon>💻</Icon>
          <CardText>Freelancers receiving international payments.</CardText>
        </Card>
        <Card>
          <Icon>₿</Icon>
          <CardText>Crypto users managing both fiat and digital currency.</CardText>
        </Card>
        <Card>
          <Icon>🎓</Icon>
          <CardText>Students or expats paying bills abroad.</CardText>
        </Card>
        <Card>
          <Icon>🏠</Icon>
          <CardText>Everyday users wanting easy, free transfers.</CardText>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default WhoItsFor;
