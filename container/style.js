import styled from "styled-components";

export const MainHeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;
  & > h1 {
    color: #fff;
  }
  & > ul {
    padding: 0;
    display: flex;
    & > li {
      list-style: none;
      margin-right: 16px;
      color: #fff;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const MainSectionWrap1 = styled.main`
  overflow: hidden;
`;
