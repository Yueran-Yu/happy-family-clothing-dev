import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor}
`

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px auto;
  width: 60%;


  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const FormInputContainer = styled.input`
  background: none;
  color: ${subColor};
  font-size: 18px;
  display: block;
  border: none;
  padding-bottom: 10px;
  border-bottom: 1px solid ${subColor};
  margin: 25px auto;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`