// src/App.js
import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import AppFeatures from "./AppFeatures";
import HowItWorks from "./HowItWorks";
import Paragraph from "./Paragraph";
import FundingComponent from "./FundingCompmonent";
import WealthSolutions from "./WealthSolutions";
import WhoItsFor from "./WhoItsFor";
import FundamentalsComponent from "./Fundamentals";
import WealthGenerationComponent from "./WealthGeneration";
// import IntegrationsComponent from "./IntegrationComponents";
import FAQ from "./FrequienlyQuestion";


function HomeMenu() {

        // const token =localStorage.setItem(token);
        // console.log('token :>> ', token);
        // <getToken />

    return (
<>          <Hero />
            <Paragraph />
            <FundingComponent />
            <Features />
            <WealthSolutions />
            <WhoItsFor />
            <HowItWorks />
            <Benefits />
            <AppFeatures />
            <FundamentalsComponent />
            <WealthGenerationComponent />
            {/* <IntegrationsComponent /> */}
            <FAQ />
</> 
    );
}

export default HomeMenu;
