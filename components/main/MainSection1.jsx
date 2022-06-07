import React, { useState, useEffect } from "react";
import AniDiv from "./AniDiv";
import { MainSection1Wrap } from "./mainStyle";

const MainSection1 = () => {
  return (
    <MainSection1Wrap>
      <div className="container">
        <h1>정지훈의 기술 블로그</h1>
        <ul>
          <li>
            1. <button>음성 기반 녹음 기능</button>
          </li>
          <li>
            2. <button>MBTI 검사지 만들기</button>
          </li>
          <li>
            3. <button>음성 기반 녹음 기능</button>
          </li>
        </ul>
        <AniDiv />
      </div>
    </MainSection1Wrap>
  );
};

export default MainSection1;
