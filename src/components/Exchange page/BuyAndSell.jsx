import React from "react";
import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiCircle } from "react-icons/si";
import { PiHandCoins } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";

const BuyAndSellSelection = () => {
  // Layout wrappers
  const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
      text-align: center;
    }
  `;

  const TextSection = styled.div`
    flex: 1;
  `;

  const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: white;
    line-height: 1.3;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `;

  const Highlight = styled.span`
    color: white;
  `;

  const ContainerCard = styled.div`
    flex: 1;
    padding: 30px;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

    border-radius: 16px;
    text-align: left;
    max-width: 500px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  `;

  const Description = styled.p`
    font-size: 19px;
    font-weight: 400;
    color: white;
    margin: 0;
  `;

  // Icon sections
  const ExchangeIconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

  const Miniiconbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

  const Iconbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 40%;
  padding: 20px 30px;
  margin: 5px 30px;
  border-left: 2px solid black;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid black;
    padding: 20px 20px;
  }
`;

  const MyIcon1 = styled(FaArrowUpRightFromSquare)`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
`;

  const MyIcon2 = styled(SiCircle)`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
`;

  const MyIcon3 = styled(PiHandCoins)`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
`;

  const MyIcon4 = styled(BiSolidOffer)`
  font-size: 50px;
  color: white;
  margin-bottom: 20px;
`;

  const Myparagraph = styled.p`
  font-size: 18px;
  color: white;
  line-height: 1.5;
  margin: 0;
`;


  return (
    <>
      <HeaderWrapper>
        <TextSection>
          <Title>
            Buy and sell at your target <br />
            <Highlight>price.</Highlight>
          </Title>
        </TextSection>

        <ContainerCard>
          <Description>
            Busy schedules can lead to missed opportunities. Execute trades using <b>Target Price Swap to buy or sell</b> at your specified price automatically.
          </Description>
        </ContainerCard>
      </HeaderWrapper>

      <ExchangeIconBox>
        <Miniiconbox>
          <Iconbox>
            <MyIcon1 />
            <Myparagraph>Earn interest on assets in active orders while awaiting execution.</Myparagraph>
          </Iconbox>
          <Iconbox>
            <MyIcon2 />
            <Myparagraph>Your order will be executed in full at the exact price you’ve set.</Myparagraph>
          </Iconbox>
        </Miniiconbox>
      </ExchangeIconBox>

      <HeaderWrapper>
        <TextSection>
          <Title>
            Buy up to 3x more crypto.<br />
          </Title>
        </TextSection>

        <ContainerCard>
          <Description>
            Save time by automatically borrowing against your portfolio and buying more crypto in one go with the Syzyky Booster.
          </Description>
        </ContainerCard>
      </HeaderWrapper>

      <ExchangeIconBox>
        <Miniiconbox>
          <Iconbox>
            <MyIcon3 />
            <Myparagraph>Finance the purchase through a flexible Credit Line you can repay anytime.</Myparagraph>
          </Iconbox>
          <Iconbox>
            <MyIcon4 />
            <Myparagraph>Manage the risk on your boosted positions more effectively with take profit and stop loss orders.</Myparagraph>
          </Iconbox>
        </Miniiconbox>
      </ExchangeIconBox>


    </>
  );
};

export default BuyAndSellSelection;
