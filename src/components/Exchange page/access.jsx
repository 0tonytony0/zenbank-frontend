import React from "react";
import styled from "styled-components";
import { FaBitcoin, FaArrowRight, FaTicketAlt } from "react-icons/fa";

const FeaturesContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    padding: 60px 80px;
  }
`;

const Feature = styled.div`
  padding: 40px 20px;
  background-color: #56a2b3;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
`;

const FeatureRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-bottom: 1px solid #000;
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
  }
`;

const IconBox = styled.div`
  font-size: 28px;
  flex-shrink: 0;
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #000;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #000;
  margin: 0;
  line-height: 1.5;

  @media (min-width: 768px) {
    max-width: 60%;
    text-align: right;
  }

  strong {
    font-weight: 700;
  }
`;

const AccessSection = () => {
  return (
    <FeaturesContainer>
      <Feature>
        <FeatureRow>
          <IconBox>
            <FaBitcoin color="black" />
          </IconBox>
          <ContentBox>
            <Title>Access 1,500+ crypto pairs</Title>
            <Description>
              Swap blue-chip assets, altcoins, and stablecoins using a wide range of pairs.
            </Description>
          </ContentBox>
        </FeatureRow>

        <FeatureRow>
          <IconBox>
            <FaArrowRight color="black" />
          </IconBox>
          <ContentBox>
            <Title>Optimal execution</Title>
            <Description>
              Our smart order router aggregates liquidity from multiple venues to execute at true cost and complete your orders swiftly.
            </Description>
          </ContentBox>
        </FeatureRow>

        <FeatureRow>
          <IconBox>
            <FaTicketAlt color="black" />
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
