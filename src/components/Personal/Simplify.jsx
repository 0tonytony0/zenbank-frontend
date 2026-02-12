import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { BsPlusSlashMinus } from 'react-icons/bs';
import { CiBank } from 'react-icons/ci';
import MidMobileImg from '../../assets/midMobile.png';

// Styled Components
const SimplifyBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const MainSimBox = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

const HeadSimpBox = styled(motion.div)`
  text-align: center;
  max-width: 800px;
`;

const SimpHead = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SimpTxt = styled.div`
  font-size: 1.125rem;
color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SimLowerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const SimpImg = styled(motion.div)`
  max-width: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      max-width: 80%;
    }

    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

const SimpIconBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  width: 100%;
`;

const SimpBoxPoints = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text || '#e6f0ff'};
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 0.8rem;
  }

  svg {
color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

const LernBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const LearnMoreBtn = styled.button`
background: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }
`;

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
};

const iconBoxVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
  }),
};

function Simplify() {
  const features = [
    {
      icon: <HiOutlineDocumentText size={35} />,
      text: 'Import your Zenbank transaction history.',
    },
    {
      icon: <BsPlusSlashMinus size={35} />,
      text: 'Calculate capital gains, losses, and income.',
    },
    {
      icon: <CiBank size={35} />,
      text: 'Generate reports tailored to your local tax regulations.',
    },
  ];

  return (
    <SimplifyBox>
      <MainSimBox>
        <HeadSimpBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <SimpHead>
            <Title>
              Simplify your crypto taxes <br />
              with maximum precision.
            </Title>
          </SimpHead>
          <SimpTxt>
            <p>Save time and stay compliant with automated tax reporting</p>
          </SimpTxt>
        </HeadSimpBox>

        <SimLowerBox>
          <SimpImg
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img src={MidMobileImg} alt="Crypto Tax Illustration" />
          </SimpImg>
          <SimpIconBox>
            {features.map((item, index) => (
              <SimpBoxPoints
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconBoxVariants}
              >
                {item.icon}
                <span>{item.text}</span>
              </SimpBoxPoints>
            ))}
            <LernBtn
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <LearnMoreBtn>
                <b>Learn More</b>
              </LearnMoreBtn>
            </LernBtn>
          </SimpIconBox>
        </SimLowerBox>
      </MainSimBox>
    </SimplifyBox>
  );
}

export default Simplify;
