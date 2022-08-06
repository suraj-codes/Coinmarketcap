import { useContext } from "react";
import Image from "next/image";

import { CoinMarketContext } from "../context/context";

const styles = {
  coinNameRow: "flex items-center",
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
};

const CoinNameRow = ({ name, id, clicked }) => {
  const { openModal } = useContext(CoinMarketContext);

  return (
    <div className={styles.coinNameRow}>
      <div className="mr-3 flex" onClick={clicked}>
        <div className="mr-2">
          <Image
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
            className="rounded-full"
            width={20}
            height={20}
            alt=""
          />
        </div>
        {name}
      </div>

      <p>
        <span className={styles.buyButton} onClick={() => openModal()}>
          Buy
        </span>
      </p>
    </div>
  );
};

export default CoinNameRow;
