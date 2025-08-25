import { div } from "framer-motion/client";
import React from "react";
import './banner.css'
import { LuWalletMinimal } from "react-icons/lu";
import { RiHandCoinLine } from "react-icons/ri";
import { TbAntennaBars5 } from "react-icons/tb";
import './PersonalBenifits.css'

const personalBenefits = (props) => {
    return (
        <>
            <div className="benefitBox">
                <div className="boxBenefits">
                    <div className="benefithead">
                        <h1 style={{ color: "white" }}>{props.Heading1}</h1>
                        <p>{props.Paragraph1}</p>
                    </div>

                    <div className="benefitsPoints"
                        style={{
                            background: "linear-gradient(135deg, #FFFFFF1A 0%, #FFFFFF0D 100%)",
                            color: "white",
                        }}
                    >

                        <div className="benefitsCard">
                            <h3 style={{ color: "white" }}><RiHandCoinLine className="fawallet" size={40} />{props.Heading2}</h3>
                            <p style={{ color: "white" }}>{props.Paragraph2}</p>
                        </div>

                        <div className="benefitsCard">
                            <h3><LuWalletMinimal className="fawallet" size={40} />{props.Heading3}</h3>
                            <p style={{ color: "white" }}>{props.Paragraph3}</p>
                        </div>

                        <div className="benefitsCard">
                            <h3><TbAntennaBars5 className="fawallet " size={40} />{props.Heading4}</h3>
                            <p style={{ color: "white" }}>{props.Paragraph4}</p>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}

export default personalBenefits; 