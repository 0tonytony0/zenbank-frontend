import React from 'react'
import styled from 'styled-components'
import Container from '../ui/Container' 

function IntegrationComponents() {
  return (
    // <Container>
    //   <TextSection>
    //     {/* Image removed, only keep text or other content here if needed */}
    //   </TextSection>
    // </Container>
    <hr></hr>
  )
}

export default IntegrationComponents 

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 0;
`; 
