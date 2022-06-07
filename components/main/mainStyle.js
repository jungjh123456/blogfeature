import styled from "styled-components";

export const MainSection1Wrap = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #148cff;
  position: relative;
  overflow: hidden;
  & > .container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    margin-top: 150px;
    /* justify-content: space-around; */
    max-width: 1600px;

    & > h1 {
      color: #fff;
      font-size: 25px;
      margin-right: 36px;
    }
    & > ul {
      margin: 0;
      & > li {
        color: #fff;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
        & > button {
          color: #fff;
          /* border: 1px solid #6100ff; */
        }
      }
    }
    & > .animation_div {
      & > div {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        background: #3232ff;
        opacity: 0.2;
        box-shadow: 1px 1px 5px #3232ff;
        transition: transform 1s;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const RecordRtcSectionWrap = styled.section`
  height: 100vh;
`;
