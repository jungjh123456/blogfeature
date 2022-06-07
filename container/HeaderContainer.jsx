import Link from "next/link";
import React from "react";
import { MainHeaderWrap } from "./style";

const HeaderContainer = () => {
  return (
    <MainHeaderWrap>
      <h1>Jeongjihoon</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Feature</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Info</a>
          </Link>
        </li>
      </ul>
    </MainHeaderWrap>
  );
};

export default HeaderContainer;
