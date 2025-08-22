// src/App.js
import React from "react";
import FundamentalsComponent from "../sections/Fundamentals";
import WealthGenerationComponent from "../sections/WealthGEneration";
import IntegrationsComponent from "../sections/IntegrationComponents";
import FAQ from "../sections/FrequienlyQuestion";
import Simplify from "../Personal/Simplify";
import AiEcosystem from "../Personal/AiEcosystem";
import PersonalBenefits from "../Personal/PersonalBenefits";
import PerAnnual from "../Personal/PersonalAnnual";
import FlexibleBanner from "../Flexible saving/FlexibleBanner";



function Flexibleterms() {
    const Flexhead1 = "Hit your long-term targets."
    const Flexhead2 = "Earn up to 14% annual interest on digital assets"
    const BenefitsHeading1 = "Savings that support your goals."
    const BenefitsParagraph1 = "Join the Syzyky Loyalty Program and benefit from industry-leading rates with an account balance above $5,000."
    const BenefitsHeading2 = "Earn even higher rates"
    const BenefitsParagraph2 = "Earn extra yield on top of our Flexible Savings rates with 1, 3, or 12-month terms."
    const BenefitsHeading3 = " Preserve wealth over time "
    const BenefitsParagraph3 = "Maintain the long-term value of your assets with steady and compounding returns."
    const BenefitsHeading4 = "Grow your portfolio on autopilot"
    const BenefitsParagraph4 = "Auto-renew your term with zero effort and enjoy uninterrupted growth."

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
            <FundamentalsComponent />
            <WealthGenerationComponent />
            <PerAnnual />
            <Simplify />
            <IntegrationsComponent />
            <FAQ />
            <AiEcosystem />
        </>
    );
}

export default Flexibleterms;
