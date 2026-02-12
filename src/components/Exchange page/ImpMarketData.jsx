import React from "react";
import styled from "styled-components";
import MarketmainImg from '../../assets/double-hand.png'
import { FaBell, FaThumbsUp, FaUser, FaFileAlt, FaStar, FaExpandAlt } from "react-icons/fa";

const ImpMarketdetails = () => {
    // Layout wrappers
    const DataMainSection = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;
    const InnerMainSection = styled.div`
    padding: 20px;
    
  `;
    const MarketMainBox = styled.div`
    padding: 20px;
    
  `;
    const MarketMainHead = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    
  `;
    const MarketMainImage = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;
    const MarketMainPre = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  `;


    const FeaturesContainer = styled.div`
  background-color: #0D0D2B;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  color: white;
  font-family: sans-serif;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

    const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

    const IconBox = styled.div`
  font-size: 20px;
  margin-top: 4px;
`;

    const TextContent = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

    const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background: #000;
  color: white;
  font-size: 12px;
  border-radius: 4px;
  margin: 0 4px;
`;

    const Note = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

    return (
      <>
        <DataMainSection>
          <InnerMainSection>
            <MarketMainBox>
              <MarketMainHead>
                <h1>
                  All the important market <br />
                  data is in your hands.
                </h1>
              </MarketMainHead>

              <MarketMainImage>
                <img
                  src={MarketmainImg}
                  alt=""
                  style={{
                    width: "auto",
                    height: "300px",
                    borderRadius: "8px",
                  }}
                />
              </MarketMainImage>

              <MarketMainPre>
                Do your due diligence before trading crypto, directly from the
                Zenbank app.
              </MarketMainPre>
            </MarketMainBox>

            <FeaturesContainer>
              <FeatureItem>
                <IconBox>
                  <FaFileAlt />
                </IconBox>
                <TextContent>
                  Get the latest insights on time with an AI-curated news
                  summary.
                </TextContent>
              </FeatureItem>

              <FeatureItem>
                <IconBox>
                  <FaBell />
                </IconBox>
                <TextContent>
                  Set up custom alerts and get notified when your target is
                  reached.
                </TextContent>
              </FeatureItem>

              <FeatureItem>
                <IconBox>
                  <FaExpandAlt />
                </IconBox>
                <TextContent>
                  Track on-chain <Badge>WHALE ACTIVITY ℹ️</Badge> and{" "}
                  <Badge>OWNERSHIP ℹ️</Badge> for the asset.
                </TextContent>
              </FeatureItem>

              <FeatureItem>
                <IconBox>
                  <FaThumbsUp />
                </IconBox>
                <TextContent>
                  View the positive or negative{" "}
                  <Badge>SOCIAL SENTIMENT ℹ️</Badge> on X.
                </TextContent>
              </FeatureItem>

              <FeatureItem>
                <IconBox>
                  <FaFileAlt />
                </IconBox>
                <TextContent>
                  Track trending news regarding each asset listed on Zenbank.
                </TextContent>
              </FeatureItem>

              <FeatureItem>
                <IconBox>
                  <FaUser />
                </IconBox>
                <TextContent>
                  See if more Zenbank clients are buying or selling specific
                  assets.
                </TextContent>
              </FeatureItem>

              <Note>
                <IconBox>
                  <FaStar />
                </IconBox>
                <TextContent>
                  On-chain analytics and social sentiment are exclusive to
                  Platinum Tier clients.
                </TextContent>
              </Note>
            </FeaturesContainer>
          </InnerMainSection>
        </DataMainSection>
      </>
    );
};

export default ImpMarketdetails;


