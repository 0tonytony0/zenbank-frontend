import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.section`
  background-color: #0D0D2B;
  color: white;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  padding: 30px;
  border-left: 4px solid #c79767;
  border-radius: 6px;
  text-align: left;

  h2 {
    font-size: 1.8rem;
    color: #7b6b53;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #5f5f5f;
  }
`;

// Main Component
const ActivateCardSection = () => {
  const steps = [
    {
      number: "1",
      title: "Open the Syzyky app",
      description: "Download, launch the app, and hit the 'Card' tab.",
    },
    {
      number: "2",
      title: "Activate virtual card",
      description: "Tap 'Activate Card' to issue your virtual card.",
    },
    {
      number: "3",
      title: "Add it to your digital wallet",
      description:
        "Add your card in the app and start using Apple Pay or Google Pay instantly.",
    },
    {
      number: "4",
      title: "Order a physical card",
      description:
        "On the 'Card' tab, select 'Order card', confirm your details, and tap 'Confirm'.",
    },
  ];

  return (
    <SectionContainer>
      <Title>How to activate your Syzyky Card.</Title>
      <CardsWrapper>
        {steps.map((step) => (
          <Card key={step.number}>
            <h2>{`${step.number}. ${step.title}`}</h2>
            <p>{step.description}</p>
          </Card>
        ))}
      </CardsWrapper>
    </SectionContainer>
  );
};

export default ActivateCardSection;
