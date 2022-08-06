import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { GunProvider } from "../context/gunContext";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://xmxh2x1002bx.usemoralis.com:2053/server"
      appId="4fjOAtf41RbQ14WrPmekMQeN4rC9kbiWB12QW7ZF"
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
