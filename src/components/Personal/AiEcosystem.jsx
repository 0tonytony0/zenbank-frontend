// src/components/FeatureSteps.js
import React from "react";
import styled from "styled-components";
import { FiUserPlus, FiCreditCard, FiSend } from "react-icons/fi";

const Section = styled.section`
  padding: 60px 20px;
  background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 40px;
  margin-left: 80px;
  text-align: left;
color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
    margin: 0px 0px 10px 0px;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
color: ${({ theme }) => theme.colors.text};
  flex-wrap: wrap;
`;

const Step = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 20px;
  text-align: left;
  border-right: ${(props) => (props.isLast ? "none" : "1px solid #ccc")};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: ${(props) => (props.isLast ? "none" : "1px solid #ccc")};
    max-width: 100%;
    display: block;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  font-size: 16px;
color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const steps = [
  {
    icon: <FiUserPlus size={40} />,
    title: "Create an account",
    desc: "Sign up using your phone number and email. Set your PIN and password.",
  },
  {
    icon: <FiCreditCard size={40} />,
    title: "Get a crypto card",
    desc: "Spend without selling your digital assets.",
  },
  {
    icon: <FiSend size={40} />,
    title: "Make transactions",
    desc: "Use the app to send money, pay bills, buy crypto, or track savings.",
  },
];

const AiEcosystem = () => {
  return (
    <Section>
      <Heading>
        Utilize the entire Zenbank ecosystem to grow your wealth.
      </Heading>
      <Grid>
        {steps.map((step, idx) => (
          <Step key={idx} isLast={idx === steps.length - 1}>
            <IconWrapper>{step.icon}</IconWrapper>
            <Title>{step.title}</Title>
            <Description>{step.desc}</Description>
          </Step>
        ))}
      </Grid>
    </Section>
  );
};

export default AiEcosystem;
