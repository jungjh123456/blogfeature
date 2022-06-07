import React from "react";
import MainSection1 from "../components/main/MainSection1";
import RecordRtcSection from "../components/main/RecordRtcSection";
import { MainSectionWrap1 } from "./style";

const MainSectionContainer = () => {
  return (
    <MainSectionWrap1>
      <MainSection1 />
      {/* <MainSection1 /> */}
      <RecordRtcSection />
    </MainSectionWrap1>
  );
};

export default MainSectionContainer;
