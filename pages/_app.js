import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
const fetcher = (...args) => {
  console.log("Fetching Data");
  return fetch(...args).then((res) => res.json());
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
