import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 90vh;
    width: 90vw;
    margin: auto;
    margin-top: 10px;
    display: flex;
    background-color: rgba(23, 24, 26, 1);
    flex-direction: column;
  `}
`;
