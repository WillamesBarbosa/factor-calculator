import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    margin: auto;
    width: 90%;
    background-color: white;
  `}
`;

export const Select = styled.select`
    width: 100%;
`;

export const Option = styled.option`
    width: 100%;
`;
