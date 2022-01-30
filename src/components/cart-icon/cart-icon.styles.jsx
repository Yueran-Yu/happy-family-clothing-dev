import styled from 'styled-components';
import {fontColor} from "../header/header.style";

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${fontColor};

  .shopping-icon {
    width: 100%;
    height: 100%;
    position: relative;
    fill: #915103;
  }

  .item-count {
    font-size: 10px;
    font-weight: bold;
    left: 55%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    ${fontColor};

    @media screen and (max-width: 800px) {
      font-size: 10px;
      left: 55%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }
  }
`