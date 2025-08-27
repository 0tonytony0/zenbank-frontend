// src/App.js
import React from "react";
import Banner from "../Personal/Banner";
import WealthGenerationComponent from "../sections/WealthGEneration";
import FundamentalsComponent from "../sections/Fundamentals";
import styled from 'styled-components';
import Cryptomarket from "./Cryptomarket";

import Table from "./Table";



function Market() {

  const BannerWrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing.xxl};
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    overflow: hidden;
  `;

  

  return (
    <>
      <Banner Name="Market" />
      <Cryptomarket />
      <BannerWrapper>
      {/* <BannerImage src={syzykyBanner} alt="Syzyky Program Banner" /> */}
      </BannerWrapper>
      <Table />
      <WealthGenerationComponent />
      <FundamentalsComponent />

</>
  );
}

export default Market;

