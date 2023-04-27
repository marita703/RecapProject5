import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useArtStore } from "../stores/artpieces";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => {
  console.log("Fetching Data");
  return fetch(...args).then((res) => res.json());
};

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";

  const { setArtPiecesInfo } = useArtStore();

  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    setArtPiecesInfo(data);
  }, [data, setArtPiecesInfo]);

  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>Is loading</div>;

  console.log("data: ", data);

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
