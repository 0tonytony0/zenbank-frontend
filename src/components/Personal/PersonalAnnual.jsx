import React from "react"; 
import './banner.css' 
import CurrencyETH from '../../assets/currency-ethereum.svg.png'
import CurrencyNXO from '../../assets/currency-nexo-1.svg fill.png'
import CurrencyUSDT from '../../assets/currency-usdt-1.svg fill.png'
import CurrencyUSDC from '../../assets/currency-usdc-1.svg fill.png' 
import CurrencyUSD from '../../assets/currency-usd-flag.svg fill.png'
import CurrencyEUR from '../../assets/currency-eur-flag.svg fill.png'
import { MdPlayArrow } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const CurrencyBIT = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s";

const CurrencyGBPX = "https://www.pikpng.com/pngl/m/381-3816786_gbp-flag-icon-png-clipart.png";

const perAnnual = () => {
  return (
    <>
      {/* --------------Annual rate Section----------------- */}
      <hr />

      <div className="annualRateBox">
        <div className="boxAnnual">
          <h1>Annual rates that drive your long-term success.</h1>
          <span className="annualLinkTxt">Learn about Fixed-term Savings <MdPlayArrow className="arrowIcon" size={25} /></span>

          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyBIT} alt="" />
                <p>Up to <b><strong className="strongPer">6%</strong></b><br></br> on BTC</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyETH} alt="" />
                <p>Up to <b><strong className="strongPer">7%</strong></b><br></br> on ETH</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyNXO} alt="" />
                <p>Up to <b><strong className="strongPer">4%</strong></b><br></br> on Syzyky</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} /></div>
            </div>
          </div>
          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSDT} alt="" />
                <p>Up to <b><strong className="strongPer">13%</strong></b><br></br> on USDT</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSDC} alt="" />
                <p>Up to <b><strong className="strongPer">12%</strong></b><br></br> on USDC</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyGBPX} alt="" />
                <p>Up to <b><strong className="strongPer">9%</strong></b><br></br> on GBPx</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
          </div>
          <div className="bitcoinBox">
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyUSD} alt="" />
                <p>Up to <b><strong className="strongPer">9%</strong></b><br></br> on USDx</p>
              </div>
              <div className="innerBitcoin"><CiSquarePlus size={40} style={{ color: "black" }} /></div>
            </div>
            <div className="coinContent">
              <div className="innerBitcoin">
                <img src={CurrencyEUR} alt="" />
                <p>Up to <b><strong className="strongPer">9%</strong></b><br></br> on EURx</p>
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

export default perAnnual; 