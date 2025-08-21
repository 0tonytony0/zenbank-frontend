// src/components/MarketNavBar.js
import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

// Styled Components

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px 0px 0px;
  padding: 20px 40px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`; 

const TabsContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 10px;
    margin-bottom: -10px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const TabButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg, #4facfe 0%, #8e2de2 100%)" // Blue → Violet Gradient
      : "transparent"};
  color: ${(props) => (props.active ? "#fff" : "#9ca3af")};
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active
        ? "linear-gradient(135deg, #4facfe 0%, #8e2de2 100%)" // same gradient if active
        : "linear-gradient(135deg, #3b3b3b, #1f1f1f)"}; // subtle dark hover for inactive
    transform: ${(props) => (props.active ? "scale(1.05)" : "none")};
    box-shadow: ${(props) =>
      props.active ? "0 0 12px rgba(142, 45, 226, 0.6)" : "none"};
  }
`;



const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  width: 240px;

  input {
    border: none;
    outline: none;
    flex: 1;
    margin-left: 8px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const categories = [
  "All",
  "Layer 1s",
  "Currencies",
  "DeFi",
  "Gaming",
  "NFT",
  "Stablecoins",
  "Memecoins",
  "AI",
];

function MarketNavBar() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <NavWrapper>
      <TabsContainer>
        {categories.map((item) => (
          <TabButton
            key={item}
            active={activeTab === item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </TabButton>
        ))}
      </TabsContainer>

      <SearchBox>
        <FiSearch />
        <input type="text" placeholder="Search" />
      </SearchBox>
    </NavWrapper>


  );
}

export default MarketNavBar;