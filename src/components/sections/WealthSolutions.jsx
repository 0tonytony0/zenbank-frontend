import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/WealthSolution.jpg";
// import { theme } from "../../styles/theme";

// Styled Components
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  max-width: 100%;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accent2}
  );
  padding: 30px;
  border-radius: 20px;

  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;




const CardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1.2fr 1fr;
    align-items: stretch;
  }
`;


const CardLeft = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  min-height: 320px;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );

  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(30, 91, 184, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow:
      0 40px 80px rgba(0, 0, 0, 0.8),
      0 0 60px rgba(30, 91, 184, 0.6);
  }

  &::after {
    content: "01";
    position: absolute;
    right: 40px;
    bottom: 20px;
    font-size: 120px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: rgba(255, 255, 255, 0.08);
  }
`;

const CardRight = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  min-height: 320px;

  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-8px);
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow:
      0 35px 70px rgba(0, 0, 0, 0.7),
      0 0 40px rgba(30, 91, 184, 0.5);
  }

  &::after {
    content: "02";
    position: absolute;
    right: 40px;
    bottom: 20px;
    font-size: 120px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: rgba(255, 255, 255, 0.05);
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 10px;
    width: 6px;
    height: 30px;
    background: ${({ theme }) => theme.colors.accent2};
    border-radius: 4px;
  }
`;


const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  max-width: 500px;
`;


// Component
const WealthSolutions = () => {
  return (
    <Container>
      <Overlay />
      <Content>
        <Title>
          Wealth solutions for Family, Offices, Corporate, and Private clients.
        </Title>
        <CardSection>
          <CardLeft>
            <CardTitle>Bespoke services for your private wealth</CardTitle>
            <CardDescription>
              Accounts above $100,000 unlock access to a dedicated relationship
              manager, exclusive OTC services, custom terms, and rates.
            </CardDescription>
          </CardLeft>

          <CardRight>
            <Navigation>
              {/* <ArrowButton>←</ArrowButton> */}
              <div>
                <CardTitle>
                  Build your company's digital asset portfolio
                </CardTitle>
                <CardDescription>
                  Grow your business through Zenbank’s OTC borrowing, lending,
                  and trading desk with assistance from a dedicated relationship
                  manager.
                </CardDescription>
              </div>
              {/* <ArrowButton>→</ArrowButton> */}
            </Navigation>
          </CardRight>
        </CardSection>
      </Content>
    </Container>
  );
};

export default WealthSolutions;
