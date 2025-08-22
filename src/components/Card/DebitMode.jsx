import React from "react";
import styled from "styled-components";
import phoneImage from "../../assets/MidMobile11.jpg";
import peopleImg from "../../assets/People2.png"; // use your uploaded image path


const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );

    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
      text-align: center;
    }
  `;

const TextSection = styled.div`
    flex: 1;
  `;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: white;
    line-height: 1.3;
    margin: 0px 0px 0px 30px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `;

// const Highlight = styled.span`
//     color: #0a0a0a;
//   `;

const ContainerCard = styled.div`
    flex: 1;
    padding: 30px;
    border-radius: 16px;
    text-align: left;
    max-width: 550px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  `;

const Description = styled.p`
    font-size: 19px;
    font-weight: 400;
    color: white;
    margin: 0;
  `;

// ----------------------------------------------------------------------------jdsjg?

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 80px 60px;
    text-align: left;
    justify-content: space-between;
  }
`;
const TextBox1 = styled.div`
  flex: 1;
  max-width: 600px;  
  margin-bottom: 30px;
  background: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.89)),
    url(${phoneImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 20px;
  color: white;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`; const TextBox2 = styled.div`
  flex: 1;
  max-width: 600px;  
  margin-bottom: 30px;
  background: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.89)),
    url(${peopleImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 20px;
  color: white;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;


const Highlight2 = styled.p`
  margin-top: 150px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const Title2 = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

// const PhoneBox = styled.div`
 
// `;

const DebitModeSection = () => {
  return (
    <>
      <HeaderWrapper>
        <TextSection>
          <Title>
            Switch between Debit and Credit <br/>with a single tap.
          </Title>
        </TextSection>

        <ContainerCard>
          <Description>
            Activate your virtual card and start spending right away. Join our <b>Loyalty Program</b> and unlock a sleek physical card, crypto cashback on
          </Description>
          <Description>
            purchases, and lower borrow rates with an account balance above $5,000.
          </Description>
        </ContainerCard>
      </HeaderWrapper>


      <Section>

        <TextBox1>
          <Highlight2>Debit Mode</Highlight2>
          <Title2>Spend and grow your savings.</Title2>
        </TextBox1>
        <TextBox2>
          <Highlight2>Credit Mode</Highlight2>
          <Title2>Spend without selling your crypto.</Title2>
        </TextBox2>

      </Section>
    </>

  );
};

export default DebitModeSection;
