// This should render a random Picture that accepts image and artist as props

import { useEffect, useState } from "react";

import Image from "next/image";
import { useArtStore } from "../../stores/artpieces";
import styled from "styled-components";

export function SpotLight() {
  const { artPiecesInfo } = useArtStore();

  const [randomObject, setRandomObject] = useState({});

  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    setRandomObject(randomObject);
  };

  useEffect(() => {
    getRandomObject(artPiecesInfo);
  }, [randomObject, artPiecesInfo]);

  console.log(randomObject);

  return (
    <>
      <StyledSection>
        <StyledImage
          src={randomObject.imageSource}
          alt="Art piece image"
          width={200}
          height={200}
        />
        <p> artist: {randomObject.artist}</p>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  width :600px
  height: 200px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-size: 40px;
  `;

const StyledImage = styled.img`
  width: 90%;
  height: 700px;
`;
