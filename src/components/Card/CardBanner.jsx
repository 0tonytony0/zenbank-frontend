import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import CardBannerImg from "../../assets/CardBanner.png";
import bgImage from "../../assets/ffebca516cac6ee61afd0a054afa5dd4a044da49.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Arial', sans-serif;
`;

const TopTxtContainer = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  color: white;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    padding: 40px 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LeftTitleBox = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: white;
  margin: 0;
  text-align: center;

  strong {
    color: white;
    font-weight: 800;
  }

  @media (min-width: 768px) {
    font-size: 60px;
    text-align: left;
    width: 50%;
  }
`;

const TextRightBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    width: 45%;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-align: center;

  strong {
    color: white;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 26px;
    text-align: left;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #3a3a3a, #1f1f1f);

  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  width: fit-content;

  svg {
    font-size: 0.9rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const RatingText = styled.p`
  font-size: 0.9rem;
  color: white;
  margin-top: 10px;
  text-align: center;

  strong {
    color: white;
    font-weight: 600;
  }

  span {
    color: white;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MainimgBanner = styled.div`
  border-radius: 10px;
  padding: 0 10%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: bottom;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;

  @media (min-width: 768px) {
    padding: 0 180px;
    height: 600px;
  }
`;

const FlexMobileImage = styled.img`
  border-radius: 10px;
  height: 105%;

  @media (max-width: 768px) {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

const CardBanner = () => {
  return (
    <Container>
      <TopTxtContainer>
        <LeftTitleBox>Tap into your crypto wealth with the Zenbank Card.</LeftTitleBox>
        <TextRightBox>
          <Title>Spend without selling your digital assets and get up to 2% crypto cashback.</Title>
          <SubText>with daily payouts and no lock-ups.</SubText>
          <Button href="#">
            Sign up <FaArrowRight />
          </Button>
          <RatingText>
            Excellent 4.5 out of 5 <span>★ Trustpilot</span>
          </RatingText>
        </TextRightBox>
      </TopTxtContainer>
      <MainimgBanner>
        <FlexMobileImage src={CardBannerImg} alt="Banner" />
      </MainimgBanner>
    </Container>
  );
};

export default CardBanner;
