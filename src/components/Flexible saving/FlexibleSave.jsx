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
import FlexibleBanner from "./FlexibleBanner";



function FlexibleSave() {
    const Flexhead1 = "Reach your savings goals with compound interest"
    const Flexhead2 = "Earn up to 14% annual interest on digital assets"
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
            <FundamentalsComponent />
            <Simplify />
            <WealthGenerationComponent />
            <IntegrationsComponent />
            <FAQ />
            <AiEcosystem />
        </>
    );
}

export default FlexibleSave;
