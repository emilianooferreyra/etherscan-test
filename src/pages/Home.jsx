import React from "react";

import FilterEth from "../components/FilterEth/FilterEth";
import DailySummary from "../components/DailySummary/DailySummary";
import LatestBlocks from "../components/LatestBlocks/LatestBlocks";
import LatestTransactions from "../components/LatestTransactions/LatestTransactions";

import "./Home.scss";

const Home = () => {
  return (
    <section className="bg-dark">
      <FilterEth />
      <DailySummary />
      <div className="content-wrapper">
        <div className="content-blocks">
          <LatestBlocks />
        </div>
        <div className="content-transactions">
          <LatestTransactions />
        </div>
      </div>
    </section>
  );
};

export default Home;
