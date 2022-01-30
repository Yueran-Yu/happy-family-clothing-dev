import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const fontColor = css`
  color: #915103;
`
const fontWeight = css`
  font-weight: 800;
`
export const HeaderWrapper = styled.div`
  height: 70px;
  width: 75%;
  display: flex;
  justify-content: space-between;
  ${fontColor};
  ${fontWeight};
  margin-top: 30px;
  margin-left: 16%;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-left: 8%;
    margin-bottom: 20px;
    width: 90%;
  }
`

export const LogoWrapper = styled(Link)`
  height: 70px;
  width: 70px;
  display: block;


  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`

export const LogoDiv = styled.div`
  width: 50px;
  height: 50px;

  .logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }

`

export const OptionsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${fontColor};
  ${fontWeight};

  div {
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 13px;

  }
`

export const OptionLink = styled(Link)`
  padding: 10px;
  ${fontColor};
  ${fontWeight};
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 13px;
  }

`
