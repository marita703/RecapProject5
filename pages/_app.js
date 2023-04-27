import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useArtStore } from "../stores/artpieces";
import { useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";

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
        <StyledHeader>Art Gallery</StyledHeader>
        <Component {...pageProps} />
        <StyledNavigation>
          <StyledLi>Favorites</StyledLi>
          <StyledLi>Spotlight</StyledLi>
          <StyledLi>Preview</StyledLi>
        </StyledNavigation>
      </SWRConfig>
    </>
  );
}
const StyledHeader = styled.header`
  display: flex;
  background-color: lightblue;
  height: 100px;
  font-size: 45px;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  border-radius: 5px;
`;

const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
  gap: 1.5em;
  font-size: 25px;
  align-items: center;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  border-radius: 5px;
`;

const StyledLi = styled.li`
  list-style-type: none;
`;
