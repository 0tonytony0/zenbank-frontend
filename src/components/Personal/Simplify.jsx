import React from "react";
import MidMobileImg from '../../assets/midMobile.png'
import './banner.css'
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsPlusSlashMinus } from "react-icons/bs";
import { CiBank } from "react-icons/ci";


function Simplify() {

    return (
        <>
            <section className="simplifyBox">
                <div className="mainSimBox">
                    <div className="headSimpBox">
                        <div className="simpHead">
                            <h2>Simplify your crypto taxes <br></br>with maximum precision.</h2>
                        </div>
                        <div className="simpTxt">
                            <p>Save time and stay compliant with automated tax reporting</p>
                        </div>
                    </div>

                    <div className="simLowerBox">
                        <div className="simpImg">
                            <img src={MidMobileImg} alt="" />
                        </div>
                        <div className="simpIconBox">
                            <div className="simpBoxPoints">
                                <h4><HiOutlineDocumentText className="fawallet" size={35}/>Import your Syzyky transaction history.</h4>
                            </div>
                            <div className="simpBoxPoints">
                                <h4> <BsPlusSlashMinus className="fawallet" size={35}/> Calculate capital gains, losses, and income.</h4>
                            </div>
                            <div className="simpBoxPoints">
                                <h4> <CiBank className="fawallet" size={35}/>Generate reports tailored to your local tax regulations.</h4>
                            </div>

                            <div className="lernBtn">
                                <button className="learnMoreBtn"><b>Learn More</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Simplify