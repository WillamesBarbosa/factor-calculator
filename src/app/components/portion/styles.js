import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${() => css`
    margin: auto;
    width: 90%;
    height: 5%;
    `}
    `;

export const Select = styled.select`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: rgba(41, 168, 255, 1);
    background-color: rgba(48, 49, 54, 1);
`;

export const Option = styled.option`
    width: 100%;
    height: 100%;
`;
