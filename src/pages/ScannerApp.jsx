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