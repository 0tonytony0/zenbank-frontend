import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import phoneMockup from '../../assets/Phone-Mockup.png';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  background: linear-gradient(
  135deg,
  #0D0D2B 0%,      /* Dark Navy (base) */
  #1A1A40 50%,     /* Deep Indigo */
  #2E2E69 100%     /* Rich Midnight Blue */
);


  flex-wrap: wrap;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    height: auto;
  }

  @media (min-width: 1024px) {
    padding-left: 120px;
    padding-right: 60px;
    flex-wrap: nowrap;
  }
`;




const Content = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 767px) {
    margin-left: 0;
    margin-bottom: 20px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;

  @media (min-width: 480px) {
    font-size: 2.2rem;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }
`;

const SubText = styled.p`
  font-size: 1rem;
  // color: ${({ theme }) => theme.colors.textLight};
  color: ${({ theme }) => `${theme.colors.textLight}150`};
  margin: 20px 0;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: ${({ theme }) => theme.spacing.md} 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;


const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;

  @media (max-width: 767px) {
    display: none;
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: 80vh;
  }
`;



const Hero = () => (
  <Wrapper>
    <Content>
      <Title>Your Trusted AI-Powered Money Transfer Partner</Title>
      <SubText>
        Experience secure, instant, and zero-fee transfers globally with AI-powered financial control.
      </SubText>
      <ButtonGroup>
        <Button variant="blue">Get Started</Button>
        <Button variant="green">Download App</Button>
        <Button variant="blue">Watch How It Works</Button>
      </ButtonGroup>
    </Content>
    <ImageWrapper>
      <img src={phoneMockup} alt="Phone Interface" />
    </ImageWrapper>
  </Wrapper>
);

export default Hero;
