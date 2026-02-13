// src/App.js
import React from "react";
import FundamentalsComponent from "../sections/Fundamentals";
import WealthGenerationComponent from "../sections/WealthGeneration";
import IntegrationsComponent from "../sections/IntegrationComponents";
import FAQ from "../sections/FrequienlyQuestion";
import AiEcosystem from "../Personal/AiEcosystem";
import CardBanner from "./CardBanner";
import DebitModeSection from "./DebitMode";
import InterestBanner from "./InterestBanner";
import CardSimplify from "./CardSimplify";
import ActivateCardSection from "./FourBoxSec";


function CardPage() {
  return (
    <>
      <CardBanner/>
      <DebitModeSection/>
      <InterestBanner/>
      <FundamentalsComponent />
      <WealthGenerationComponent />
      <CardSimplify/>
      <ActivateCardSection/>
      <IntegrationsComponent />
      <FAQ />
      <AiEcosystem />
    </>
  );
}

export default CardPage;
