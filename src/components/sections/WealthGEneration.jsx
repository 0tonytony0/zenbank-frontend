import React from 'react';
import styled from 'styled-components'; 
import WealthGenImg from '../../assets/WealthGenImg.jpg'; // Replace with actual path to your wealth generation image

// Styled Components
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  background-image: url(${WealthGenImg}); // Replace with actual image URL
  background-size: cover;
  background-position: center;
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.5); // Dark overlay for contrast
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
`;

const TextSection = styled.div`
  flex: 1;
  padding: 0 40px;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 20px;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 400px;
`;

const SignInButton = styled.button`
  background: linear-gradient(135deg, #4facfe 0%, #8e2de2 100%); // Blue → Violet Gradient
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 12px rgba(142, 45, 226, 0.6); // Glow effect
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 18px rgba(142, 45, 226, 0.9);
  }
`;


// const PhoneMockup = styled.div`

// //   height: 600px;
//   background-image: url(${PhoneMockupImg});
//     background-size: cover;
//   background-position: center;

// `;



// React Component
const WealthGenerationComponent = () => {
return (
    <Container>
        <Overlay />
        <TextSection>
            <Title>Driving the next generation of wealth.</Title>
            <Subtitle>
                Syzyky is built for pioneers ready to leverage blockchain technology for wealth generation. Create your account today and get started.
            </Subtitle>
            <SignInButton>
                Sign in <span>→</span>
            </SignInButton>
        </TextSection>
        {/* <PhoneMockup /> */}


    </Container>
);
};

export default WealthGenerationComponent;