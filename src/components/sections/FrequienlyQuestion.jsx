import { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TitleSection = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    width: 33.333%;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;a
  color: white;
  @media (max-width: 768px) {
  font-size: 1.5rem;
  }
`;

const QuestionsSection = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 66.666%;
  }
`;

const QuestionItem = styled.div`
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem 0;
`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const QuestionText = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: white;
`;

const IconWrapper = styled.div`
  color: white;
`;

const AnswerWrapper = styled.div`
  margin-top: 1rem;
  color: white;
`;

// SVG Icons
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How can I create an account on Syzyky?",
      answer: "To create an account on Syzyky, visit the official Syzyky website or download the mobile app, click on 'Sign Up', provide your email address, create a secure password, complete the verification process by providing required documents for KYC, and finally set up your two-factor authentication for added security."
    },
    {
      id: 2,
      question: "How do I start earning interest?",
      answer: "To start earning interest, deposit your digital assets into your Syzyky account, choose your preferred interest earning method (either in-kind or in Ai Key tokens for higher rates), and your assets will automatically begin accruing interest according to the applicable rates. Interest is typically calculated daily and paid out regularly."
    },
    {
      id: 3,
      question: "What cryptocurrencies can I buy and hold on Syzyky?",
      answer: "On Syzyky, you can buy and hold major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and various stablecoins including USDT, USDC, and DAI. The platform also supports numerous altcoins and tokens, with the list of supported assets regularly expanding to include new and emerging cryptocurrencies."
    },
    {
      id: 4,
      question: "How can I open a Credit Line against my digital assets?",
      answer: "To open a Credit Line against your digital assets, deposit your crypto into your account as collateral, navigate to the Credit Line section, select the amount you wish to borrow within your available credit limit, choose your preferred currency for the loan, review and accept the terms, and the borrowed funds will be transferred to your account immediately."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <Container>
      <TitleSection>
        <Title>Frequently asked questions.</Title>
      </TitleSection>
      
      <QuestionsSection>
        {faqData.map((faq) => (
          <QuestionItem key={faq.id}>
            <QuestionButton onClick={() => toggleQuestion(faq.id)}>
              <QuestionText>{faq.question}</QuestionText>
              <IconWrapper>
                {openQuestion === faq.id ? <ChevronUp /> : <ChevronDown />}
              </IconWrapper>
            </QuestionButton>
            
            {openQuestion === faq.id && (
              <AnswerWrapper>
                <p>{faq.answer}</p>
              </AnswerWrapper>
            )}
          </QuestionItem>
        ))}
      </QuestionsSection>
    </Container>
  );
}