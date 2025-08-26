import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LuWalletMinimal } from 'react-icons/lu';
import { RiHandCoinLine } from 'react-icons/ri';
import { TbAntennaBars5 } from 'react-icons/tb';

// Styled Components
const BenefitBox = styled.section`
  padding: 3rem 1rem;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background || '#1a1a2e'};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxBenefits = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BenefitHead = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  margin: 0;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 1.75rem;
  }
`;

const MainParagraph = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  margin-top: 0.5rem;
  line-height: 1.5;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const BenefitsPoints = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitsCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text || '#ffffff'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 767px) {
    font-size: 1.125rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.primary || '#4facfe'};
  }
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight || '#a0a0c0'};
  line-height: 1.6;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 0.8125rem;
  }
`;

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

const cardVariants = {
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

const PersonalBenefits = ({
  Heading1,
  Paragraph1,
  Heading2,
  Paragraph2,
  Heading3,
  Paragraph3,
  Heading4,
  Paragraph4,
}) => {
  return (
    <BenefitBox>
      <BoxBenefits>
        <BenefitHead
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MainHeading>{Heading1}</MainHeading>
          <MainParagraph>{Paragraph1}</MainParagraph>
        </BenefitHead>
        <BenefitsPoints
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BenefitsCard variants={cardVariants}>
            <CardTitle>
              <RiHandCoinLine size={40} />
              {Heading2}
            </CardTitle>
            <CardDescription>{Paragraph2}</CardDescription>
          </BenefitsCard>
          <BenefitsCard variants={cardVariants}>
            <CardTitle>
              <LuWalletMinimal size={40} />
              {Heading3}
            </CardTitle>
            <CardDescription>{Paragraph3}</CardDescription>
          </BenefitsCard>
          <BenefitsCard variants={cardVariants}>
            <CardTitle>
              <TbAntennaBars5 size={40} />
              {Heading4}
            </CardTitle>
            <CardDescription>{Paragraph4}</CardDescription>
          </BenefitsCard>
        </BenefitsPoints>
      </BoxBenefits>
    </BenefitBox>
  );
};

export default PersonalBenefits;