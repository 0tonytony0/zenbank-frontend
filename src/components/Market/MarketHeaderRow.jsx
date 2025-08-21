// src/components/MarketHeaderRow.js
import React from "react";
import styled from "styled-components";

// Styled Components

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  background: #fafafa;
  border-bottom: 1px solid #eee;
  font-weight: 600;
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    display: none;
}

  }
`;

export const Column = styled.div`
  flex: ${(props) => props.flex || "1"};
  text-align: ${(props) => props.align || "left"};

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