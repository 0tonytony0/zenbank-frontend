// import React from "react";
// import styled from "styled-components";
// import Container from "../ui/Container";

// const Row = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background: #f7f7f7;
//     padding: 24px 16px;
//     border-radius: 12px;
//     gap: 24px;
//     width: 100%;
//     @media (max-width: 600px) {
//         flex-direction: column;
//         gap: 12px;
//         text-align: center;
//     }
// `;

// const DataBox = styled.div`
//     flex: 1;
//     max-width: 450px;
//     background: linear-gradient(
//     135deg,
//     rgba(255, 255, 255, 0.1) 0%,
//     rgba(255, 255, 255, 0.05) 100%
//   );

//     border-radius: 8px;
//     padding: 24px 12px;
//     // box-shadow: 0 2px 8px rgba(0,0,0,0.04);
//     font-size: 1.1rem;
//     font-weight: 500;
//     color: #222;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// const Label = styled.span`
//     color: #FFFFFF;
//     font-weight: 500;
//     font-size: 1rem;
// `;

// const Highlight = styled.span`
//     color: #0078d4;
//     font-weight: 700;
//     font-size: 1.2rem;
//     margin-top: 4px;
// `;

// const Paragraph = () => (
//     <Container>
//     <Row>
//         <DataBox>
//             <Label>Operating since</Label>
//             <Highlight>2015</Highlight>
//         </DataBox>
//         <DataBox>
//             <Label>Personalized </Label>
//             <Highlight>Client Care 24x7</Highlight>
//         </DataBox>
//         <DataBox>
//             <Label>Assets Under Management</Label>
//             <Highlight>$11+billion</Highlight>
//         </DataBox>
//     </Row>
//     </Container>
// );

// export default Paragraph;



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
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border-radius: 8px;
  padding: 24px 12px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;       /* full width on mobile */
    max-width: none;   /* remove restriction */
  }
`;

const Label = styled.span`
  color: #ffffff;
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
