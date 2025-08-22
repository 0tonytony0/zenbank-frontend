import React from "react";
import styled from "styled-components";
import { ArrowUpRight, ArrowDownRight } from "lucide-react"; 
import ETH from '../../assets/currency-ethereum.svg fill.png'
import SOL from '../../assets/Solana-Icon,Buy-Solana-(SOL).png'
import XRP from '../../assets/currency-xrp.svg fill.png' 
import USDT from '../../assets/currency-usdt-1.svg fill.png'
import USDC from '../../assets/currency-usdc-1.svg fill.png' 
import DOGE from '../../assets/currency-dogecoin-1.svg fill.png'
import PAXG from '../../assets/currency-paxg-3.svg fill.png'
import SUI from '../../assets/currency-sui.svg fill.png'
import { LineChart, Line, ResponsiveContainer } from "recharts"; 
import { Column } from "./MarketHeaderRow";

const ADA = "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png";

const BIT = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s";

const AXS = "https://thumbs.dreamstime.com/b/axie-infinity-axs-token-icon-isolated-white-background-228539600.jpg";

const data = [
  {
    name: "Bitcoin ",
    image: BIT,
    symbol: "BTC",
    price: 103468,
    change: -0.92,
    volume: 38638642195,
    marketCap: 2055266603272,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    image: ETH,
    price: 2480.24,
    change: -3.03,
    volume: 26594976958,
    marketCap: 299372783323,
  },
  {
    name: "Solana",
    image: SOL,
    symbol: "SOL",
    price: 173.73,
    change: -1.16,
    volume: 6396338259,
    marketCap: 90235556737,
  },
  {
    name: "XRP",
    image: XRP,
    symbol: "XRP",
    price: 2.55,
    change: 5.00,
    volume: 10838593641,
    marketCap: 149125841630,
  },
  {
    name: "Cardano",
    image: ADA,
    symbol: "ADA",
    price: 0.798294,
    change: -3.42,
    volume: 1681772392,
    marketCap: 28767718578,
  },
  {
    name: "Tether",
    image: USDT,
    symbol: "USDT",
    price: 1,
    change: 0.00,
    volume: 88113524320,
    marketCap: 150064466049,
  },
  {
    name: "USD Coin",
    image: USDC,
    symbol: "USDC",
    price: 0.00,
    change: -0.01,
    volume: 14775090082,
    marketCap: 60786177553,
  },
  {
    name: "Axie Infinity",
    image: AXS,
    symbol: "AXS",
    price: 3.22,
    change: 1.68,
    volume: 99547492,
    marketCap: 519477132,
  },
  {
    name: "Dogecoin",
    image: DOGE,
    symbol: "DOGE",
    price: 0.226824,
    change: -8.72,
    volume: 3637291186,
    marketCap: 33817771901,
  },
  {
    name: "SUI",
    image: SUI,
    symbol: "SUI",
    price: 3.97,
    change: -4.95,
    volume: 2180003708,
    marketCap: 13240738636,
  },
  {
    name: "PAX Gold",
    image: PAXG,
    symbol: "PAXG",
    price: 3263.04,
    change: 1.04,
    volume: 62634691,
    marketCap: 773068984,
  },

  // Add the rest here...
];

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 35px 20px;
  // border: 2px solid red;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`; 

const CryptoImg = styled.img`
  width: 32px;
  height: 32px;
  // heigth: 15px;
  // width: 15px;
`;


const CryptoName = styled.div`
  font-weight: 600;
  white-space: normal;         // allow line breaks
  text-align: left;
  justify-content: center;        // center multi-word names
  word-break: break-word;      // break long names if needed
  max-width: 80px;             // prevent overflow (optional)

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Price = styled.div`
  flex: 1;
  min-width: 80px;
  text-align: center;
  padding-left: 150px; /* 👈 slightly moves it to the right on desktop */

  @media (max-width: 768px) {
    text-align: left;
    padding-left: 0; /* 👈 reset for mobile */
  }
`;


const Change = styled.div`
  flex: 1;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => (props.positive ? "green" : "red")};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Volume = styled.div`
  flex: 1;
  min-width: 140px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const MarketCap = styled.div`
  flex: 1;
  min-width: 140px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`; 

 
const ChartWrapper = styled.div`
  width: 100%;
  height: 50px;

  @media (min-width: 768px) {
    height: 70px;
    max-width: 120px;
  }
`;


const TopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const StatRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const MobileBlock = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

const DesktopBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none; // hide on mobile
  }
`; 


const CryptoChart = () => {
  return (


    <Container>
      <Grid>
        {data.map((crypto, index) => (


          <Card key={index}>
            <TopInfo>
              <CryptoImg src={crypto.image} alt={`${crypto.name} logo`} />
              <CryptoName>{crypto.name}</CryptoName>
            </TopInfo>

            {/* ✅ Mobile layout */}
            <MobileBlock>
              <StatRow>
                <Price>${crypto.price.toLocaleString()}</Price>
                <Change positive={crypto.change >= 0}>
                  {crypto.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {Math.abs(crypto.change)}%
                </Change>
              </StatRow>

              <StatRow>
                <Volume>${crypto.volume.toLocaleString()}</Volume>
                <MarketCap>${crypto.marketCap.toLocaleString()}</MarketCap>
              </StatRow>

              {/* ✅ Mobile: Chart at bottom */}
              <ChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[{ pv: 0 }, { pv: 10 }, { pv: 10000 }]}>
                    <Line type="bumpX" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartWrapper>
            </MobileBlock>

            {/* ✅ Desktop layout */}
            <DesktopBlock>
              <Column style={{ flex: "1" }}>
                <Price>${crypto.price.toLocaleString()}</Price>
              </Column>
              <Column style={{ flex: "1" }}>
                <Change positive={crypto.change >= 0}>
                  {crypto.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {Math.abs(crypto.change)}%
                </Change>
              </Column>
              <Column style={{ flex: "1" }}>
                <Volume>${crypto.volume.toLocaleString()}</Volume>
              </Column>
              <Column style={{ flex: "1" }}>
                <MarketCap>${crypto.marketCap.toLocaleString()}</MarketCap>
              </Column>
              <Column style={{ flex: "1" }}>
                <ChartWrapper>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[{ pv: 0 }, { pv: 10 }, { pv: 10000 }]}>
                      <Line type="bumpX" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartWrapper>
              </Column>
            </DesktopBlock>

          </Card>



        ))}
      </Grid>
    </Container>
  );
};

export default CryptoChart;




// const Card = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   padding: 14px;
//   border: 1px solid #ddd;
//   border-radius: 12px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
//   gap: 12px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 12px;
//   }
// `;
// <Card key={index}>
//   <CryptoImg src={crypto.image} alt={${crypto.name} logo} />
//   <CryptoName>{crypto.name}</CryptoName>
//   <Price>${crypto.price.toLocaleString()}</Price>
//   <Change positive={crypto.change >= 0}>
//     {crypto.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
//     {Math.abs(crypto.change)}%
//   </Change>
//   <Volume>${crypto.volume.toLocaleString()}</Volume>
//   <MarketCap>${crypto.marketCap.toLocaleString()}</MarketCap>
//   <ChartContainer>
//     <ResponsiveContainer width="100%" height="100%" >
//       <LineChart data={[{ pv: 0 }, { pv: 10 }, { pv: 10000 }]}>
//         <Line type="bumpX" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
//       </LineChart>
//     </ResponsiveContainer>
//   </ChartContainer>
// </Card>