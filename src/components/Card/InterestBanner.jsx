import React from "react";
import styled from "styled-components";
// import { FaRegCreditCard } from "react-icons/fa";
import { SiCircle } from "react-icons/si";
import { PiHandCoins } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { TbNotification } from "react-icons/tb";
import { GiBanknote } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";

const InterestCardBox = styled.div`
  display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
  }
`;
const InterestBox = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  color: white;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  width: 90%;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 16px;
  font-size: 24px;
  color: white;
`;

const Text = styled.p`
  margin: 0;
`;

const InterestBanner = () => {
  return (
    <InterestCardBox>
      <InterestBox>
        <IconWrapper>
          <TbNotification />
        </IconWrapper>
        <Text>
          Earn up to 14% annual interest on your balance and have it ready to spend at all times. 
        </Text>
      </InterestBox>
      <InterestBox>
        <IconWrapper>
          <GiBanknote />
        </IconWrapper>
        <Text>
         Spend stable coins or crypto prioritising which assets to use first with a simple drag and drop.
        </Text>
      </InterestBox>
      <InterestBox>
        <IconWrapper>
          <LuNotebookPen />
        </IconWrapper>
        <Text>
          Get up to 2% in crypto cashback on purchases. You'll also be earning interest on assets not used as collateral.
        </Text>
      </InterestBox>
      <InterestBox>
        <IconWrapper>
          <BiSolidOffer />
        </IconWrapper>
        <Text>
         Grow your buying power with crypto-backed Credit Lines starting from 2.9% interest. 
        </Text>
      </InterestBox>
      <InterestBox>
        <IconWrapper>
          <SiCircle />
        </IconWrapper>
        <Text>
          Finance all your spending needs without selling any of your digital assets.
        </Text>
      </InterestBox>
      <InterestBox>
        <IconWrapper>
          <PiHandCoins />
        </IconWrapper>
        <Text>
          Spend any supported asset, while enjoying an ever-growing ist of new currencies.
        </Text>
      </InterestBox>
    </InterestCardBox>

  );
};

export default InterestBanner;
