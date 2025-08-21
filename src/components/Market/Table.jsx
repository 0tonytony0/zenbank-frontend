// Table.jsx

import React from "react";
import MarketNavBar from "./MarketNavBar";
import MarketHeaderRow from "./MarketHeaderRow";
import Cryptochart from "./CryptoChart";
import Pagehandler from "./PageHandler";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 89%;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1rem;  // Less padding for smaller screens
    width: 100%;      // Full width on mobile
    gap: 0.25rem;      // Smaller gap
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0.25rem;
  }
`;

const ScrollableBox = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
  }
`;



const FullWidthBox = styled.div`
  width: 100%;
`;

function Table() {
    return (
        <TableWrapper>
            <FullWidthBox>
                <MarketNavBar />
            </FullWidthBox>

            <ScrollableBox>
                <MarketHeaderRow />
            </ScrollableBox>

            <FullWidthBox>
                <Cryptochart />
            </FullWidthBox>

            <FullWidthBox>
                <Pagehandler />
            </FullWidthBox>
        </TableWrapper>
    );
}

export default Table;