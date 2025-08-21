import React from 'react';
import styled from 'styled-components';
import { ImStatsBars } from "react-icons/im";
import { RiHandCoinLine } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 40px;
  color: black;
  text-align: left;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 20px 0;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Step = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  padding: 30px 20px;
  text-align: center;
  border-right: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')};

  @media (max-width: 992px) {
    flex: 0 0 50%;
    border-right: none;
    border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')};
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    border-bottom: 1px solid #ccc;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
  color: black;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  color: black;
`;

const Description = styled.p`
  font-size: 16px;
  color: black;
  line-height: 1.6;
`;

const steps = [
  {
    icon: <ImStatsBars size={40} />,
    title: 'Futures',
    desc: 'Capitalize on uptrends and downtrends with perpetuals.',
  },
  {
    icon: <RiHandCoinLine size={40} />,
    title: 'Credit Line',
    desc: 'Borrow funds without selling your digital assets.',
  },
  {
    icon: <FaCoins size={40} />,
    title: 'Dual Investment',
    desc: 'Earn high yield while buying low and selling high.',
  },
];

const AiecoSection = () => {
  return (
    <Section>
      <Heading>Utilize the entire AI Key ecosystem to grow your wealth.</Heading>
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

export default AiecoSection;
