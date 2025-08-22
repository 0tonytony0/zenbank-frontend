import React from 'react';
import styled from 'styled-components';
import ScannerApp from '../../pages/ScannerApp';

// Styled components for the footer
const FooterContainer = styled.footer`
  background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ); /* Slight gradient overlay */
  backdrop-filter: blur(12px); /* Glassmorphism blur */
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15); /* Subtle border for glass look */

  color: #b0b8c4;
  padding: 40px 20px;
  font-family: Arial, sans-serif;

  /* Optional: Neon glow effect on hover */
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.4),
                0 0 40px rgba(142, 68, 173, 0.4);
  }
`;


const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ColumnTitle = styled.h4`
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  color: #b0b8c4;
  font-size: 14px;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;

const FollowSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Disclaimer = styled.p`
  color: #b0b8c4;
  font-size: 12px;
  line-height: 1.5;
  max-width: 1200px;
  margin: 20px auto 0;
  text-align: left;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Personal Column */}
        <Column>
          <ColumnTitle>Personal</ColumnTitle>
          <FooterLink href="#">Buy Crypto</FooterLink>
          <FooterLink href="#">Flexible Savings</FooterLink>
          <FooterLink href="#">Fixed-term Savings</FooterLink>
          <FooterLink href="#">Exchange</FooterLink>
          {/* <FooterLink href="#">Credit Line</FooterLink> */}
          <FooterLink href="#">Syzyky Card</FooterLink>
          <FooterLink href="#">Dual Investment</FooterLink>
          <FooterLink href="#">Futures</FooterLink>
          {/* <FooterLink href="#">Loyalty Program</FooterLink> */}
          {/* <FooterLink href="#">Private Clients</FooterLink> */}
          {/* <FooterLink href="#">Tax Reporting</FooterLink> */}
          {/* <FooterLink href="#">Web3 Wallet</FooterLink> */}
          <FooterLink href="#">Referral Program</FooterLink>
        </Column>

        {/* Business Column */}
        <Column>
          <ColumnTitle>Business</ColumnTitle>
          <FooterLink href="#">Corporates</FooterLink>
          <FooterLink href="#">Institutions</FooterLink>
          <FooterLink href="#">White Label</FooterLink>
          <FooterLink href="#">Syzyky Ventures</FooterLink>
        </Column>

        {/* Company Column */}
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Ambassadors</FooterLink>
          <FooterLink href="#">Vulnerability Disclosure</FooterLink>
          <FooterLink href="#">News & Insights</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Status Center</FooterLink>
          <FooterLink href="#">Contacts</FooterLink>
          <FooterLink href="#">Sitemap</FooterLink>
        </Column>

        {/* Legal Column */}
        <Column>
          <ColumnTitle>Legal</ColumnTitle>
          <FooterLink href="#">Exchange Terms</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          {/* <FooterLink href="#">Affiliate Terms</FooterLink> */}
          <FooterLink href="#">Staking Terms</FooterLink>
          {/* <FooterLink href="#">Earn Terms & Conditions</FooterLink> */}
          <FooterLink href="#">Terms & Conditions</FooterLink>
          <FooterLink href="#">Services Terms</FooterLink>
          {/* <FooterLink href="#">Credit Terms</FooterLink> */}
          <FooterLink href="#">DeFi Terms</FooterLink>
          <FooterLink href="#">Syzyky Card Terms</FooterLink>
          <FooterLink href="#">Cookies Policy</FooterLink>
        </Column>

        {/* Follow Syzyky Section */}
        <FollowSection>
          <ColumnTitle>Follow Syzyky</ColumnTitle>
          <IconContainer>
            <IconPlaceholder />
            <IconPlaceholder />
            <IconPlaceholder />
          </IconContainer>
            <ScannerApp/>

        </FollowSection>
      </FooterContent>

      {/* Disclaimer Text */}
      <Disclaimer>
        All Platform services, features, nature of digital assets are unique, and when considering digital assets in the context of wealth enhancement, any such references or materials are for general information purposes only and are not intended to be relied upon or considered as legal, tax, or accounting advice. You should consult a qualified professional, as this material is not tailored to your specific circumstances. When referencing digital assets as potential investments, any similarities with traditional concepts of investments should not be interpreted, understood, or intended. Assets under management figure last updated on January 2025.
      </Disclaimer>
    </FooterContainer>
  );
};

export default Footer;