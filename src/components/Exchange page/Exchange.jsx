// src/App.js
import React from "react";
import WealthGenerationComponent from "../sections/WealthGEneration";
import IntegrationsComponent from "../sections/IntegrationComponents";
import FAQ from "../sections/FrequienlyQuestion";
import Simplify from "../Personal/Simplify";
import AiEcosystem from "./AiEcoSection";
import FlexibleBanner from "../Flexible saving/FlexibleBanner";
import AccessSection from "./access";
import BuyAndSellSelection from "./BuyAndSell";
import ImpMarketdetails from "./ImpMarketData";
import WealthSolutions from "../sections/WealthSolutions";




function Exchangepage() {
    const Flexhead1 = "Hit your long-term targets."
    const Flexhead2 = "Earn up to 14% annual interest on digital assets"

    return (
        <>
            <FlexibleBanner
                Name={Flexhead1}
                LeftHead={Flexhead2}
            />
            <AccessSection/>
            <BuyAndSellSelection/> 
            <WealthSolutions />
            <ImpMarketdetails/>  
            <Simplify />  
            <WealthGenerationComponent />
            <AiEcosystem/>
            <IntegrationsComponent />
            <FAQ />
        </>
    );
}

export default Exchangepage;
