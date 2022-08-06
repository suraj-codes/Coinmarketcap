import { useContext, useEffect, useState, useCallback } from "react";
import btc from "../../assets/btc.png";
import { CoinMarketContext } from "../../context/context";
import CMCtableHeader from "./cmcTableHeader";
import CMCtableRow from "./cmcTableRow";

const CMCtable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext);
  let [coinData, setCoinData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins();
      let filteredResponse = [];

      for (let i = 0; i < apiResponse?.length; i++) {
        const element = apiResponse[i];
        // if (element.cmc_rank <= 10)
        filteredResponse.push(element);
      }

      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getTopTenCoins]);

  return (
    <div className="text-white font-bold px-20">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full">
          <CMCtableHeader />

          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCtableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  coinID={coin.id}
                  showBuy={true}
                  hRate={coin.quote.INR.percent_change_24h}
                  dRate={coin.quote.INR.percent_change_7d}
                  hRateIsIncrement={true}
                  price={coin.quote.INR.price}
                  marketCapValue={coin.quote.INR.market_cap}
                  volumeCryptoValue={coin.quote.INR.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default CMCtable;
