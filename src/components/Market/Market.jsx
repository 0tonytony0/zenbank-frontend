// src/App.js
import React from "react";
import Banner from "../Personal/Banner";
import WealthGenerationComponent from "../sections/WealthGeneration";
import FundamentalsComponent from "../sections/Fundamentals";
import styled from 'styled-components';
import Cryptomarket from "./Cryptomarket";

import Table from "./Table";



function Market() {


  return (
    <>
      <Banner />
      <Cryptomarket />
      <Table />
      {/* <WealthGenerationComponent />
      <FundamentalsComponent /> */}

</>
  );
}

export default Market;

