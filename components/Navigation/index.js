// needs to render navigation links: spotlight, favPieces, preview

import Link from "next/link";

import styled from "styled-components";

export function Navigation() {
  return (
    <>
      <StyledNavigation>
        <StyledLi>
          <Link href="/">Home</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/favorites">Favourites</Link>
        </StyledLi>
        <StyledLi>
          <Link href="/artpieces/">Gallery</Link>
        </StyledLi>
      </StyledNavigation>
    </>
  );
}
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledLi = styled.li`
  list-style-type: none;
`;
