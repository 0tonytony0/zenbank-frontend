import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Styled Components
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 3rem;
  }
`;

const TitleSection = styled(motion.div)`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 33.333%;
    margin-bottom: 0;
    padding-right: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  line-height: 1.3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const QuestionsSection = styled(motion.div)`
  width: 100%;

  @media (min-width: 768px) {
    width: 66.666%;
  }
`;

const QuestionItem = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  padding: 1.5rem 0;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  }
`;

const QuestionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const QuestionText = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary || '#4facfe'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

const AnswerWrapper = styled(motion.div)`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
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

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const answerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'How can I create an account on Zenbank?',
      answer:
        'To create an account on Zenbank, visit the official Zenbank website or download the mobile app, click on "Sign Up", provide your email address, create a secure password, complete the verification process by providing required documents for KYC, and finally set up your two-factor authentication for added security.',
    },
    {
      id: 2,
      question: 'How do I start earning interest?',
      answer:
        'To start earning interest, deposit your digital assets into your Zenbank account, choose your preferred interest earning method (either in-kind or in Zenbank tokens for higher rates), and your assets will automatically begin accruing interest according to the applicable rates. Interest is typically calculated daily and paid out regularly.',
    },
    {
      id: 3,
      question: 'What cryptocurrencies can I buy and hold on Zenbank?',
      answer:
        'On Zenbank, you can buy and hold major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and various stablecoins including USDT, USDC, and DAI. The platform also supports numerous altcoins and tokens, with the list of supported assets regularly expanding to include new and emerging cryptocurrencies.',
    },
    {
      id: 4,
      question: 'How can I open a Credit Line against my digital assets?',
      answer:
        'To open a Credit Line against your digital assets, deposit your crypto into your account as collateral, navigate to the Credit Line section, select the amount you wish to borrow within your available credit limit, choose your preferred currency for the loan, review and accept the terms, and the borrowed funds will be transferred to your account immediately.',
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <Container>
      <TitleSection variants={containerVariants} initial="hidden" animate="visible">
        <Title variants={itemVariants}>Frequently asked questions.</Title>
      </TitleSection>

      <QuestionsSection variants={containerVariants} initial="hidden" animate="visible">
        {faqData.map((faq) => (
          <QuestionItem key={faq.id} variants={itemVariants}>
            <QuestionButton onClick={() => toggleQuestion(faq.id)}>
              <QuestionText>{faq.question}</QuestionText>
              <IconWrapper>
                {openQuestion === faq.id ? <ChevronUp /> : <ChevronDown />}
              </IconWrapper>
            </QuestionButton>

            <AnimatePresence>
              {openQuestion === faq.id && (
                <AnswerWrapper
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p>{faq.answer}</p>
                </AnswerWrapper>
              )}
            </AnimatePresence>
          </QuestionItem>
        ))}
      </QuestionsSection>
    </Container>
  );
}
