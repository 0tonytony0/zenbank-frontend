import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 30px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.background}
  );
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 15px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 40px;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => `${theme.colors.textLight}150`};
  margin: 0;
  max-width: 400px;

  @media (max-width: 992px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Stat = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Icon = styled.span`
  font-size: 32px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StatText = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatNumber = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const StatDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => `${theme.colors.textLight}150`};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

// React Component
const FundamentalsComponent = () => {
  return (
    <Container>
      <TextSection>
        <Title>Strong fundamentals support your assets.</Title>
        <Subtitle>
          We put our clients first by providing a robust infrastructure,
          designed to sustain your long-term wealth growth.
        </Subtitle>
      </TextSection>
      <StatsSection>
        <Stat>
          <Icon>📈</Icon>
          <StatText>
            <StatNumber>$320+ billion</StatNumber>
            <StatDescription>
              in transaction volume and collateralised credit issued
            </StatDescription>
          </StatText>
        </Stat>
        <Stat>
          <Icon>💰</Icon>
          <StatText>
            <StatNumber>150+</StatNumber>
            <StatDescription>in interest paid</StatDescription>
          </StatText>
        </Stat>
        <Stat>
          <Icon>🌍</Icon>
          <StatText>
            <StatNumber>$1+ billion</StatNumber>
            <StatDescription>jurisdictions worldwide</StatDescription>
          </StatText>
        </Stat>
      </StatsSection>
    </Container>
  );
};

export default FundamentalsComponent;
