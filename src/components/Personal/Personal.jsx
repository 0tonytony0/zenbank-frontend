// src/App.js
import React from "react";
import WealthSolutions from "../sections/WealthSolutions";
import FundamentalsComponent from "../sections/Fundamentals";
import WealthGenerationComponent from "../sections/WealthGEneration";
import IntegrationsComponent from "../sections/IntegrationComponents";
import FAQ from "../sections/FrequienlyQuestion";
import Banner from "./Banner";
import EstimateEarning from "./EstimateEarning";
import Simplify from "./Simplify";
import AiEcosystem from "./AiEcosystem";
import PersonalBenefits from "./PersonalBenefits";
import PerAnnual from "./PersonalAnnual";


function Personal() {
  const BenefitsHeading1 = "The benefits of Flexible Savings."
  const BenefitsParagraph1 = "Join the Zenbank Loyalty Program and benefit from industry-leading rates with an account balance above $5,000."
  const BenefitsHeading2 = "Daily compounding"
  const BenefitsParagraph2 = "Your personal USD, EUR, and GBP accounts on Zenbank help you prevent blocked or delayed transactions that banks can impose on third-party transfers. Adding funds is fee-free for EUR and GBP transfers, and USD amounts over $5,000."
  const BenefitsHeading3 = "Funds available anytime"
  const BenefitsParagraph3 = "Your funds are earning interest while remaining available for investing or trading."
  const BenefitsHeading4 = "Generating interest for over 6 years"
  const BenefitsParagraph4 = "Zenbank clients have enjoyed consistent interest-generation since 2019, no matter the market conditions."
  return (
    <>
      <Banner Name="Personal" />
      <PersonalBenefits
        Heading1={BenefitsHeading1}
        Paragraph1={BenefitsParagraph1}
        Heading2={BenefitsHeading2}
        Paragraph2={BenefitsParagraph2}
        Heading3={BenefitsHeading3}
        Paragraph3={BenefitsParagraph3}
        Heading4={BenefitsHeading4}
        Paragraph4={BenefitsParagraph4}
      />
      <PerAnnual />
      <WealthSolutions />
      <EstimateEarning />
      <FundamentalsComponent />
      <Simplify />
      <WealthGenerationComponent />
      <IntegrationsComponent />
      <FAQ />
      <AiEcosystem />
    </>
  );
}

export default Personal;
