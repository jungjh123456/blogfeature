import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import HeaderContainer from "../container/HeaderContainer";
import MainSectionContainer from "../container/MainSectionContainer";
const MainViewWrap = styled.div`
  /* max-width: 1600px; */

  margin: 0 auto;
  overflow: hidden;
`;
export default function Home() {
  return (
    <MainViewWrap>
      <HeaderContainer />
      <MainSectionContainer />
    </MainViewWrap>
  );
}
