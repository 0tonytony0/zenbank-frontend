// src/components/MarketHeaderRow.js
import React from "react";
import styled from "styled-components";

// Styled Components

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  margin-top: 50px;
  background: #fafafa;
  border: 3px solid #003cff;
  border-radius: 15px;
  font-weight: 550;
  font-size: 15px;
  color: #333;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
}

  }
`;

export const Column = styled.div`
  flex: ${(props) => props.flex || "1"};
  width: 100%;
  ${(props) =>
    props.isName &&
    `
    @media (min-width: 768px) {
      padding-left: 20px; /* adjust as needed */
    }
  `}
`;


function MarketHeaderRow() {
  return (
    <HeaderRow>
      <Column flex="1.5" isName>Name</Column>
      <Column>Price</Column>
      <Column>24H Change</Column>
      <Column>24H Volume</Column>
      <Column>Market Cap</Column>
      <Column>24H Chart</Column>
    </HeaderRow>


  );
}

export default MarketHeaderRow;