import { useEffect, useState } from "react";
import axios from "axios";

const apikey = "BD65U2BATMM37DBNHHUD8BVUKPPYSTP55P";
const endpoint = "https://api-rinkeby.etherscan.io/api";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFetch = async () => {
    const pricesUsd = await axios.get(
      `${endpoint}?module=stats&action=ethprice&apikey=${apikey}`
    );
    const pricesBtc = await axios.get(
      `${endpoint}?module=stats&action=ethprice&apikey=${apikey}`
    );

    const marketCap = await axios.get(
      `${endpoint}?module=stats&action=ethsupply&apikey=${apikey}`
    );

    const medGasPrice = await axios.get(
      `${endpoint} ?module=gastracker&action=gasoracle&apikey=${apikey}`
    );

    const latestBlocks = await axios.get(
      `${endpoint}?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&sort=asc&&apikey=${apikey}`
    );

    const resp = await Promise.all([
      pricesUsd,
      pricesBtc,
      marketCap,
      medGasPrice,
      latestBlocks,
    ]);

    setData({
      pricesUsd: resp[0].data.result.ethusd,
      pricesBtc: resp[1].data.result.ethbtc,
      marketCap: resp[2].data.result,
      medGasPrice: resp[3].data.result,
      latestBlocks: resp[4].data.result,
    });

    setLoading(false);
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    ...data,
    loading,
  };
};

export default useFetch;
