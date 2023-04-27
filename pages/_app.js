import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
z;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
