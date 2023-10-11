import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    flex: 25%;
    display: flex;
   flex-direction: row;
  `}
`;

export const Statement = styled.p`
  flex: 30%;
  border: 1px solid white;
`;
export const Value = styled.p`
  flex: 70%;
  text-align: right;
`;
