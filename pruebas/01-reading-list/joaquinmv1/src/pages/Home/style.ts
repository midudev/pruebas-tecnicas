import { styled } from "styled-components";

export const Main = styled.main`
  margin-block: 1rem;
`

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  height: 750px;
  gap: 10px;

  @media screen and (max-width:1775px) {
    align-items: flex-start;
  }
`

export const H1 = styled.h1`
  text-align: center;
  color: #ef9517;
  color: #6D31FA;
  color: #fff;
  /* border: 1px solid #6D31FA; */
  /* -webkit-text-stroke: #6D31FA;
  -webkit-text-stroke: 1.1px #6D31FA; */

`