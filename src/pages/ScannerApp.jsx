// import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";

// // Keyframe Animations
// const scanLineMove = keyframes`
//   0% { transform: translateY(-100%); opacity: 0; }
//   50% { opacity: 1; }
//   100% { transform: translateY(300px); opacity: 0; }
// `;

// const pulseGlow = keyframes`
//   0%, 100% { 
//     box-shadow: 0 0 20px rgba(0, 255, 127, 0.3), 
//                 inset 0 0 20px rgba(0, 255, 127, 0.1); 
//   }
//   50% { 
//     box-shadow: 0 0 40px rgba(0, 255, 127, 0.6), 
//                 inset 0 0 30px rgba(0, 255, 127, 0.2); 
//   }
// `;

// const cornerScan = keyframes`
//   0%, 100% { transform: scale(1); opacity: 1; }
//   50% { transform: scale(1.1); opacity: 0.7; }
// `;

// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideInRight = keyframes`
//   from { opacity: 0; transform: translateX(100%); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// const rotateIcon = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

// const ripple = keyframes`
//   0% { transform: scale(0); opacity: 1; }
//   100% { transform: scale(4); opacity: 0; }
// `;

// // Main Container
// const ScannerWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// //   background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
//   padding: 20px;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: 
//       radial-gradient(circle at 25% 25%, rgba(0, 255, 127, 0.1) 0%, transparent 50%),
//       radial-gradient(circle at 75% 75%, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
//   }
// `;

// // Phone Container
// const PhoneContainer = styled.div`
//   width: 350px;
//   height: 700px;
//   background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
//   backdrop-filter: blur(30px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 50px;
//   padding: 8px;
//   position: relative;
//   box-shadow: 
//     0 25px 50px rgba(0, 0, 0, 0.5),
//     inset 0 1px 0 rgba(255, 255, 255, 0.2);
//   z-index: 10;
// `;

// // Phone Screen
// const PhoneScreen = styled.div`
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(145deg, #1a1a2e, #16213e);
//   border-radius: 42px;
//   position: relative;
//   overflow: hidden;
//   padding: 20px;
// `;

// // Status Bar
// const StatusBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0 20px;
//   color: #ffffff;
//   font-size: 14px;
//   font-weight: 600;

//   .battery {
//     display: flex;
//     align-items: center;
//     gap: 4px;
    
//     .battery-icon {
//       width: 24px;
//       height: 12px;
//       border: 1px solid rgba(255, 255, 255, 0.6);
//       border-radius: 2px;
//       position: relative;
      
//       &::after {
//         content: '';
//         position: absolute;
//         right: -3px;
//         top: 3px;
//         width: 2px;
//         height: 6px;
//         background: rgba(255, 255, 255, 0.6);
//         border-radius: 0 1px 1px 0;
//       }
      
//       .fill {
//         width: 80%;
//         height: 8px;
//         background: #4ade80;
//         border-radius: 1px;
//         margin: 1px;
//       }
//     }
//   }
// `;

// // Header
// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 30px;
//   animation: ${fadeInUp} 0.8s ease-out;

//   h1 {
//     color: #ffffff;
//     font-size: 24px;
//     font-weight: 700;
//     margin-bottom: 8px;
//   }

//   p {
//     color: rgba(255, 255, 255, 0.6);
//     font-size: 14px;
//   }
// `;

// // Scanner Container
// const ScannerContainer = styled.div`
//   position: relative;
//   width: 280px;
//   height: 280px;
//   margin: 0 auto 30px;
//   background: rgba(0, 0, 0, 0.8);
//   border-radius: 20px;
//   overflow: hidden;
//   animation: ${pulseGlow} 2s ease-in-out infinite;
//   border: 2px solid rgba(0, 255, 127, 0.3);

//   &.scanning {
//     animation: ${pulseGlow} 1s ease-in-out infinite;
//   }
// `;

// // Grid Overlay
// const GridOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-image: 
//     linear-gradient(rgba(0, 255, 127, 0.2) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(0, 255, 127, 0.2) 1px, transparent 1px);
//   background-size: 20px 20px;
//   opacity: 0.3;
// `;

// // Corner Indicators
// const CornerIndicator = styled.div`
//   position: absolute;
//   width: 30px;
//   height: 30px;
//   border: 3px solid #00ff7f;
//   animation: ${cornerScan} 1.5s ease-in-out infinite;

//   &.top-left {
//     top: 10px;
//     left: 10px;
//     border-right: none;
//     border-bottom: none;
//     border-radius: 8px 0 0 0;
//   }

//   &.top-right {
//     top: 10px;
//     right: 10px;
//     border-left: none;
//     border-bottom: none;
//     border-radius: 0 8px 0 0;
//   }

//   &.bottom-left {
//     bottom: 10px;
//     left: 10px;
//     border-right: none;
//     border-top: none;
//     border-radius: 0 0 0 8px;
//   }

//   &.bottom-right {
//     bottom: 10px;
//     right: 10px;
//     border-left: none;
//     border-top: none;
//     border-radius: 0 0 8px 0;
//   }
// `;

// // Scan Line
// const ScanLine = styled.div`
//   position: absolute;
//   left: 0;
//   width: 100%;
//   height: 3px;
//   background: linear-gradient(90deg, 
//     transparent 0%, 
//     rgba(0, 255, 127, 0.8) 20%, 
//     rgba(0, 255, 127, 1) 50%, 
//     rgba(0, 255, 127, 0.8) 80%, 
//     transparent 100%
//   );
//   box-shadow: 0 0 10px rgba(0, 255, 127, 0.8);
//   animation: ${scanLineMove} 2s ease-in-out infinite;
// `;

// // Center Target
// const CenterTarget = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 60px;
//   height: 60px;
//   border: 2px solid rgba(0, 255, 127, 0.6);
//   border-radius: 50%;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 20px;
//     height: 20px;
//     border: 2px solid #00ff7f;
//     border-radius: 50%;
//     animation: ${ripple} 2s ease-out infinite;
//   }
// `;

// // App Display (when scanned)
// const AppDisplay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: linear-gradient(145deg, #1a1a2e, #16213e);
//   border-radius: 18px;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   animation: ${slideInRight} 0.8s ease-out;
//   border: 2px solid rgba(0, 255, 127, 0.5);

//   .app-icon {
//     width: 80px;
//     height: 80px;
//     background: linear-gradient(135deg, #667eea, #764ba2);
//     border-radius: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-size: 32px;
//     font-weight: bold;
//     margin-bottom: 20px;
//     box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
//     animation: ${rotateIcon} 0.6s ease-out;
//   }

//   .app-name {
//     color: #ffffff;
//     font-size: 20px;
//     font-weight: 700;
//     margin-bottom: 8px;
//   }

//   .app-description {
//     color: rgba(255, 255, 255, 0.7);
//     font-size: 14px;
//     text-align: center;
//     margin-bottom: 20px;
//     line-height: 1.4;
//   }

//   .download-btn {
//     background: linear-gradient(135deg, #00ff7f, #00e068);
//     color: #000000;
//     border: none;
//     padding: 12px 24px;
//     border-radius: 25px;
//     font-weight: 600;
//     font-size: 14px;
//     cursor: pointer;
//     transition: all 0.3s ease;
    
//     &:hover {
//       transform: translateY(-2px);
//       box-shadow: 0 8px 20px rgba(0, 255, 127, 0.4);
//     }
//   }
// `;

// // Controls
// const Controls = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const ControlButton = styled.button`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   border: 2px solid rgba(255, 255, 255, 0.2);
//   background: rgba(255, 255, 255, 0.1);
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   backdrop-filter: blur(10px);

//   &:hover {
//     border-color: #00ff7f;
//     background: rgba(0, 255, 127, 0.1);
//     transform: scale(1.05);
//   }

//   &.active {
//     border-color: #00ff7f;
//     background: rgba(0, 255, 127, 0.2);
//   }
// `;

// // Instructions
// const Instructions = styled.div`
//   text-align: center;
//   animation: ${fadeInUp} 1s ease-out 0.2s both;

//   .instruction-text {
//     color: rgba(255, 255, 255, 0.8);
//     font-size: 16px;
//     margin-bottom: 8px;
//   }

//   .hint-text {
//     color: rgba(255, 255, 255, 0.5);
//     font-size: 12px;
//   }
// `;

// // Icons
// const ScanIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6.5 9.5v3h-3v-3h3M13 13v6h6v-6h-6zM21 21H3v-2h18v2zM21 5H3V3h18v2z"/>
//   </svg>
// );

// const FlashIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M7 2v11h3v9l7-12h-4l3-8z"/>
//   </svg>
// );

// const GalleryIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l2.5-3.21L14 17H9zm3.5-4.51L14 15h5V5H5v10l2.5-2.51z"/>
//   </svg>
// );

// export default function ScannerApp() {
//   const [isScanning, setIsScanning] = useState(true);
//   const [showApp, setShowApp] = useState(false);
//   const [flashOn, setFlashOn] = useState(false);

//   // Simulate scanning and app detection
//   useEffect(() => {
//     if (isScanning) {
//       const timer = setTimeout(() => {
//         setShowApp(true);
//         setIsScanning(false);
//       }, 4000); // Show app after 4 seconds

//       return () => clearTimeout(timer);
//     }
//   }, [isScanning]);

//   const resetScanner = () => {
//     setShowApp(false);
//     setIsScanning(true);
//   };

//   const toggleFlash = () => {
//     setFlashOn(!flashOn);
//   };

//   return (
//     <ScannerWrapper>
//       <PhoneContainer>
//         <PhoneScreen>
//           <StatusBar>
//             <div>9:41</div>
//             <div className="battery">
//               <div className="battery-icon">
//                 <div className="fill"></div>
//               </div>
//             </div>
//           </StatusBar>

//           <Header>
//             <h1>QR Code Scanner</h1>
//             <p>Scan any QR code to get started</p>
//           </Header>

//           <ScannerContainer className={isScanning ? 'scanning' : ''}>
//             {!showApp ? (
//               <>
//                 <GridOverlay />
                
//                 <CornerIndicator className="top-left" />
//                 <CornerIndicator className="top-right" />
//                 <CornerIndicator className="bottom-left" />
//                 <CornerIndicator className="bottom-right" />
                
//                 {isScanning && <ScanLine />}
                
//                 <CenterTarget />
//               </>
//             ) : (
//               <AppDisplay>
//                 <div className="app-icon">AK</div>
//                 <div className="app-name">AI Key Pay</div>
//                 <div className="app-description">
//                   Smart crypto payment solution with AI-powered security and instant transactions
//                 </div>
//                 <button className="download-btn" onClick={resetScanner}>
//                   Open App
//                 </button>
//               </AppDisplay>
//             )}
//           </ScannerContainer>

//           <Controls>
//             <ControlButton className={flashOn ? 'active' : ''} onClick={toggleFlash}>
//               <FlashIcon />
//             </ControlButton>
            
//             <ControlButton>
//               <GalleryIcon />
//             </ControlButton>
            
//             <ControlButton onClick={resetScanner}>
//               <ScanIcon />
//             </ControlButton>
//           </Controls>

//           <Instructions>
//             {isScanning ? (
//               <>
//                 <div className="instruction-text">Position QR code in the center</div>
//                 <div className="hint-text">Keep your device steady for better scanning</div>
//               </>
//             ) : (
//               <>
//                 <div className="instruction-text">QR Code Detected!</div>
//                 <div className="hint-text">Tap the button above to continue</div>
//               </>
//             )}
//           </Instructions>
//         </PhoneScreen>
//       </PhoneContainer>
//     </ScannerWrapper>
//   );
// }

import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animation keyframes
const scanLine = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(200px);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
  }
`;

// Styled Components
const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
//   background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    // background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
    border-radius: 18px;
    z-index: -1;
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

const QRCodeWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background: white;
  padding: 12px;
  border-radius: 12px;
  animation: ${glow} 2s ease-in-out infinite;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const QRGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(21, 1fr);
  gap: 1px;
  background: #000;
`;

const QRPixel = styled.div`
  background: ${props => props.filled ? '#000' : '#fff'};
  border-radius: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3b82f6;
  }
`;

const ScanLineEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #3b82f6, transparent);
  animation: ${scanLine} 3s ease-in-out infinite;
  z-index: 10;
`;

const QRLabel = styled.p`
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: 0.8;
`;

const CornerSquare = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border: 2px solid #3b82f6;
  
  ${props => props.topLeft && css`
    top: -3px;
    left: -3px;
    border-right: none;
    border-bottom: none;
  `}
  
  ${props => props.topRight && css`
    top: -3px;
    right: -3px;
    border-left: none;
    border-bottom: none;
  `}
  
  ${props => props.bottomLeft && css`
    bottom: -3px;
    left: -3px;
    border-right: none;
    border-top: none;
  `}
  
  ${props => props.bottomRight && css`
    bottom: -3px;
    right: -3px;
    border-left: none;
    border-top: none;
  `}
`;

// QR Code pattern (simplified representation)
const qrPattern = [
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1],
  [0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0],
  [1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1],
  [0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0],
  [1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1],
  [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1]
];

const ScannerApp = () => {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <QRContainer>
      <QRCodeWrapper>
        <CornerSquare topLeft />
        <CornerSquare topRight />
        <CornerSquare bottomLeft />
        <CornerSquare bottomRight />
        
        <QRGrid>
          {qrPattern.flat().map((pixel, index) => (
            <QRPixel key={index} filled={pixel === 1} />
          ))}
        </QRGrid>
        
        {isScanning && <ScanLineEffect />}
      </QRCodeWrapper>
      
      <QRLabel>Scan to Connect</QRLabel>
    </QRContainer>
  );
};

export default ScannerApp;