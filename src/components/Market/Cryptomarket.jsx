// src/components/Cryptomarket.js
import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styled from "styled-components";
import XRP from '../../assets/Ripple-(XRP)-cryptocurrency-icon.png';
import KSM from '../../assets/currency-ksm.svg.png'; 
import Chart1 from '../../assets/Vector1.png';


const ASX = "https://thumbs.dreamstime.com/b/axie-infinity-axs-token-icon-isolated-white-background-228539600.jpg";
// Styled Components
const CryptoBox = styled.div`
  padding: 20px;
`;

const CryptoSec1 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CryptoHeadSec = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

const MarketButtonSection = styled(CryptoHeadSec)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.5rem;
  }
`;

const MarketDownIcon = styled.span`
  color: red;
  margin-left: 5px;
`;

const MarketDownDarkBtn = styled.button`
  background-image: linear-gradient(to right, #171313 , #438A9D);
  color: #fff;
  padding: 10px 18px;
  border: none;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;

const MarketDownLightBtn = styled.button`
  background: #eee;
  color: #333;
  padding: 10px 18px;
  border: none;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;

const CryptoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
`;

const CryptoMainBox = styled.div`
  background: #fff;
  border-left: 1px solid #ccc;
  padding: 20px;
  width: 100%;
  max-width: 340px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const CryptoUpperPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgSet = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-right: 10px;
  }
`;

const SpanXRP = styled.span`
  color: #000;

  strong {
    display: block;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

const ChartSet = styled.div`
  img {
    height: 40px;
  }
`;

const CryptoLowerPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
`;

const LowerTextBox = styled.div`
  font-size: 1.1rem;

  h4 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin: 0;

    span {
      margin-left: 5px;
      color: green;
      display: flex;
      align-items: center;
    }
  }
`;

function Cryptomarket() {
  return (
    <CryptoBox>
      <CryptoSec1>
        <CryptoHeadSec>
          <h1>The crypto markets today.</h1>
          <p>
            Trade over 100 digital assets and explore the latest crypto coin
            prices. Make your first top-up and start earning daily compounding interest.
          </p>
        </CryptoHeadSec>

        <MarketButtonSection>
          <h3>
            Market is down
            <MarketDownIcon><FaCaretDown /> 3.16%</MarketDownIcon>
          </h3>
          <div>
            <MarketDownDarkBtn>Top Gainers</MarketDownDarkBtn>
            <MarketDownLightBtn>Top Losers</MarketDownLightBtn>
          </div>
        </MarketButtonSection>

        <CryptoContainer>
          {/* XRP Box */}
          <CryptoMainBox>
            <CryptoUpperPart>
              <ImgSet>
                <img src={XRP} alt="XRP" />
                <SpanXRP>
                  <strong>XRP</strong>
                  <p>XRP</p>
                </SpanXRP>
              </ImgSet>
              <ChartSet>
                <img src={Chart1} alt="Chart" />
              </ChartSet>
            </CryptoUpperPart>

            <CryptoLowerPart>
              <LowerTextBox>$2.55</LowerTextBox>
              <LowerTextBox>
                <h4>
                  24H <span><FaCaretUp /> 5.00%</span>
                </h4>
              </LowerTextBox>
            </CryptoLowerPart>
          </CryptoMainBox>

          {/* KSM Box */}
          <CryptoMainBox>
            <CryptoUpperPart>
              <ImgSet>
                <img src={KSM} alt="KSM" />
                <SpanXRP>
                  <strong>Kusama</strong>
                  <p>KSM</p>
                </SpanXRP>
              </ImgSet>
              <ChartSet>
                <img src={Chart1} alt="Chart" />
              </ChartSet>
            </CryptoUpperPart>

            <CryptoLowerPart>
              <LowerTextBox>$21.07</LowerTextBox>
              <LowerTextBox>
                <h4>
                  24H <span><FaCaretUp /> 1.69%</span>
                </h4>
              </LowerTextBox>
            </CryptoLowerPart>
          </CryptoMainBox>

          {/* ASX Box */}
          <CryptoMainBox>
            <CryptoUpperPart>
              <ImgSet>
                <img src={ASX} alt="ASX" />
                <SpanXRP>
                  <strong>Axie Infinity</strong>
                  <p>ASX</p>
                </SpanXRP>
              </ImgSet>
              <ChartSet>
                <img src={Chart1} alt="Chart" />
              </ChartSet>
            </CryptoUpperPart>

            <CryptoLowerPart>
              <LowerTextBox>$3.22</LowerTextBox>
              <LowerTextBox>
                <h4>
                  24H <span><FaCaretUp /> 1.68%</span>
                </h4>
              </LowerTextBox>
            </CryptoLowerPart>
          </CryptoMainBox>

        </CryptoContainer>
      </CryptoSec1>
    </CryptoBox>
  );
}

export default Cryptomarket;