import React from 'react'
import styled from 'styled-components'
// import IntegrationImg from '../../assets/IntegrationImg.png'
import Container from '../ui/Container'

function IntegrationComponents() {
  return (
    <Container> <TextSection>
    {/* <BannerImg src={IntegrationImg} alt="Banner" /> */}

</TextSection>
</Container>
  )
}

export default IntegrationComponents

// Add this styled component
const BannerImg = styled.img`
    width: 100%;
    padding:8px;
    margin-bottom: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(44, 62, 80, 0.10);
`;

const TextSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0;
`;

 
// In your component:

