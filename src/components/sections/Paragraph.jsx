import React from "react";
import styled from "styled-components";
import Container from "../ui/Container";

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #f7f7f7;
    padding: 24px 16px;
    border-radius: 12px;
    gap: 24px;
    width: 100%;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 12px;
        text-align: center;
    }
`;

const DataBox = styled.div`
    flex: 1;
    max-width: 450px;
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.2) 0%,
      rgba(142, 68, 173, 0.2) 100%
    ),
    border-radius: 8px;
    padding: 24px 12px;
    // box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    font-size: 1.1rem;
    font-weight: 500;
    color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.span`
    color: #555;
    font-weight: 500;
    font-size: 1rem;
`;

const Highlight = styled.span`
    color: #0078d4;
    font-weight: 700;
    font-size: 1.2rem;
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
            <Label>Personalized </Label>
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