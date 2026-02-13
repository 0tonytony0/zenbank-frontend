import React from "react";
import styled from "styled-components";
import Container from "../ui/Container";

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 24px 16px;
  border-radius: 12px;
  gap: 24px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const DataBox = styled.div`
  flex: 1;
  max-width: 450px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.border}
  );
  border: 1px solid white;
  border-radius: 15px;
  padding: 24px 12px;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%; /* full width on mobile */
    max-width: none; /* remove restriction */
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 750;
  font-size: 1.25rem;
  margin-top: 4px;
`;

const Paragraph = () => (
  <Container>
    <Row>
      <DataBox>
        <Label>Operating since</Label>
        <Highlight>2015</Highlight>
      </DataBox>
      <DataBox>
        <Label>Personalized</Label>
        <Highlight>Client Care 24x7</Highlight>
      </DataBox>
      <DataBox>
        <Label>Assets Under Management</Label>
        <Highlight>$11+billion</Highlight>
      </DataBox>
    </Row>
  </Container>
);

export default Paragraph;
