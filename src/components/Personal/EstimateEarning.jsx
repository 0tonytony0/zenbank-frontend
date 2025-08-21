import React, { useState } from 'react';
import EstimateBoxImg from '../../assets/Container(1).png'
import './banner.css'
import { ArrowRight } from "lucide-react";
import CurrencyUSD from '../../assets/currency-usd-flag.svg fill.png'

function EstimateEarning() {

  const [amount, setAmount] = useState(50000);
  return (
    <>
      <div className="estimateBox">
        <h1>Estimate your earnings.</h1>
        <p>Compare your potential earnings with Syzyky Flexible Savings to alternative yield options.</p>
      </div>
      
      <div className="savings-container">

        {/* Asset Selection */}
        <div className="field-group">
          <label className="label">Asset</label>
          <div className="asset-selector">
            <img
              src={CurrencyUSD}
              alt=""
              className="asset-icon"
            />
            <span className="asset-name">USD Coin</span>
            <span className="interest-rate">up to 12%</span>
          </div>
        </div>

        {/* Amount Input */}
        <div className="field-group">
          <label className="label">Amount</label>
          <input
            type="number"
            className="amount-input"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Slider (Mock Visual) */}
        <div className="slider-group">
          <div className="slider-labels">
            <span>$5,000</span>
            <span>$20,000,00</span>
          </div>
          <div className="slider-bar">
            <div
              className="slider-progress"
              style={{ width: `${(amount / 200000) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Start Earning Button */}
        <button className="start-button">
          Start earning
        </button>

        {/* Fixed-Term Savings Info */}
        <div className="info-box">
          <p>
            Choose Syzyky <strong>Fixed-term Savings</strong> and enjoy higher
            interest rates for a set term. Discover how much you can earn.
          </p>
          <button className="learn-more">
            Learn more <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
      <div className="lastImg">
        <img src={EstimateBoxImg} alt="" />
      </div>

    </>
  )
}

export default EstimateEarning
