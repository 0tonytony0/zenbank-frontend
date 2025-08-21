import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/WealthSolution.png";

// Styled Components
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  line-height: 1.3;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const CardLeft = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  color: #000;
  border-radius: 12px;
  padding: 20px;
  flex: 1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CardRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: inherit;
  margin: 0;
`;

// Component
const WealthSolutions = () => {
  return (
    <Container>
      <Overlay />
      <Content>
        <Title>
          Wealth solutions for family offices, corporates, and private clients.
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
              <ArrowButton>←</ArrowButton>
              <div>
                <CardTitle style={{ color: "white" }}>
                  Build your company's digital asset portfolio
                </CardTitle>
                <CardDescription style={{ color: "#ddd" }}>
                  Grow your business through Syzyky’s OTC borrowing, lending, and
                  trading desk with assistance from a dedicated relationship
                  manager.
                </CardDescription>
              </div>
              <ArrowButton>→</ArrowButton>
            </Navigation>
          </CardRight>
        </CardSection>
      </Content>
    </Container>
  );
};

export default WealthSolutions;
