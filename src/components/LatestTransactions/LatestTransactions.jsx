import React from "react";
import "./LatestTransactions.scss";

const LatestTransactions = () => {
  return (
    <div className="latestTransactions">
      <div className="transactions">
        <div className="transactions-container">
          <div className="transactions-title-container">
            <h2 className="transactions-text">Latest Transactions</h2>
          </div>
          <div className="transactions-content">
            <div className="transactions-row">
              <div className="transactions-row-left">
                <span className="transactions-row-icon">Tx</span>
                <div>
                  <a className="transactions-a" href="#">
                    0x0b9x...
                  </a>
                  <span className="countdown">1 min ago</span>
                </div>
              </div>
              <div className="transactions-row-right">
                <div className="transactions-row-right-sub">
                  <div className="transactions-row-content">
                    <span className="">
                      From:
                      <a className="transactions-a p-l-3" href="#">
                        0x13cdee16ef2cfee99cb...
                      </a>
                    </span>
                    <span className="transactions-span">
                      to:
                      <a
                        className="transactions-a p-l-3"
                        title="Transactions in this Block"
                        href="#"
                      >
                        0x8b3192f5eebd85...
                      </a>
                    </span>
                  </div>
                  <div className="transactions-row-reward">
                    <span
                      className="transactions-row-reward-content"
                      title="Transactions Reward"
                    >
                      2<b>.</b>
                      439Eth
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr-space" />
          </div>
          <div className="transactions-footer-btn">
            <a className="btn-link">View all transactions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTransactions;
