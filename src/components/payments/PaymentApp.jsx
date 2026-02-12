import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Keyframe Animations
const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const floatAnimation = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(5deg); 
  }
`;
 

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Main Container
const HeroWrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e, #0f2027);
  background-size: 400% 400%;
  animation: ${gradientShift} 10s ease infinite;
  position: relative;
  overflow: hidden;
  padding: 80px 5% 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(88, 196, 221, 0.3) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 4% 40px;
  }
`;

// Grid Pattern Overlay
const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

// Floating Background Elements
const FloatingElement = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  pointer-events: none;
  
  &.element-1 {
    top: 10%;
    left: 10%;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    animation-delay: 0s;
    opacity: 0.1;
  }
  
  &.element-2 {
    top: 60%;
    right: 10%;
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #f093fb, #f5576c);
    animation-delay: 2s;
    opacity: 0.15;
  }
  
  &.element-3 {
    bottom: 20%;
    left: 30%;
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    animation-delay: 4s;
    opacity: 0.12;
  }
`;

// Main Content Grid
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  min-height: 80vh;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

// Left Content
const HeroText = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: none;
    margin: 0 auto;
  }
`;

// Badge Component
const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  padding: 12px 20px;
  margin-bottom: 30px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }

  .icon {
    width: 16px;
    height: 16px;
    color: #ffd700;
  }
`;

// Main Heading
const MainHeading = styled.h1`
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 24px;
  color: #ffffff;
  letter-spacing: -0.02em;

  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: block;
  }
`;

// Description
const Description = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Feature Pills Container
const FeaturePills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

// Feature Pill
const FeaturePill = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 10px 16px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }

  .icon {
    width: 16px;
    height: 16px;
    color: #764ba2;
  }
`;

// CTA Buttons
const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 50px;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const DownloadButtonWrapper = styled.div`
  position: relative;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  }

  .icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: translateX(4px);
  }

  &.active {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
  }
`;

// Dropdown Menu
const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 12px;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 200px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);

  &.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .apple-icon {
    color: #ffffff;
  }

  .google-icon {
    color: #34a853;
  }

  .android-icon {
    color: #3ddc84;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    
    .title {
      font-weight: 600;
      font-size: 14px;
    }
    
    .subtitle {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 16px 32px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  .icon {
    width: 20px;
    height: 20px;
  }
`;

// Stats Container
const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 640px) {
    gap: 24px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 2.5rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 4px;
    
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
  
  .label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }
`;

// Phone Mockup Container
const PhoneMockupContainer = styled.div`
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  justify-self: center;

  @media (max-width: 1024px) {
    margin-top: 40px;
  }
`;

// Floating Decoration Elements
const FloatingDecor = styled.div`
  position: absolute;
  border-radius: 20px;
  animation: ${floatAnimation} 8s ease-in-out infinite;
  pointer-events: none;

  &.decor-1 {
    top: -20px;
    left: -20px;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    opacity: 0.2;
    animation-delay: 0s;
  }

  &.decor-2 {
    bottom: -30px;
    right: -30px;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #f093fb, #f5576c);
    opacity: 0.3;
    animation-delay: 2s;
  }
`;

// Phone Container
const PhoneContainer = styled.div`
  width: 340px;
  height: 700px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 8px;
  position: relative;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  @media (max-width: 640px) {
    width: 300px;
    height: 620px;
  }
`;

// Phone Screen
const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border-radius: 42px;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

// Status Bar
const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;

  .battery {
    display: flex;
    align-items: center;
    gap: 4px;
    
    .battery-icon {
      width: 24px;
      height: 12px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 2px;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        right: -3px;
        top: 3px;
        width: 2px;
        height: 6px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 0 1px 1px 0;
      }
      
      .fill {
        width: 80%;
        height: 8px;
        background: #4ade80;
        border-radius: 1px;
        margin: 1px;
      }
    }
  }
`;

// Balance Section
const BalanceSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  .label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .amount {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffd700, #ffed4e, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    
    @media (max-width: 640px) {
      font-size: 2.5rem;
    }
  }
`;

// Action Buttons
const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 30px;

  button {
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &.primary {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;

      &:hover {
        transform: scale(1.02);
      }
    }

    &.secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }
`;

// Assets Section
const AssetsSection = styled.div`
  margin-bottom: 24px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    
    h3 {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }
    
    button {
      background: none;
      border: none;
      color: #764ba2;
      font-size: 12px;
      cursor: pointer;
    }
  }
`;

// Token List
const TokenList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Token Item
const TokenItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .token-info {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 12px;
    }
    
    .details {
      .symbol {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
      }
      
      .change {
        color: #4ade80;
        font-size: 12px;
      }
    }
  }
  
  .amount {
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
  }
`;

// Recent Activity Section
const ActivitySection = styled.div`
  .header {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;

  .activity-info {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(239, 68, 68, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      
      .dot {
        width: 8px;
        height: 8px;
        background: #ef4444;
        border-radius: 50%;
      }
    }
    
    .details {
      .merchant {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
      }
      
      .time {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
      }
    }
  }
  
  .amount {
    color: #ef4444;
    font-weight: 600;
    font-size: 14px;
  }
`;

// Icons (Simple SVG implementations)
const ZapIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l9 3v7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-3z"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

const SmartphoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H7V6h10v10z"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="icon apple-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="icon google-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg className="icon android-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6,9.48L16.85,8.14A9.05,9.05 0 0,0 8.85,8.14L8.1,9.48A6.86,6.86 0 0,1 12,7.5A6.86,6.86 0 0,1 17.6,9.48M9.47,10.83A0.75,0.75 0 1,0 8.72,10.08A0.75,0.75 0 0,0 9.47,10.83M14.53,10.83A0.75,0.75 0 1,0 13.78,10.08A0.75,0.75 0 0,0 14.53,10.83M4.5,12V21H6.5V21C6.5,21.57 6.93,22 7.5,22H16.5C17.07,22 17.5,21.57 17.5,21V12A6,6 0 0,0 12,6A6,6 0 0,0 4.5,12Z"/>
  </svg>
);

export default function PaymentApp() { 
  const [currentBalance, setCurrentBalance] = useState(0);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadRef = useRef(null);
  
  useEffect(() => { 
    
    // Animate balance counter
    let start = 0;
    const end = 23686;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentBalance(end);
        clearInterval(timer);
      } else {
        setCurrentBalance(Math.floor(start));
      }
    }, 16);

    // Handle clicks outside dropdown
    const handleClickOutside = (event) => {
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setShowDownloadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      clearInterval(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownloadClick = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  const handlePlatformClick = (platform) => {
    console.log(`Downloading for ${platform}`);
    // Add your download logic here
    setShowDownloadMenu(false);
    
    // You can add actual download URLs here
    // const downloadUrls = {
    //   ios: 'https://apps.apple.com/app/your-app',
    //   android: 'https://play.google.com/store/apps/details?id=your.app',
    //   apk: 'https://yourwebsite.com/app.apk'
    // };
    
    // Uncomment to actually redirect
    // window.open(downloadUrls[platform], '_blank');
  };

  const tokens = [
    { symbol: "USDC", amount: "18,042.00", change: "+2.4%" },
    { symbol: "USDT", amount: "1,202.57", change: "+0.1%" },
    { symbol: "BTC", amount: "0.0251225", change: "+8.2%" },
    { symbol: "ETH", amount: "0.4503", change: "+5.7%" },
  ];

  const recentTransactions = [
    { merchant: "Aliexpress", amount: "-68.00", currency: "USDC", time: "2h" },
    { merchant: "Uber Eats", amount: "-4.12", currency: "USDC", time: "4h" },
    { merchant: "Netflix", amount: "-15.99", currency: "USDT", time: "1d" },
  ];

  const stats = [
    { value: "500K+", label: "Active Users" },
    { value: "$2.4B", label: "Processed" },
    { value: "150+", label: "Countries" }
  ];

  return (
    <HeroWrapper>
      <GridOverlay />

      {/* Floating Background Elements */}
      <FloatingElement className="element-1" />
      <FloatingElement className="element-2" />
      <FloatingElement className="element-3" />

      <ContentGrid>
        {/* Left Content */}
        <HeroText>
          <Badge>
            <ZapIcon />
            AI-Powered Crypto Payments
          </Badge>

          <MainHeading>
            SPEND
            <span className="gradient-text">CRYPTO</span>
            LIKE FIAT
          </MainHeading>

          <Description>
            Experience the future of payments with Zenbank Pay. Lightning-fast
            transactions, military-grade security, and seamless crypto-to-fiat
            conversion.
          </Description>

          <FeaturePills>
            <FeaturePill>
              <ShieldIcon />
              Bank-Grade Security
            </FeaturePill>
            <FeaturePill>
              <ZapIcon />
              Instant Transfers
            </FeaturePill>
            <FeaturePill>
              <TrendingUpIcon />
              Real-time Rates
            </FeaturePill>
          </FeaturePills>

          <CTAContainer>
            <DownloadButtonWrapper ref={downloadRef}>
              <PrimaryButton
                onClick={handleDownloadClick}
                className={showDownloadMenu ? "active" : ""}
              >
                <DownloadIcon />
                Download App
                <ArrowRightIcon />
              </PrimaryButton>

              <DropdownMenu className={showDownloadMenu ? "active" : ""}>
                <DropdownItem onClick={() => handlePlatformClick("ios")}>
                  <AppleIcon />
                  <div className="text">
                    <div className="title">App Store</div>
                    <div className="subtitle">Download for iPhone</div>
                  </div>
                </DropdownItem>

                <DropdownItem onClick={() => handlePlatformClick("android")}>
                  <GooglePlayIcon />
                  <div className="text">
                    <div className="title">Google Play</div>
                    <div className="subtitle">Download for Android</div>
                  </div>
                </DropdownItem>

                <DropdownItem onClick={() => handlePlatformClick("apk")}>
                  <AndroidIcon />
                  <div className="text">
                    <div className="title">Android APK</div>
                    <div className="subtitle">Direct download</div>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </DownloadButtonWrapper>

            <SecondaryButton>
              <SmartphoneIcon />
              Try Demo
            </SecondaryButton>
          </CTAContainer>

          <StatsContainer>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <div className="value">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </StatItem>
            ))}
          </StatsContainer>
        </HeroText>

        {/* Right Side - Phone Mockup */}
        <PhoneMockupContainer>
          <FloatingDecor className="decor-1" />
          <FloatingDecor className="decor-2" />

          <PhoneContainer>
            <PhoneScreen>
              <StatusBar>
                <div>9:41</div>
                <div className="battery">
                  <div className="battery-icon">
                    <div className="fill"></div>
                  </div>
                </div>
              </StatusBar>

              <BalanceSection>
                <div className="label">Total Balance</div>
                <div className="amount">
                  ${currentBalance.toLocaleString()}.00
                </div>

                <ActionButtons>
                  <button className="primary">Send</button>
                  <button className="secondary">Receive</button>
                </ActionButtons>
              </BalanceSection>

              <AssetsSection>
                <div className="header">
                  <h3>Assets</h3>
                  <button>View All</button>
                </div>

                <TokenList>
                  {tokens.map((token, index) => (
                    <TokenItem key={index}>
                      <div className="token-info">
                        <div className="icon">{token.symbol.slice(0, 2)}</div>
                        <div className="details">
                          <div className="symbol">{token.symbol}</div>
                          <div className="change">{token.change}</div>
                        </div>
                      </div>
                      <div className="amount">{token.amount}</div>
                    </TokenItem>
                  ))}
                </TokenList>
              </AssetsSection>

              <ActivitySection>
                <div className="header">Recent Activity</div>
                <ActivityList>
                  {recentTransactions.map((tx, index) => (
                    <ActivityItem key={index}>
                      <div className="activity-info">
                        <div className="icon">
                          <div className="dot"></div>
                        </div>
                        <div className="details">
                          <div className="merchant">{tx.merchant}</div>
                          <div className="time">{tx.time} ago</div>
                        </div>
                      </div>
                      <div className="amount">
                        {tx.amount} {tx.currency}
                      </div>
                    </ActivityItem>
                  ))}
                </ActivityList>
              </ActivitySection>
            </PhoneScreen>
          </PhoneContainer>
        </PhoneMockupContainer>
      </ContentGrid>
    </HeroWrapper>
  );
}