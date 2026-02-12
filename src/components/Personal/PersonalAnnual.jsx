import React from "react"; 
import './banner.css' 
import { MdPlayArrow } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import CurrencyNXO from "../../assets/icon1.png";

// ✅ All images via URL (not local assets)
const CurrencyUSDT = "https://cdn-icons-png.flaticon.com/128/14446/14446252.png";
const CurrencyUSDC = "https://cdn-icons-png.flaticon.com/128/14446/14446284.png";
const CurrencyUSD = "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
const CurrencyEUR = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
const CurrencyETH = "https://files.coinswitch.co/public/coins/eth.png";
const CurrencyBIT = "https://cdn-icons-png.flaticon.com/128/9732/9732708.png";
const CurrencyGBPX = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

const PerAnnual = () => {
  return (
    <>
      {/* --------------Annual rate Section----------------- */}
      <hr />
      <div className="annualRateBox">
        <div className="boxAnnual">
          <h1 style={{ color: "white" }}>
            Annual rates that drive your long-term success.
          </h1>
          <span className="annualLinkTxt">
            Learn about Fixed-term Savings <MdPlayArrow className="arrowIcon" size={25} />
          </span>

          {/* BTC / ETH / NXO */}
          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyBIT} alt="BTC" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">6%</strong></b><br /> on BTC
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyETH} alt="ETH" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">7%</strong></b><br /> on ETH
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyNXO} alt="NEXO" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">4%</strong></b><br /> on Zenbank
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} /></div>
            </div>
          </div>

          {/* USDT / USDC / GBPX */}
          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSDT} alt="USDT" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">13%</strong></b><br /> on USDT
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSDC} alt="USDC" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">12%</strong></b><br /> on USDC
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyGBPX} alt="GBPx" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">9%</strong></b><br /> on GBPx
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
          </div>

          {/* USD / EUR */}
          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSD} alt="USD" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">9%</strong></b><br /> on USDx
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyEUR} alt="EUR" style={{ height: "45px", width: "45px" }} />
                <p>
                  Up to <b><strong className="strongPer">9%</strong></b><br /> on EURx
                </p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>

            <div className="coinContent seeMorebtn">
              <div className="innerBitcoin">
                <p><strong className="strongPer">See More</strong></p>
              </div>
              <div className="innerBitcoin"><FaAngleDown size={40} style={{ color: "black" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerAnnual;
