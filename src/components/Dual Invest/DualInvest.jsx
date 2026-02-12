// src/App.js
import React from "react";
import FundamentalsComponent from "../sections/Fundamentals";
import WealthGenerationComponent from "../sections/WealthGEneration";
import IntegrationsComponent from "../sections/IntegrationComponents";
import FAQ from "../sections/FrequienlyQuestion";
import Simplify from ".././Personal/Simplify";
import AiEcosystem from ".././Personal/AiEcosystem";
import PersonalBenefits from ".././Personal/PersonalBenefits";
import PerAnnual from ".././Personal/PersonalAnnual";
import FlexibleBanner from "../Flexible saving/FlexibleBanner";
import WealthSolutions from "../sections/WealthSolutions";



function DualInvest() {
    const Flexhead1 = "Generate strong returns with every move."
    const Flexhead2 = "Buy low and sell high while earning high yields with Dual Investment."
    const BenefitsHeading1 = "The benefits of Flexible Savings."
    const BenefitsParagraph1 =
      "Join the Zenbank Loyalty Program and benefit from industry-leading rates with an account balance above $5,000.";
    const BenefitsHeading2 = "Capture high yields"
    const BenefitsParagraph2 = "Earn up to triple-digit interest rates depending on the strategy."
    const BenefitsHeading3 = "Fixed earnings"
    const BenefitsParagraph3 = "Lock in rates that won't change regardless of the market direction."
    const BenefitsHeading4 = "Automated strategy"
    const BenefitsParagraph4 = "Buy low and sell high major cryptocurrencies automatically."

    return (
        <>
            <FlexibleBanner
                Name={Flexhead1}
                LeftHead={Flexhead2}
            />
            <PersonalBenefits
                Heading1={BenefitsHeading1}
                Paragraph1={BenefitsParagraph1}
                Heading2={BenefitsHeading2}
                Paragraph2={BenefitsParagraph2}
                Heading3={BenefitsHeading3}
                Paragraph3={BenefitsParagraph3}
                Heading4={BenefitsHeading4}
                Paragraph4={BenefitsParagraph4} />
            <PerAnnual />
            <WealthSolutions />
            <FundamentalsComponent />
            <Simplify />
            <WealthGenerationComponent />
            <IntegrationsComponent />
            <FAQ />
            <AiEcosystem />
        </>
    );
}

export default DualInvest;
