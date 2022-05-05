import React from "react";
import useFetch from "../../hooks/useFetch";

import "./DailySummary.scss";

const DailySummary = () => {
  const { pricesUsd, pricesBtc, marketCap, medGasPrice, loading } = useFetch();

  return (
    <div className="daily-summary">
      <div className="summary">
        <div className="summary-box">
          <div className="summary-content">
            <figure className="summary-figure">
              <img
                src="https://etherscan.io/images/svg/brands/ethereum-1.svg"
                width="19"
              />
            </figure>
            <div className="summary-left-content">
              <h2 className="text-secondary">ETHER PRICE</h2>
              <a className="text-secondary-content" href="#">
                $ {pricesUsd}
              </a>
              <span className="text-secondary-content">@ {pricesBtc} BTC</span>
            </div>
          </div>
          <hr className="hr-summary" />
          <div className="summary-container">
            <figure className="summary-figure">
              <img
                src="https://etherscan.io/images/svg/icons/icon-8.svg?v=1.3"
                width="28"
              />
            </figure>
            <div className="summary-1-2-left-content">
              <h2 className="text-secondary">MARKET CAP</h2>
              <a className="text-secondary-content" href="/txns">
                {/* $ {Number(marketCap.slice(0, 12)).toLocaleString()} */}
                 {marketCap}
              </a>
            </div>
          </div>
        </div>

        <div className="v-hr-summary"></div>

        <div className="summary-box">
          <div className="summary-content-right">
            <figure className="summary-figure">
              <img
                src="https://etherscan.io/images/svg/icons/icon-2-1.svg?v=1.3"
                width="28"
              />
            </figure>
            <div className="summary-left-content">
              <h2 className="text-secondary">TRANSACTIONS</h2>
              <a
                className=""
                href="/txns"
              >
                $ 1,562.57 M
              </a>
              <span>(10.0 TPS)</span>
            </div>
            <div className="text-align">
              <h2 className="text-secondary">MED GAS PRICE</h2>
              <a className="text-secondary-content" href="/gastracker">
                {medGasPrice} 
                Gwei
              </a>
              <span>($3.91)</span>
            </div>
          </div>
          <hr className="hr-summary" />

          <div className="summary-container-right">
            <figure className="summary-figure">
              <img
                src="https://etherscan.io/images/svg/icons/icon-51.svg"
                width="28"
              />
            </figure>
            <div className="summary-left-content">
              <h2 className="text-secondary">DIFFICULTY</h2>
              <a className="text-secondary-content" href="/txns">
                13,382.89
              </a>
              <span>
                TH
              </span>
            </div>
            <div className="text-align-right">
              <h2 className="text-secondary">HASH RATE</h2>
              <a className="text-secondary-content" href="/gastracker">
                1,072,089.38
              </a>
              <span>
                GH/s
              </span>
            </div>
          </div>
        </div>

        <div className="v-hr-summary"></div>

        <div className="summary-history">
          <h2 className="text-secondary">
            ETHEREUM TRANSACTION HISTORY IN 14 DAYS
            <div className="position-relative">
              <a className="btn-anchor">
                <i className="fa fa-ellipsis-v p-l-30" aria-hidden="true"></i>
              </a>
            </div>
          </h2>
          <div className="transactions"></div>
        </div>
      </div>
    </div>
  );
};

export default DailySummary;
