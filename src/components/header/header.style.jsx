import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto 30px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-top: 30px;
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
`

export const OptionsWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
